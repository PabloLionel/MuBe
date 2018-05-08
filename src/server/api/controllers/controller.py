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
from api.config.setup import Setup
from api.aspects.aspect import Aspect
conf = Setup()
asp = Aspect()

# dependencias
from api.daos.db import Db
from api.services.service import Service
from api.entities.entitie import Entitie
from api.dtos.dtos import Dtos

db = Db()
enties = Entitie()
servis = Service()
dtos = Dtos()

class Controller(object):
  pass
