import scipy.stats as ss
"""Metodo Discreto de Poisson"""

class Poisson:
  """Esta clase se encarga de generar la variable aleatoria,
    su funcion de probabilidad y su funcion de densidad"""
  def __init__(self):
    pass

  def met_poisson(self, lamb):
    """ funcion que recibe como parametro:
      lamb: el valor de lambda debe ser mayor cero
      devuelve la v.a x, su funcion de probabilidad y distribucion"""
    i=0
    x=[]
    px=[] # funcion de probabilidad de masa
    Fx=[] # funcion de distribucion
    bandera = 0

    while bandera <= .99999:
      if i == 0:
        x.append(0)
      else:
        x.append(x[i-1] + 1)
      px.append(ss.poisson.pmf(x[i], lamb))
      Fx.append(ss.poisson.cdf(x[i], lamb))
      bandera=Fx[i]
      i=i + 1

    return x, px, Fx

poi = Poisson()
print(poi.met_poisson(2))
