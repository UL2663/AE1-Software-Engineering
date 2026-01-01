#AI Endpoint
from flask import Flask, jsonify
import requests 
import os

app = Flask(__name__)

api_key = os.getenv("NEWS_API_KEY") ##pulls from server settings 

@app.route("/api/news")
def news():
    url = "https://gnews.io/api/v4/search"
    params = {
        "q":"artificial intelligce",
        "lang" : "en",
        "max": 5000,
        "token": api_key
    }
    response = requests.get(url, params=params)
    return jsonify(response.json()) ##returns result to browser

if __name__ == "__main__":
    app.run()