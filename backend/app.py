from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    #  do something
    return 'Hello, from Flask!'