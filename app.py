from flask import Flask, jsonify
import requests 
import os
from datetime import datetime, timedelta

app = Flask(__name__)
api_key = os.getenv("NEWS_API_KEY") ##pulls from server settings 
last_day = (datetime.now() - timedelta(hours=24)).strftime("%Y-%m-%dT%H:%M:%SZ")

#AI Endpoint
@app.route("/api/AInews")
def AInews():
    url = "https://gnews.io/api/v4/search"
    params = {
        "q":"artificial intelligence",
        "lang" : "en",
        "from": last_day,
        "max": 10,  #freetier minimum impacts total - RISK  
        "token": api_key
    }
    response = requests.get(url, params=params)
    return jsonify(response.json()) ##returns result to browser

#Mainufacturing, pharma and AI endpoint
@app.route("/api/ManAIPharmanews")
def ManAIPharmanews():
    url = "https://gnews.io/api/v4/search"
    params = {
        "q":"(artificial intelligence) AND Manufacturing OR Pharmaceuticals", # OR has higher precedence so should work, ref docs 
        "lang" : "en",
        "from": last_day,
        "max": 10,
        "token": api_key
    }
    response = requests.get(url, params=params)
    return jsonify(response.json()) ##returns result to browser
