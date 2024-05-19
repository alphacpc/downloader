import random
from time import sleep

PEAGE_TAG = ["entrant", "sortant"]
PEAGE_CHECKPOINT = ["pikine", "poste thiaroye", "cap biche"]
PEAGE_CATEG = [
        {"categ": "C1", "label": "Moto", "price": 400},
        {"categ": "C2", "label": "Vehicule particulier", "price": 500},
        {"categ": "C3", "label": "Camionnette", "price": 800},
        {"categ": "C4", "label": "Car", "price": 1000},
        {"categ": "C5", "label": "Poids lourd", "price": 1000},
]

# categ - label - price - tag - checkpoint - datetime - date - time - datetime_categ_label_price_tag

while True:
        print(random.choice(PEAGE_CATEG))
        print(random.choice(PEAGE_TAG))
        print(random.choice(PEAGE_CHECKPOINT))
        sleep(1)
        
        
Catégorie de Véhicule	        Tronçon Diamniadio - AIBD
C1, Moto	                500	1 000   400
C2, Véhicule particulier	800	1 600   500
C3, Camionnette	                1 200	2 400   800
C4,C5 Car et Poids lourd	1 500	3 100   1000