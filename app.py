from flask import Flask, render_template, request, redirect, jsonify, url_for, session, json
from flask_cors import CORS
from flask_session import Session
from pymongo import MongoClient
from datetime import datetime, timedelta
from datetime import date
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from oauthlib.oauth2 import WebApplicationClient
import requests
import os
import uuid
import os
import secrets


#MongoDB client connection in "uniteca" database and list declaration 
client = MongoClient('mongodb+srv://admin:uniteca123@cluster0.znfxrbr.mongodb.net/test')
db = client["uniteca"]
libb = db["libri"]
utenti = db["utenti"]
posti = db["posti"]
carrello = db["carrello"]
UPLOAD_FOLDER = '../uniteca/static/images/'

# Configuration GOOGLE
GOOGLE_CLIENT_ID = os.environ.get("1073136912988-mcqp9mq0d096uvrapmkrtbjbnbsv4eue.apps.googleusercontent.com", None)
GOOGLE_CLIENT_SECRET = os.environ.get("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", None)
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)

# Flask app setup
app = Flask(__name__)
app.secret_key = 'Keyuniteca'
cors = CORS(app)
# User session management setup
login_manager = LoginManager()
login_manager.init_app(app)

#global variable for books
libro = ""
libro1 = ""
libro2 = ""
libro3 = ""


secret_key = secrets.token_hex(16)
# example output, secret_key = 000d88cd9d90036ebdd237eb6b0db000
app.config['SECRET_KEY'] = secret_key

# OAuth 2 client setup
client = WebApplicationClient(GOOGLE_CLIENT_ID)

# Flask-Login helper to retrieve a user from our db
@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)
    
def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()

@app.route("/login/")
def login():
    # Find out what URL to hit for Google login
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]

    # Use library to construct the request for Google login and provide
    # scopes that let you retrieve user's profile from Google
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    return redirect('index.html')

@app.route("/login/callback")
def callback():
    # Get authorization code Google sent back to you
    code = request.args.get("code")
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]
    # Prepare and send a request to get tokens! Yay tokens!
    token_url, headers, body = client.prepare_token_request(
    token_endpoint,
    authorization_response=request.url,
    redirect_url=request.base_url,
    code=code
    )
    token_response = requests.post(
    token_url,
    headers=headers,
    data=body,
    auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )
    # Parse the tokens!
    client.parse_request_body_response(json.dumps(token_response.json()))
    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)
    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]
        users_email = userinfo_response.json()["email"]
        picture = userinfo_response.json()["picture"]
        users_name = userinfo_response.json()["given_name"]
    else:
        return "User email not available or not verified by Google.", 400
    # Create a user in your db with the information provided
    # by Google
    user = User(
        id_=unique_id, name=users_name, email=users_email, profile_pic=picture
    )
    
    # Doesn't exist? Add it to the database.
    if not User.get(unique_id):
        User.create(unique_id, users_name, users_email, picture)

    # Begin user session by logging the user in
    login_user(user)

    # Send user back to homepage
    return redirect(url_for("index"))


# Index route
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        login_user = utenti.find_one({"Email": request.form['Email']})
        if login_user:
            password = request.form['Password']
            if login_user['Password'] == password:
                session['key'] = 'value'
                session["_id"] = login_user["_id"]
                session['Type'] = login_user['Type']
                if login_user['Type'] == 'admin':
                    return redirect('admin')
                else:
                    return redirect('user')
            else:
                return render_template('index.html', error=2)
        return render_template('index.html', error=3)
    return render_template('index.html')


# Registration route
@app.route('/registration/',methods = ['POST', 'GET'])
def registration():
    if request.method == 'POST':
        emailcheck = request.form['FromEmailAddress']
        if emailcheck.find('studenti.universita.it') == -1:
            return render_template('registration.html', error=3)
        else:
            reg_user = utenti.find_one({"Email": request.form['FromEmailAddress']})
            if reg_user:
                return render_template('registration.html', error=1)
            else:
                pss = request.form['Password']
                if pss == request.form['ConfirmPassword']:
                    utenti.insert_one({"_id": uuid.uuid4().hex, "Name": request.form['Name'], "Surname": request.form['Surname'], "Email": request.form['FromEmailAddress'], "Password": request.form['Password'], "Type": "user"})
                    return render_template('registration.html', succ=1)
                else:
                    return render_template('registration.html', error=2)
    return render_template('registration.html')



#user home page
@app.route('/user',methods = ['POST', 'GET'])
def user():
    usertype = utenti.find_one({'_id': session['_id']})
    if(usertype):
        if session['_id'] != usertype['_id']:
            return render_template('index.html', error=1)
    dispcar=list(carrello.find({"id_user": usertype['_id']}))
    li=list(posti.find({"id_user": usertype['_id']}))
    return render_template('user.html', dispcar=dispcar, li=li)




#user search_borrow
@app.route('/search_borrow/',methods = ['POST', 'GET'])
def search_borrow():
    all_books=list(libb.find({}))
    global libro
    if request.method == 'POST':
        ric = request.form['name']
        if ric=="":
            ric="a"
        ric=ric[0].upper()+ric[1:len(ric)]
        libro = libb.find_one({"name": request.form['name']})
        if libro:
            global libro1
            libro1 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$ne" : libro["_id"]}})
            if not libro1:
                libro1 = libb.find_one({'_id': { "$ne" : libro["_id"]}})
            global libro2 
            libro2 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            if not libro2:
                libro2 = libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            global libro3
            libro3 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            if not libro3:
                libro3 = libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            libri=tuple((libro,libro1,libro2,libro3))
            return render_template('user1.html',libri=libri,all_books=all_books)
        else:
            libro = libb.find_one({"name":{ "$regex" : "^"+ric[0]}})
            if not libro:
                libro=libb.find_one({"tag" : "+fantasy"})
            libro1 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$ne" : libro["_id"]}})
            if not libro1:
                libro1=libb.find_one({'_id': { "$ne" : libro["_id"]}})
            libro2 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            if not libro2:
                libro2=libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            libro3 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            if not libro3:
                libro3=libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            libri=tuple((libro,libro1,libro2,libro3))
            return render_template('user1.html',libri=libri,all_books=all_books)
    user = utenti.find_one({'_id': session['_id']})
    if(user):
        if session['_id'] == user['_id']:
            libro=libb.find_one({"tag" : "+science"})
            libro1=libb.find_one({'_id': { "$ne" : libro["_id"]}})
            libro2=libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            libro3=libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            libri=tuple((libro,libro1,libro2,libro3))
            return render_template('user1.html',libri=libri,all_books=all_books)
        else:
            return render_template('index.html', error=1)          
    



#user loan a book
@app.route('/Loan_book/',methods = ['POST', 'GET'])
def Loan_book():
    user = utenti.find_one({'_id': session['_id']})
    if(user):
            all_books=list(libb.find({}))
            if request.method == 'POST':
                s_id = request.form['loan_book']
                if s_id == "lib0":
                    if libro['disponibile']>=1:
                        ver = carrello.find_one({"id_user": user['_id'],"loaned_book": libro['_id']})
                        if ver:
                            libri=tuple((libro,libro1,libro2,libro3))
                            return render_template('user1.html',libri=libri, all_books=all_books,error=0)
                        carrello.insert_one({"_id": uuid.uuid4().hex, "id_user": user['_id'],"loaned_book": libro['_id'],"name": libro['name'], "Email": user['Email'], "Disponibile": (libro['disponibile']-1)})
                        disp=libro['disponibile']-1
                        query={'_id': libro['_id']}
                        newvalues = { "$set": { "disponibile": disp } }
                        libb.update_one(query, newvalues)
                    else:
                        libri=tuple((libro,libro1,libro2,libro3))
                        return render_template('user1.html',libri=libri, all_books=all_books,error=0)
                elif s_id == "lib1":
                    if libro1['disponibile']>=1:
                        ver = carrello.find_one({"id_user": user['_id'],"loaned_book": libro1['_id']})
                        if ver:
                            libri=tuple((libro,libro1,libro2,libro3))
                            return render_template('user1.html',libri=libri,all_books=all_books, error=0)
                        carrello.insert_one({"_id": uuid.uuid4().hex,"id_user": user['_id'],"loaned_book": libro1['_id'],"name": libro1['name'], "Email": user['Email'], "Disponibile": (libro1['disponibile']-1)})
                        disp=libro1['disponibile']-1
                        query={'_id': libro1['_id']}
                        newvalues = { "$set": { "disponibile": disp } }
                        libb.update_one(query, newvalues)
                    else:
                        libri=tuple((libro,libro1,libro2,libro3))
                        return render_template('user1.html',libri=libri, all_books=all_books,error=0)
                elif s_id == "lib2":
                    if libro2['disponibile']>=1:
                        ver = carrello.find_one({"id_user": user['_id'],"loaned_book": libro2['_id']})
                        if ver:
                            libri=tuple((libro,libro1,libro2,libro3))
                            return render_template('user1.html',libri=libri,all_books=all_books, error=0)
                        carrello.insert_one({"_id": uuid.uuid4().hex,"id_user": user['_id'],"loaned_book": libro2['_id'],"name": libro2['name'], "Email": user['Email'], "Disponibile": (libro2['disponibile']-1)})
                        disp=libro2['disponibile']-1
                        query={'_id': libro2['_id']}
                        newvalues = { "$set": { "disponibile": disp } }
                        libb.update_one(query, newvalues)
                    else:
                        libri=tuple((libro,libro1,libro2,libro3))
                        return render_template('user1.html',libri=libri,all_books=all_books, error=0)
                else:
                    if libro3['disponibile']>=1:
                        ver = carrello.find_one({"id_user": user['_id'],"loaned_book": libro3['_id']})
                        if ver:
                            libri=tuple((libro,libro1,libro2,libro3))
                            return render_template('user1.html',libri=libri,all_books=all_books, error=0)
                        carrello.insert_one({"_id": uuid.uuid4().hex,"id_user": user['_id'],"loaned_book": libro3['_id'],"name": libro3['name'], "Email": user['Email'], "Disponibile": (libro3['disponibile']-1)})
                        disp=libro3['disponibile']-1
                        query={'_id': libro3['_id']}
                        newvalues = { "$set": { "disponibile": disp } }
                        libb.update_one(query, newvalues)
                    else:
                        libri=tuple((libro,libro1,libro2,libro3))
                        return render_template('user1.html',libri=libri,all_books=all_books, error=0)
                libri=tuple((libro,libro1,libro2,libro3))
                return render_template('user1.html',libri=libri,all_books=all_books, succ=1)
    else:
        return ("user non trovato")







#user book a place
@app.route('/book_place',methods = ['POST', 'GET'])
def book_place():
    pl=0
    start=("9:00")
    start=datetime.strptime(start,"%H:%M")
    end=("19:00")
    end=datetime.strptime(end,"%H:%M")
    if request.method == 'POST':
        date_s = request.form['date_s']
        if date_s == "":
            return render_template('user2.html', error=0, pl=pl)
        date_s = datetime.strptime(date_s, "%Y-%m-%d")
        time_s = request.form['time_s']
        if time_s == "":
            return render_template('user2.html', error=1, pl=pl)
        time_s = datetime.strptime(time_s, "%H:%M")
        time_e = request.form['time_e']
        if time_e == "":
            return render_template('user2.html', error=3, pl=pl)
        time_e = datetime.strptime(time_e, "%H:%M")
        if time_s>start:
            if time_e<end:
                posto = posti.find_one({"s_date": date_s, "s_time": time_s})
                if posto:
                    if posto['n_p']>=100:
                        return render_template('user2.html', error=4, pl=pl)
                    else:
                        posto['n_p']=posto['n_p']+1
                        user = utenti.find_one({'_id': session['_id']})
                        posti.insert_one({"_id": uuid.uuid4().hex, "id_user": user['_id'],"Email": user['Email'], "s_date": date_s,"s_time": time_s,"e_time": time_e,"n_p": posto['n_p'],"comm": request.form['Comments']})
                        pl=tuple((posti.find_one({"id_user": user['_id']})))
                        return render_template('user2.html', pl=pl) 
                else:
                    user = utenti.find_one({'_id': session['_id']})
                    posti.insert_one({"_id": uuid.uuid4().hex, "id_user": user['_id'],"Email": user['Email'] , "s_date": date_s,"s_time": time_s,"e_time": time_e,"n_p": 1,"comm": request.form['Comments']})
                    pl=tuple((posti.find_one({"id_user": user['_id']})))
                    return render_template('user2.html', pl=pl)  
            else:
                return render_template('user2.html', error=6, pl=pl)
        else:
            return render_template('user2.html', error=7, pl=pl)
    else:
        user = utenti.find_one({'_id': session['_id']})
        if(user):
            if session['_id'] == user['_id']:
                return render_template('user2.html', pl=pl)  
        else:
            return render_template('index.html', error=1)  







#admin home
@app.route('/admin',methods = ['POST', 'GET'])
def admin():
    user = utenti.find_one({'_id': session['_id']})
    if(user):
        if user['Type'] == 'admin':
            if session['_id'] == user['_id']:
                return render_template('admin.html')
    return render_template('index.html', error=1)


#admin add/remove book
@app.route('/addrm_book',methods = ['POST', 'GET'])
def addrm_book():
    user = utenti.find_one({'_id': session['_id']})
    if(user):
        if user['Type'] == 'admin':
            if session['_id'] == user['_id']:
                all_books=list(libb.find({}))
                if request.method == 'POST':
                    nomelibro=libb.find_one({'name': request.form['name']})
                    if nomelibro:
                        return render_template('admin1.html',error=1, all_books=all_books)
                    else:
                        if request.form['name']=="":
                            return render_template('admin1.html', all_books=all_books)
                        else:
                            if request.form['disponibile']=="0":
                                return render_template('admin1.html', all_books=all_books)
                            else:
                                nm = request.form['name']
                                nm = nm[0].upper()+nm[1:len(nm)]
                                tg = request.form['tag']
                                tg = "+"+tg
                                disp=request.form['disponibile']
                                disp=int(disp)
                                libb.insert_one({"_id": uuid.uuid4().hex, "name": nm, "n_writer": request.form['n_writer'], "tag": tg, "ann_d_p": request.form['ann_d_p'], "editore": request.form['editore'], "disponibile": disp})
                return render_template('admin1.html', all_books=all_books)
    return render_template('index.html', error=1)



#admin reservation
@app.route('/reservation',methods = ['POST', 'GET'])
def reservation():
    if request.method == 'POST':
        date = request.form['date']
        if date == "":
            tot_pos = list(db.posti.find({}))
            tot_pos = tuple((tot_pos))
            return render_template('admin2.html', error=0 ,tot_pos=tot_pos)
        else:
            date = datetime.strptime(date, "%Y-%m-%d")
            tot_pos = list(db.posti.find({"s_date": date}))
            tot_pos = tuple((tot_pos))
            return render_template("admin2.html", tot_pos=tot_pos)
    else:    
        user = utenti.find_one({'_id': session['_id']})
        if(user):
            if user['Type'] == 'admin':
                if session['_id'] == user['_id']:
                    tot_pos = list(db.posti.find({}))
                    if tot_pos:
                        tot_pos = tuple((tot_pos))
                        return render_template('admin2.html', tot_pos=tot_pos)
                    else:
                        tot_pos = posti.find_one()
                        return render_template('admin2.html', tot_pos=tot_pos)
        return render_template('index.html', error=1)




#admin loaned book
@app.route('/loaned_book',methods = ['POST', 'GET'])
def loaned_book():
    user = utenti.find_one({'_id': session['_id']})
    if(user):
        if user['Type'] == 'admin':
            if session['_id'] == user['_id']:
                tot_car = list(db.carrello.find({}))
                if request.method == 'POST':
                    b_id=request.form['btt_book']
                    size=len(tot_car)
                    size=int(size)
                    b_id=int(b_id)
                    if size<=b_id:
                        return render_template('admin3.html', tot_car=tot_car, error=2)
                    val=tot_car[int(b_id)]
                    car_book=carrello.find_one({"loaned_book": val['loaned_book']})
                    book=libb.find_one({"_id": car_book['loaned_book']})
                    dispo=book['disponibile']
                    dispo=dispo+1
                    query={'_id': book['_id']}
                    newvalues = { "$set": { "disponibile": dispo } }
                    libb.update_one(query, newvalues)
                    carrello.delete_one({'loaned_book': car_book['loaned_book']})
                    return redirect(url_for('loaned_book'))
                return render_template('admin3.html', tot_car=tot_car)
    return render_template('index.html', error=1)




# Search book function
@app.route('/searchoff/',methods = ['POST', 'GET'])
def searchoff():
    if request.method == 'POST':
        ric = request.form['name']
        if ric=="":
            return render_template('index.html', error=4)
        ric=ric[0].upper()+ric[1:len(ric)]
        libro = libb.find_one({"name": request.form['name']})
        if libro:
            libro1 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$ne" : libro["_id"]}})
            if not libro1:
                libro1 = libb.find_one({'_id': { "$ne" : libro["_id"]}})
            libro2 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            if not libro2:
                libro2 = libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            libro3 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            if not libro3:
                libro3 = libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            libro=tuple((libro,libro1,libro2,libro3))
            return render_template('books.html',libro=libro)
        else:
            libro = libb.find_one({"name":{ "$regex" : "^"+ric[0]}})
            if not libro:
                libro=libb.find_one({"tag" : "+fantasy"})
            libro1 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$ne" : libro["_id"]}})
            if not libro1:
                libro1=libb.find_one({'_id': { "$ne" : libro["_id"]}})
            libro2 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            if not libro2:
                libro2=libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"]]}})
            libro3 = libb.find_one({"name":{ "$regex" : "^"+ric[0]}, '_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            if not libro3:
                libro3=libb.find_one({'_id': { "$nin" : [libro["_id"], libro1["_id"], libro2["_id"]]}})
            libro=tuple((libro,libro1,libro2,libro3))
            return render_template('books.html',libro=libro)








#Reset password route
@app.route('/resetpwd',methods = ['POST', 'GET'])
def resetpwd():
    return render_template('resetpwd.html')



#logout "Close session"
@app.route('/logout', methods=['POST', 'GET'])
def logout():
    session.pop('_id', None)
    return redirect(url_for('index'))


if __name__ == '__main__':
   app.run(debug = True)
   