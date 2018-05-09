from app import app

@app.route("/")
def index():
  return "Pepe"

app.run(debug=True, port=4444)
