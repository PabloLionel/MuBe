import scipy.stats as ss
"""Metodo Continuo Exponencial"""

class Exponencial:
  """Esta clase se encarga de calcular la funcion de probabilidad y
    su funcion de densidad usando el metodo Exponencial"""
  def __init__(self):
    pass

  def met_exponencial(self, x, mu):
    """ funcion que recibe como parametro:
        x: variable aleatoria continua con elementos mayores a cero
        mu: el valor de mu (u) debe ser mayor cero
      devuelve su funcion de densidad y distribucion"""
    fx = [] # funcion de densidad
    Fx = [] # funcion de distribucion

    #calculo de la funcion de densidad y distribucion Normal
    for j in range(len(x)):
      fx.append(ss.expon.pdf(x[j], 0, 1/mu))
      Fx.append(ss.expon.cdf(x[j], 0, 1/mu))

    #print(str(x[j]) + "  " + str(fx[j]) + "      " + str(Fx[j]))
    return x, fx, Fx

exp = Exponencial()
print(exp.met_exponencial([0.005, 2, 3, 4, 5, 6, 7, 8], 9))
