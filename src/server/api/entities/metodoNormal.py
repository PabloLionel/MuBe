import scipy.stats as ss
"""Metodo de la Normal General y Normal 0 y 1"""

class Normal:
  """Esta clase se encarga de hallar la funcion de distribucion y densidad del metodo Normal
    y tambien convertir una normal general en una Normal 0 y 1"""
  def __init__(self):
    pass

  def met_normal(self, x, m, d):
    """ funcion que recibe como parametro:
      x: variable aleatoria continua
      m: la media para esa variable
      d: la desviacion estandar para esa variable
    devuelve su funcion de densidad y distribucion"""
    fx = [] # funcion de densidad
    Fx = [] # funcion de distribucion

    #calculo de la funcion de densidad y distribucion Normal
    for j in range(len(x)):
      fx.append(ss.norm.pdf(x[j], m, d))
      Fx.append(ss.norm.cdf(x[j], m, d))

      #print(str(x[j]) + "  " + str(fx[j]) + "      " + str(Fx[j]))
    return x, fx, Fx

  def equivalEstanGener(self, mu, sigma):
    """ Recibe la media y la desviacion de una normal general
      y devuelve los valores de x para una normal general"""
    x = [-4, -3, -2, -1, 0, 1, 2, 3, 4] # valores de x de la normal 0 y 1
    xng = [] # valores de x de la normal general n(mu, sigma)

    for j in range(len(x)):
      xng.append((x[j] * sigma) + mu)

    return x, xng

# nor = Normal()
# print(nor.met_normal([4, 2, 6, 8, 8], 6, 4))
