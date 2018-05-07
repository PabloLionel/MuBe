'''
Este modulo tiene la responsabilidad
de convertir los datos en entidades
o en vistas(JSON) dependiendo el caso.
'''

# dependencias transversales:
from api.config.config import Config
from api.aspects.aspects import Aspects
conf = Config()
asp = Aspects()
# dependencias
from api.entities.entities import Entities
import json
enties = Entities()

class Dtos:
  pass
