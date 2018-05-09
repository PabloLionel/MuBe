"""
Solo declaramos las entidades
necesarias para satifacer
peticiones complejas de la a
'Daos'
"""
# dependencias transversales:
from api.config.setup import Setup
from api.aspects.aspect import Aspect
# dependencias
from api.entities.entitie import Entitie
from api.daos.db import Db

enties = Entitie()
db = Db()

class Service:
  pass
