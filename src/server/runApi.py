from flask import Flask, request, render_template, jsonify
import json
from api.resources.resource import Resultado
#from api.config.cors import crossdomain

api = Flask(__name__)
#from api. import Resultado
# muestra = Resultado()
# print(muestra.respuestaChicuadrado(1000, 365, 13, [251, 252, 362, 455, 741], 0.1))
@api.route("/")
def index():
  return render_template('index.html')

data = {
  'modulo': 1000,
  'cant': 36,
  'A': 13,
  'semilla': [251, 362, 412, 125, 555],
  'error': 0.1
}
@api.route("/chi", methods=['POST'])#, methods=['GET', 'POST'])
def chi():
  #return "{}".format(json.dumps(data))
  muestra = Resultado()
  jso = json.loads(data)

  return json.dumps(
    muestra.respuestaChicuadrado(
      jso['modulo'],
      jso['cant'],
      jso['A'],
      jso['semilla'],
      jso['error']
      )
    )

#@crossdomain(origin='*')
@api.route("/test", methods=['POST'])
def test():
  jso = json.loads(request.data)
  print(jso)
  user = jso['user']
  password = jso['password']

  return jsonify(first_name=user, last_name=password)

  # data = request.get_json()
  # result = ''
  # for item in data:
  #   result += str(item['make']) + '\n'
  # return result
  # user =  request.form['mama'];
  # password = request.form['jesu'];
  # return json.dumps({'status':'OK','user':user,'pass':password});
  # print(json.loads(request.data))
  # return json.dumps({'cualquier': 'verdura'})




api.run(host='0.0.0.0',debug=True, port=5555)
