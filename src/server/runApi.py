from flask import Flask, request
from api import api
import json
from api.resources.resource import Resultado
# muestra = Resultado()
# print(muestra.respuestaChicuadrado(1000, 365, 13, [251, 252, 362, 455, 741], 0.1))
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


@api.route("/test", methods=['POST'])
@crossdomain(origin='*')
def test():
  print(json.loads(request.data))
  return json.dumps({'cualquier': 'verdura'})




api.run(host='0.0.0.0',debug=True, port=5555)
