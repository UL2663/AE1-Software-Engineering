#AI Endpoint
from flask import Flask, jsonify
import requests 
import os
from datetime import datetime, timedelta

app = Flask(__name__)
api_key = os.getenv("NEWS_API_KEY") ##pulls from server settings 
last_day = (datetime.bstnow() - timedelta(hours=24).strftime("%Y-%m-%dT%H:%M:%SZ"))

@app.route("/api/news")
def news():
    url = "https://gnews.io/api/v4/search"
    params = {
        "q":"artificial intelligce",
        "lang" : "en",
        "from": last_day,
        "max": 5000,
        "token": api_key
    }
    response = requests.get(url, params=params)
    return jsonify(response.json()) ##returns result to browser


