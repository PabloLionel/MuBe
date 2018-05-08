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
from api.config.setup import Setup
from api.aspects.aspect import Aspect
conf = Setup()
asp = Aspect()
# Dependencias
from api.controllers.controller import Controller
from exceptions.exception import MBInputError, MBTransitionError
from api.dtos.dtos import Dtos
from api.entities.entitie import Entitie
ctrl = Controller()
# Errores
# err = MBInputError() o MBTransitionError()
dtos = Dtos()
enties = Entitie()
