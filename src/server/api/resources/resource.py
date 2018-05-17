"""
Resources(Recursos):
  Consideraciones IS:
    - NO se procesa BL (logica de negocio), solo es prepara.
    - A mas de 20 clcases separar en otro modulo.
    - Su responsabilidad es preparar la peticion (ej: si para una peticion
    necesito un 'id' voy a mirar que el 'id' haya llegado).
        En otras palabras vemos que llegue todo en regla.
    - Se va a apollar en un paquete de excepciones para lanzar los try catch.
resources es la capa de presentacion
aqui se contemplan todas las vistas tomando en cuenta lo que devuelve
mi api rest (para este caso devolvemos JSONs, entonces los json son nuestras
vistas de procesar un resultado).
cabe aclarar que esta vista no sera humana, sino que sera para otra maquina.
"""
import sys
sys.path.append('../')

# Dependencias trasversales
from api.config.setup import Setup
from api.aspects.aspect import Aspect
conf = Setup()
asp = Aspect()

# Dependencias
from api.controllers.controller import Controller
#from exceptions.exception import MBInputError, MBTransitionError
from api.dtos.dtos import Dtos
#from api.entities.entitie import Entitie
from api.entities import *
from api.entities.gpmcMultiplicativo import GeneradorMultiplicativo
from api.entities.chiCuadrado import TestChi
from api.entities.metodoIndice import Indice
from api.entities.inventario import Inventario
from api.entities.metodoNormal import Normal
from api.entities.metodoPoisson import Poisson
from api.entities.metodoIndiceRuleta import IndiceRuleta

ctrl = Controller()
# Errores
# err = MBInputError() o MBTransitionError()
dtos = Dtos()
#enties = entitie.Entitie()
class Resultado:
  """Esta clase se encarga de retornar los diferentes resultados de las diferentes
    clases definidas en entitie"""
  def __init__(self):
    pass

  def respuestaChicuadrado(self, modulo, cant, a, semilla, error):
    """ Recibe los datos ingresados por el usuario
      Retorna las series generadas y el valor de chi para cada una de ellas"""
    # Instanciacion de las clases
    mul = GeneradorMultiplicativo()
    test = TestChi()
    #print(modulo,cant,a,semilla,error)
    # genera todas las series con los parametros recibidos
    todas_series = mul.generarSeries(modulo, cant, a, semilla)

    # se asigna la serie de semillas, series y series0y1
    semilla = todas_series['semilla']
    arreglos = todas_series['series']
    arreglos0y1 = todas_series['series0y1']

    return {
      'chicuadrado': test.ranking(semilla, arreglos, arreglos0y1, error)
    }

  def respuestaIndice(self, modulo, cant, a, semilla, error):
    """ Recibe los datos ingresados por el usuario
      Retorna la serie generada, el valor de chi y el valor indice para cada una numero de la serie"""
    # Instanciacion de las clases
    mul = GeneradorMultiplicativo()
    test = TestChi()
    ind = Indice()

    # genera todas las series con los parametros recibidos
    todas_series = mul.generarSeries(modulo, cant, a, semilla)

    # se asigna la serie de semillas, series y series0y1
    semilla = todas_series['semilla']
    arreglos = todas_series['series']
    arreglos0y1 = todas_series['series0y1']

    #se calcula la funcion acumulativa
    acum = ind.acumuladas([0.25, 0.25, 0.25, 0.25])
    return {
      'chicuadrado': test.cantDigitos(semilla, arreglos, arreglos0y1, error),
      'indice': ind.indice([0.236, 0.452, 0.236, 0.285, 0.369], [1, 2, 3, 4], acum)
    }

  def respuestaInvNormal(self, modulo, cant, a, semilla, x1, px, mu, sigma, stockPedido, cantPedido):
    """ Recibe los datos ingresados por el usuario
      Retorna un detallado de las ventas usando la normal como la demanda"""
    # Instanciacion de las clases
    mul = GeneradorMultiplicativo()
    #test = TestChi()
    ind = Indice()
    inv = Inventario()
    norma = Normal()

    # genera todas las series con los parametros recibidos
    todas_series = mul.generarSeries(modulo, cant, a, semilla)

    # se asigna la serie series0y1 generada
    arreglos0y1 = todas_series['series0y1'][0]

    # se calcula los dias a simular
    dias = len(arreglos0y1)

    # obtenemos la variable aleatoria de la normal general y N(0,1)
    equival = norma.equivalEstanGener(mu, sigma)
    x = equival[0] #recibe los valores de la variable aleatoria Normal (0,1)
    x2 = equival[1] #recibe los valores de la variable aleatoria Normal (mu,sigma)

    # se calcula la demanda utilizando el metodo Poisson y Metodo indice
    acum2 = norma.met_normal(x, 0, 1)[2]
    demanda = ind.indice(arreglos0y1, x2, acum2)

    # se calcula la demora con la distribucion recibida utilizando el Metodo indice
    acum1 = ind.acumuladas(px)
    demora = ind.indice(arreglos0y1, x1, acum1)

    return {
      'inventario': inv.exp_inventario(dias, demanda, demora, stockPedido, cantPedido)
    }

  def respuestaInvPoisson(self, modulo, cant, a, semilla, x1, px, lamb, stockPedido, cantPedido):
    """ Recibe los datos ingresados por el usuario
      Retorna un detallado de las ventas usando la normal como la demanda"""
    # Instanciacion de las clases
    mul = GeneradorMultiplicativo()
    #test = TestChi()
    ind = Indice()
    inv = Inventario()
    poi = Poisson()

    # genera todas las series con los parametros recibidos
    todas_series = mul.generarSeries(modulo, cant, a, semilla)

    # se asigna la serie series0y1 generada
    arreglos0y1 = todas_series['series0y1'][0]

    # se calcula los dias a simular
    dias = len(arreglos0y1)

    # obtenemos la variable aleatoria y su distribucion de Poisson
    po = poi.met_poisson(lamb)
    x2 = po[0] # variable aleatoria de Poisson
    acum2 = po[2] # distribucion de Poisson

    # se calcula la demanda utilizando el metodo Poisson y Metodo indice
    demanda = ind.indice(arreglos0y1, x2, acum2)

    # se calcula la demora con la distribucion recibida utilizando el Metodo indice
    acum1 = ind.acumuladas(px)
    demora = ind.indice(arreglos0y1, x1, acum1)

    return {
      'inventario': inv.exp_inventario(dias, demanda, demora, stockPedido, cantPedido)
    }

  def respuestaInvParcial(self, modulo, cant, a, semilla, x1, px1, x2, px2, dics):
    """ Recibe los datos ingresados por el usuario
      Retorna un detallado de las ventas usando la distribucion recibida como la demanda"""
    # Instanciacion de las clases
    mul = GeneradorMultiplicativo()
    #test = TestChi()
    ind = Indice()
    inv = Inventario()

    # genera todas las series con los parametros recibidos
    todas_series = mul.generarSeries(int(modulo), int(cant), int(a), semilla)

    # se asigna la serie series0y1 generada
    arreglos0y1 = todas_series['series0y1'][0]

    # se calcula los dias a simular
    dias = len(arreglos0y1)

    # se calcula la demanda con la distribucion recibida utilizando el Metodo indice
    acum2 = ind.acumuladas(px2)
    demanda = ind.indice(arreglos0y1, x2, acum2)

    # se calcula la demora con la distribucion recibida utilizando el Metodo indice
    acum1 = ind.acumuladas(px1)
    demora = ind.indice(arreglos0y1, x1, acum1)

    return {
      'inventario': inv.exp_inventario(dias, demanda, demora, dics, 5)
    }

  def respuestaCasoRuleta(self, modulo, cant, a, semilla):
    """ Recibe los datos ingresados por el usuario
      Retorna valores que dependiendo de la serie generada pueden llegar a salir"""
    # Instanciacion de las clases
    mul = GeneradorMultiplicativo()
    #test = TestChi()
    ind = Indice()
    indRule = IndiceRuleta()

    # genera todas las series con los parametros recibidos
    todas_series = mul.generarSeries(modulo, cant, a, semilla)

    # se asigna la serie de series y series0y1
    sem = todas_series['semilla'][0]
    ser = todas_series['series'][0]
    arreglos0y1 = todas_series['series0y1'][0]

    # genera la variable aleatoria que contiene los numeros de la ruleta y su acumulada
    px = indRule.generar()[1]
    acu = ind.acumuladas(px)

    return {
      'sem': sem,
      'ser': ser,
      'ruleta': indRule.indiceConFrecu(arreglos0y1, acu, ser)
    }

resul = Resultado()

# cantPedi = 5
pepe = [
  {'stock': 400, 'pedido': [550, 278, 196]},
  {'pedido': 12, 'stock': [36, 45, 52]}
]
#print(resul.respuestaChicuadrado(1000, 365, 13, [251, 252, 362, 455, 741], 0.1))
#print(resul.respuestaIndice(1000, 2, 13, [251, 257], 0.01))
#print(resul.respuestaInvNormal(1000, 20, 13, [257, 135, 251, 200], [2, 3, 4], [0.30, 0.40, 0.30], 150, 25, pepe, cantPedi))
#resul.respuestaInvParcial(1000, 20, 13, [257], [2, 3, 4], [0.30, 0.40, 0.30], [1, 2, 3, 4, 5, 6, 7, 8, 9], [0.135, 0.271, 0.271, 0.180, 0.090, 0.036, 0.012, 0.004, 0.001], pepe)
#print(resul.respuestaInvPoisson(1000, 20, 13, [257, 135, 251, 200], [2, 3, 4], [0.40, 0.50, 0.10], 5, pepe, 4))
#print(resul.respuestaCasoRuleta(1000, 38, 13, [251]))
