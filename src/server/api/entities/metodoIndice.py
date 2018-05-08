""" METODOS NUMEROS INDICE para GENERAR MUESTRAS ARTIFICIALES """

class Indice:
  """Se encarga de encontrar un valor de la variable aleatoria
     dependiendo del valor de la serie generada"""
  def __init__(self):
    pass

  def acumuladas(self, px):
    """ Recibe las probabilidades de de la variable aleatoria
      devuelve las distribuciones acumuladas para esa variable"""
    acum = [px[0]] * len(px)

    for i in range(1, len(px)):
      acum[i] = acum[i-1] + px[i]
    return acum

  def indice(self, vec0y1, X, Fx):
    """ Recibe el vector 0 y 1, una v.a. y las acumuladas de esa variable
      retorna los valores indices para ese vector recibido"""
    long = len(vec0y1)
    vIndice = [0] * long
    #print(len(Fx))

    # Realizo el metodo de numero de indices
    for k in range(long):
      l=0
      while (vec0y1[k] > Fx[l]):
        l=l+1
      #print(l, vec0y1[k], Fx[l])
      vIndice[k] = X[l]
    return vIndice

ind = Indice()
print(ind.indice([0.125, 0.365, 0.854], [2, 4, 6], [0.2, 0.3, 1]))
