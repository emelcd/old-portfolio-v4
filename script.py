import requests 
import random
import string
import json
url = "https://emelportfolio.herokuapp.com/msg"

d = requests.post(url, headers={'X-API-KEY': 'CEERBSNZAPENNY4RMFMMTB6M8K8L8N1Q'})

print(d.json())

with open('msg_rec.json', 'w') as f:
    json.dump(d.json(), f)