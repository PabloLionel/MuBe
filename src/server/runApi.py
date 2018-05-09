from api import api
#re = Qmierda()

@api.route("/")
def index():
  return "Vamos"
# def index():
#     return re.caca()

api.run(debug=True, port=5555)
