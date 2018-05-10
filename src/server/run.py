from flask import Flask, render_template as ren, request as req, json
app = Flask(__name__)
from api.resources.resource import Resultado
result = Resultado()

@app.route('/')
def index():
  return ren('index.html')

@app.route("/testChi", methods=['POST'])
def testChi():
  try:
    return json.dumps(result.respuestaChicuadrado(int(req.json['modulo']),int(req.json['cant']),int(req.json['a']),req.json['semillas'],float(req.json['error'])))
  except Exception() as e:
    return json.dumps({'errorServer': e})
  # else:
  #   return json.dumps(result.respuestaChicuadrado(1000, 10, 13, [250, 253], 0.1))

  # {modulo: 1000,cant: 10,a: 13,semillas: [250],error: 0.1}
  # enviar del cliente:
  # req.open( "POST", '/testChi', true );req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");req.send( JSON.stringify({modulo: 1000,cant: 10,a: 13,semillas: [250],error: 0.1}) );
@app.route("/ruleta", methods=['POST'])
def ruleta():
  try:
    return json.dumps(result.respuestaCasoRuleta(int(req.json['modulo']),int(req.json['cant']),int(req.json['a']),req.json['semillas']))
  except Exception() as e:
    return json.dumps({'errorServer': e})

  # {modulo: 1000,cant: 10,a: 13,semillas: [250]}
@app.route("/indice", methods=['POST'])
def indice():
  try:
    return json.dumps(result.respuestaIndice(int(req.json['modulo']),int(req.json['cant']),int(req.json['a']),req.json['semillas'],float(req.json['error'])))
  except Exception() as e:
    return json.dumps({'errorServer': e})

  # {modulo: 1000,cant: 10,a: 13,semillas: [250],error: 0.1}

@app.route("/normal", methods=['POST'])
def normal():
  try:
    return json.dumps(result.respuestaInvNormal(int(req.json['modulo']),int(req.json['cant']),int(req.json['a']),req.json['semillas'],req.json['x'],req.json['px'],req.json['mu'],req.json['sigma'],req.json['stockPedido'],req.json['cantPedido']))
  except Exception() as e:
    return json.dumps({'errorServer': e})

  # {modulo: 1000,cant: 10,a: 13,semillas: [250],x: [2, 3, 4],px: [0.30, 0.40, 0.30],mu: 150,sigma: 25,stockPedido: [{'stock': 400, 'pedido': [550, 278, 196]},{'pedido': 12, 'stock': [36, 45, 52]}],cantPedido: 25}

@app.route("/inventarioParcial", methods=['POST'])
def respuestaInvParcial():
  try:
    return json.dumps(result.respuestaInvParcial(int(req.json['modulo']),int(req.json['cant']),int(req.json['a']),req.json['semillas'],req.json['x1'],req.json['px1'],req.json['x2'],req.json['px2'],req.json['dic']))
  except Exception() as e:
    return json.dumps({'errorServer': e})

  # {modulo: 1000,cant: 10,a: 13,semillas: [250],x1: [2, 3, 4],px1: [0.30, 0.40, 0.30], x2: [1, 2, 3, 4, 5, 6, 7, 8, 9], px2: [0.135, 0.271, 0.271, 0.180, 0.090, 0.036, 0.012, 0.004, 0.001], dic: [{'stock': 400, 'pedido': [550, 278, 196]}, {'pedido': 12, 'stock': [36, 45, 52]}]}
@app.route("/inventarioPoisson", methods=['POST'])
def respuestaInvPoisson():
  try:
    return json.dumps(result.respuestaInvPoisson(int(req.json['modulo']),int(req.json['cant']),int(req.json['a']),req.json['semillas'],req.json['x1'],req.json['px1'],req.json['lambda'],req.json['stockPedido'],req.json['cantPedido']))
  except Exception() as e:
    return json.dumps({'errorServer': e})



if __name__ == "__main__":
    app.run(debug=True, port=4444, host='0.0.0.0')
