from flask import request
from api import api
from api.config.cors import crossdomain
#re = Qmierda()
import json

@api.route("/")
def index():
  return "Vamos"
# def index():
#     return re.caca()


@api.route("/test", methods=['POST'])
@crossdomain(origin='*')
def test():
  print(json.loads(request.data))
  return json.dumps({'cualquier': 'verdura'})




api.run(host='0.0.0.0',debug=True, port=5555)
