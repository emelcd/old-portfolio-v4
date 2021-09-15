from flask import Flask, render_template, jsonify, request, redirect
from os import environ
from uuid import uuid4
import json
from datetime import datetime
# get the time now
api_key = environ.get('API_KEY')

app = Flask(__name__)

@app.route('/')
def index():
    return render_template(template_name_or_list='index.html')

@app.route('/msg', methods=['POST'])
def about():
    if request.method != 'POST':
        return jsonify(error='Invalid request method'), 400
    # get the data from the POST request
    data = request.form.to_dict()
    headers = request.headers


    with open('msg.json', 'r') as f:
        msg = json.load(f)
    
    if headers['X-API-KEY'] == api_key:
        return msg


    msg[str(uuid4())] = {
        'msg': data['message'],
        'name': data['name'],
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    with open('msg.json', 'w') as f:
        json.dump(msg, f)
    

    return redirect('/')

@app.route('/get_msg', methods=['GET', 'POST'])
def get_msg():
    if request.method == 'GET':
        return """
        <form  method="POST">
        <input name="password" type="password"></input>
        <input type="submit">
        </form>
        """
    elif request.method == 'POST':
        request.form.to_dict()
        if request.form['password'] == api_key:
            with open('msg.json', 'r') as f:
                msg = json.load(f)
            return jsonify(msg=msg)
        else:
            return jsonify(error='Invalid API Key'), 400




if __name__ == '__main__':
    app.run(debug=True)