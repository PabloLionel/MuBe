'''
Solo declaramos las entidades
necesarias para satifacer
peticiones complejas de la a
"Daos"
'''
# dependencias transversales:
from api.config.config import Config
from api.aspects.aspects import Aspects
# dependencias
from api.entities.entities import Entities
from api.daos.db import Db

enties = Entities()
db = Db()

class Services:
  pass
