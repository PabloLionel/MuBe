'''
Resources(Recursos):
  Consideraciones IS:
    - NO se procesa BL (logica
    de negocio), solo es
    prepara.
    - A mas de 20 clcases
    separar en otro modulo.
    - Su responsabilidad es
    preparar la petición (ej:
    si para una peticion ne-
    cesito un "id" voy a mirar
    que el "id" haya llegado).
        En otras palabras vemos
    que llegue todo en regla.
    - Se va a apollar en un
    paquete de excepciones para
    lanzar los try catch.
resources es la capa de presentacion
aquí se contemplan todas las vistas
tomando en cuenta lo que devuelve
mi api rest (para este caso devolvemos
JSONs, entonces los json son nuestras
vistas de procesar un resultado).
cabe aclarar que esta vista no sera
humana, sino que sera para otra
maquina.
'''
# Dependencias trasversales
from api.config.config import Config
from api.aspects.aspects import Aspects
conf = Config()
asp = Aspects()
# Dependencias
from api.controllers.controllers import Controllers
from exceptions.exceptions import MBInputError, MBTransitionError
from api.dtos.dtos import Dtos
from api.entities.entities import Entities
ctrl = Controllers()
# Errores
# err = MBInputError() o MBTransitionError()
dtos = Dtos()
enties = Entities()
