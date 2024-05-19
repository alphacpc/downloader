import random
from pprint import pprint
from time import sleep


TER_PAY = ["Espece", "Carte voyage", "Carte abonnement"]
TER_ZONE = [
        {"zone": "Zone1", "price" : 500},
        {"zone": "Zone2", "price" : 1000},
        {"zone": "Zone3", "price" : 1500},
        {"zone": "Zone0", "price" : 2500},
]
TER_CHECKPOINT = [ "Dakar", "Colobane", "Hann", "Beaux Maraîchers", 
"Pikine", "Thiaroye", "Yeumbeul", "Keur Massar", 
"Keur Mbaye Fall", "Rufisque", "Bargny", "Diamniadio"]