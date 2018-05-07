'''
  Consideraciones IS:
  - Jamas toca una solicitu http.
  Aqui iria nuestra capa de negocio,
donde tendriamos los controladores.
Las verificaciones del negocio se
definen en esta capa (ej: nuevo
cliente debe ser mayor de edad (
Client().nacimiento(fecha).edad()>17
))
'''
# dependencias transversales:
from api.config.config import Config
from api.aspects.aspects import Aspects
conf = Config()
asp = Aspects()

# dependencias
from api.daos.db import Db
from api.services.services import Services
from api.entities.entities import Entities
from api.dtos.dtos import Dtos

db = Db()
enties = Entities()
servis = Services()
dtos = Dtos()

class Controllers(object):
  pass
