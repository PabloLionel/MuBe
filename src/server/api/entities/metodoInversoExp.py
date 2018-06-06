import numpy as num
"""Metodo de la Inverso del Metodo Exponencial"""

class Inverso:
  """Esta clase se encarga de hallar la funcion de distribucion y densidad del metodo Normal
    y tambien convertir una normal general en una Normal 0 y 1"""
  def __init__(self):
    pass

  def met_inversoExp(self, ser0y1, L, M):
    """ funcion que recibe como parametro:
      ser0y1: vector de numeros entre 0 y 1 generados por algun metodo de generacion
      L: parametro de la distribucion exponencial para simular los tiempos ENTRE LLEGADAS
      M: parametro de la distribucion exponencial para simular los tiempos de SERVICIOS
    devuelve vector de Tiempo de Llegada(T), Tiempo de Servicio(S) y
    Tiempo entre la llegada del cliente i e (i-1) (R) """

    T = [0] # Vector de Tiempo de Llegada. Se inicializa con 0
    S = [] # Vector de Tiempo de Servicio
    R = [0] # Vector de Tiempo entre la llegada del cliente i e (i-1)

    l = -1/L # calculo del parametro L usado para el tiempo de Servicio(S)
    m = -1/M # calculo del parametro L usado para el tiempo de Llegada(T) y tiempo entre llegadas (R)

    S.append(round(l * num.log(ser0y1[0]), 4)) # se calcula el primer valor de la inversa de la exponencial y se almacena en S
    #print(T[0], S[0], R[0])
    for j in range(1, len(ser0y1)):
      ln = num.log(ser0y1[j]) # logaritmo neperiano de un numero de la serie generada recibida

      S.append(round(l * ln, 4)) # se calcula la inversa de la exponencial con el parametro L y se almacena en S
      R.append(round(m * ln, 4)) # se calcula la inversa de la exponencial con el parametro M y se almacena en R
      T.append(T[j-1] + R[j]) # acumula los valores calculados en R
      #print(T[j], S[j], R[j])
    return T, S, R

inv = Inverso()
print(inv.met_inversoExp([0.4, 0.2, 0.6, 0.8, 0.9], 0.3, 0.4))
