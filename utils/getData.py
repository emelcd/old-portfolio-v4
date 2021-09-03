import requests
from json import dump
data = []

url = "https://api.github.com/search/repositories?q=user:emelcd"

def getData(url):
    url = url.split('{')[0]
    r = requests.get(url, headers={'Authorization': 'token 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'})
    if r.status_code == 200:
        return r.json()
    else:
        return []

# bits to Kb
def bitsToKb(bits):
    # return Kb and cut the float to 4 decimal places
    return str(round(bits/1000, 4)) + "Kb"
       
def filterContent (data):
    fh = []
    for i in data:
        obj = {
            'name': i['name'],
            'size': bitsToKb(i['size']),
            'type' : i['type'],
            'html_url': i['html_url'],
        }
        fh.append(obj)
    return fh


json = requests.get(url, headers={'Authorization': 'token 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'}).json()

for i in json['items']:
    obj = {
        'name': i['name'],
        'id': i['id'],
        'full_name': i['full_name'],
        'html_url': i['html_url'],
        'description': i['description'],
        'languages': getData(i['languages_url']),
        'created_at': i['created_at'],
        'updated_at': i['updated_at'],
        'stargazers_count': i['stargazers_count'],
        'forks_count': i['forks_count'],
        'commits' : len(getData(i['commits_url'])),
        'private': i['private'],
        'size': i['size'],
        'contents' : filterContent(getData(i['contents_url'])),
        'owner': {
            'login': i['owner']['login'],
            'avatar_url': i['owner']['avatar_url'],
            'html_url': i['owner']['html_url'],
            'type': i['owner']['type'],
        }
        
    }
    data.append(obj)
    

# dump the data inside a json file
with open('data.json', 'w') as outfile:
    dump(data, outfile)