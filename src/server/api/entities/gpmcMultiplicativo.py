class GeneradorMultiplicativo:
  def __init__(self):
    pass

  def generadorSerie(self, m, n, a, sem):
    serie = [0] * n

    for i in range(n):
      sem = (a*sem) % m
      serie[i] = sem

    return serie

  def generadorSerie0y1(self, vec, m):
    return [e/m for e in vec]

  def numPrimo(self, num):
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
    iteracion = len(semilla)
    series = []
    series0y1 = []

    for i in range(iteracion):
      semilla[i] = self.numPrimo(semilla[i])
      vs = self.generadorSerie(m, n, a, semilla)

      series.append(vs)
      series0y1.append(self.generadorSerie0y1(vs, m))

    return {
      'semilla': semilla,
      'series': series,
      'series0y1': series0y1
    }

pe = GeneradorMultiplicativo()
print(pe.generadorSerie(1000, 3, 13, 25))
