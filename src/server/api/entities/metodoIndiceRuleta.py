""" Ejercicio propuesto en clase
      Juego de la Ruleta"""

class IndiceRuleta:
  """Esta clase se encarga generar los numeros de la ruleta (v.a.) y sus
    probabilidades equis probables y de encontrar un valor de la variable
    aleatoria dependiendo del valor de la serie generada"""
  def __init__(self):
    pass

  def generar(self):
    """ Genera una variable aleatoria de 0 a 36 y sus probabilidades x probables"""
    x = [0] * 38
    long = len(x)
    px = [1/38] * long

    for i in range(long):
      x[i] = i
      px[i] = 1/long

    return x, px

  def indiceConFrecu(self, vec0y1, Fx, v):
    """ Recibe el vector 0 y 1, una v.a. y las probabilidades de esa variable
      retorna los valores indices para ese vector recibido"""
    long = len(vec0y1)
    vIndice = [0] * long
    a = []

    for i in range(38):
      a.append({'cant':0, 'num':[]})
    # Realizo el metodo de numero de indices
    for k in range(long):
      l=0
      while (vec0y1[k] > Fx[l]):
        l=l+1

      a[l]['num'].append(v[k])
      a[l]['cant'] = a[l]['cant'] + 1

    return a
