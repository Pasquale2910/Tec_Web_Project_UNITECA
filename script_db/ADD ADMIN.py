#importare pymongo
import time
import pymongo
from pymongo import MongoClient
import uuid

#loggare come admin nel cluster
client = MongoClient('mongodb+srv://admin:uniteca123@cluster0.znfxrbr.mongodb.net/test')

#entra nel database uniteca e assegno ad una variabile
uniteca = client["uniteca"]


#Parte utenti_______

#entra nella collection "utenti"
utenti = uniteca["utenti"]



print("Add admin to Uniteca script database")
time.sleep(1)
nam=input("Enter admin name :")
time.sleep(0.5)
sur=input("Enter admin surname :")
time.sleep(0.5)
mal=input("Enter admin email :")
time.sleep(0.5)
psw=input("Enter admin password :")
time.sleep(0.5)
if (len(nam)>2 and len(sur)>2 and len(mal)>6 and len(psw)>4):
    user = [{"_id": uuid.uuid4().hex, "Name": nam, "Surname": sur, "Email": mal, "Password": psw, "Type": "admin"},]
    x = utenti.insert_many(user)
else:
    time.sleep(0.5)
    print("Something gone wrong, please retry")



#stampa tutti i database connessi al cluster
print(client.list_database_names())

#stampa tutte le collection del database
print(uniteca.list_collection_names())
