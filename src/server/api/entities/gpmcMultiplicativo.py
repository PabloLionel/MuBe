"""METODO MULTIPLICATIVO DE LAS CONGRUENCIAs"""
class GeneradorMultiplicativo:
  """Esta clase se encarga de generar series pseudoaleatorias que van
    a depender de los parametros ingresados"""
  def __init__(self):
    pass

  def generadorSerie(self, m, n, a, sem):
    """Genera una serie de numeros pseudoaletoria. Recibe:
      m: modulo; n: cantidad de elementos a generar; a: valor a; sem: semilla inicial
      retorna un arreglo con los numeros generados"""
    serie = [0] * n

    for i in range(n):
      sem = (a*sem) % m
      serie[i] = sem

    return serie

  def generadorSerie0y1(self, vec, m):
    """ Recibe un el vector generado por generadorSerie() y modulo(m)
      retorna un arreglo con los numeros generados normalizados """
    return [e/m for e in vec]

  def numPrimo(self, num):
    """funcion que verifica si un numero es primo o no
    en caso de no ser primo buscara el proximo y retornara """
    cant=0

    while cant != 2:
      cant=0
      for i in range(1, num+1):
        if num%i == 0:
          cant=cant + 1
      b = num
      num = num +1

    return b

  def generarSeries(self, m, n, a, semilla):
    """ Funcion que genera una cierta cantidad de series pseudoaleatorias
    variando para cada una de ellas el valor de la semilla
    Parametros:
      m: modulo; n: cantidad de elementos a generar; a: valor a; sem: semilla inicial"""
    iteracion = len(semilla)
    series = []
    series0y1 = []

    for i in range(iteracion):
      semilla[i] = self.numPrimo(semilla[i])
      vs = self.generadorSerie(m, n, a, semilla[i])

      series.append(vs)
      series0y1.append(self.generadorSerie0y1(vs, m))

    return {
      'semilla': semilla,
      'series': series,
      'series0y1': series0y1
    }

# pe = GeneradorMultiplicativo()
# print(pe.generarSeries(1000, 3, 13, [25]))
