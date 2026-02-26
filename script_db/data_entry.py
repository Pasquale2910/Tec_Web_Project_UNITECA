#importare pymongo
import pymongo
from pymongo import MongoClient
import uuid

#loggare come admin nel cluster
client = MongoClient('mongodb+srv://admin:uniteca123@cluster0.znfxrbr.mongodb.net/test')

#entra nel database uniteca e assegno ad una variabile
uniteca = client["uniteca"]



#entra nella collection "Libri"
mycol = uniteca["libri"]
#aggiunge o sovrascrive elementi nella collection
mylist = [
  { "_id": uuid.uuid4().hex, "name": "Il signore degli anelli", "n.writer": "J. R. R. Tolkien", "tag": "+adventure +cult", "ann.d.p": "1954", "editore": "Caio",  "disponibile": Int32"1"},
  { "_id": uuid.uuid4().hex, "name": "Il mio bambino difficile", "n.writer": "Hoffman", "tag": "+int +study", "ann.d.p": "1982", "editore": "Mondadori", "disponibile": Int32"1"},
  { "_id": uuid.uuid4().hex, "name": "harry potter", "n.writer": "J. K. Rowling", "tag": "+fantasy +mag", "ann.d.p": "2002", "editore": "Feltrinelli", "disponibile": Int32"1"},
  { "_id": uuid.uuid4().hex, "name": "Fisica avanzata II", "n.writer": "Albert", "tag": "+study +science", "ann.d.p": "2021", "editore": "Caio", "disponibile": Int32"1"},
  { "_id": uuid.uuid4().hex, "name": "C for dummys", "n.writer": "K. T. Mellown", "tag": "+comedy +science", "ann.d.p": "2014", "editore": "Feltrinelli", "disponibile": Int32"1"}
]

x = mycol.insert_many(mylist)

#stampa tutti gli elementi della collection
print ("elementi presenti in Libri")
for x in mycol.find():
  print(x)



#Parte utenti_______

#entra nella collection "utenti"
utenti = uniteca["utenti"]

#aggiunge o sovrascrive elementi nella collection
user = [
    {"_id": uuid.uuid4().hex, "Name": "Nicola", "Surname": "Cirillo", "Email": "nicolacirillo@studenti.universita.it", "Password": "nicola", "Type": "admin"},
    {"_id": uuid.uuid4().hex, "Name": "Filippo", "Surname": "Spitaletta", "Email": "filippospitaletta@studenti.universita.it", "Password": "campania", "Type": "admin"},
    {"_id": uuid.uuid4().hex, "Name": "Pasquale", "Surname": "Ferrandino", "Email": "pasqualeferrandino@studenti.universita.it", "Password": "pasquale", "Type": "admin"},
    {"_id": uuid.uuid4().hex, "Name": "Mario", "Surname": "Esposito", "Email": "mariorossi@studenti.universita.it", "Password": "mario", "Type": "user"},
    {"_id": uuid.uuid4().hex, "Name": "Marcello", "Surname": "Bianchi", "Email": "angelobianchi@studenti.universita.it", "Password": "marcello", "Type": "user"}
       ]

x = utenti.insert_many(user)

#stampa tutti gli elementi della collection
print ("elementi presenti in Libri")
for x in mycol.find():
  print(x)



#Parte reservation_____

reservation = uniteca["posti"]

#aggiunge o sovrascrive elementi nella collection
y = datetime.datetime(2023, 1, 20, 8, 20)
z = datetime.datetime(2023, 1, 20, 11)
posti = [
            {"_id": uuid.uuid4().hex, "id_user": "c600d78bf17e445891d201de267e3b26", "s_date": y, "e_date": z}
            
        ]

x = reservation.insert_many(posti)







#carrelli utenti

car = uniteca["carrello"]

#aggiunge o sovrascrive elementi nella collection

carrello = [
            {"_id": uuid.uuid4().hex, "id_user": "7b7d8525873e441794cdd327204291a9" , "loaned_book": "0", "Email": "mose@studenti.universita.it" },
            {"_id": uuid.uuid4().hex, "id_user": "c600d78bf17e445891d201de267e3b26" , "loaned_book": "0", "Email": "paolacrisci@studenti.universita.it" }
           ]

x = car.insert_many(carrello)




#stampa tutti i database connessi al cluster
print(client.list_database_names())

#stampa tutte le collection del database
print(uniteca.list_collection_names())
