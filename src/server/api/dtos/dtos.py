'''
Este modulo tiene la responsabilidad
de convertir los datos en entidades
o en vistas(JSON) dependiendo el caso.
'''

# dependencias transversales:
from api.config.setup import Setup
from api.aspects.aspect import Aspect
conf = Setup()
asp = Aspect()
# dependencias
from api.entities.entitie import Entitie
import json
enties = Entitie()

class Dtos:
  pass
