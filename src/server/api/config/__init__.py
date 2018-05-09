# en este arreglo van los nombres de los modulos
# para que funcione el asterisco en "import *"
# ej: __all__=['modulo1','modulo2',...,'moduloN'].
__all__=['setup']

from flask import Flask
api = Flask(__name__)
