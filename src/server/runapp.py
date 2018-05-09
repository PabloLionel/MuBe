from flask import Flask, render_template, request
from app import app
import json

@app.route("/")
def index():
  return render_template('index.html')


# @app.route("/test", methods=['GET'])
# def test():
#   return json.dumps({'pepe': 23})

app.run(host='0.0.0.0', port=4444, debug=True)
