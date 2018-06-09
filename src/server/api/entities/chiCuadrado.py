""" PRUEBA ESTADISTICA PARA LA GENERACION DE NUMEROS PSEUDOALEATORIA
                     TEST DE CHI-CUADRADO """
class TestChi:
  """Esta clase se encarga de controlar y dar un veredicto a cerca de
    si una serie generada es aceptada o no con el test de Chi cuadrado"""
  def __init__(self):
    pass

  def cantDigitos(self, semillas, series, series0y1, fO, cantDig, error):
    """ Recibe todas las series generadas y devuelve un valor para
    cada serie para saber si la serie generada es fiable o no. """
    repe = len(fO)
    final=[0] * repe# se inicializa el arreglo que va a contener todos los datos a presentar

    # 1er for recorre las distintas series
    for k in range(repe):#len(series)):
      #posicion = [0] * 10 # se inicializa, va contener la cantidad de digitos que hay por numero
      #digitos = [] # se inicializa, se va guardar la descomposicion de las distintas series

      # 2do for recorre los elementos de un serie
      #for i in range(len(series[k])):
        #num = str(series[k][i]) # se guarda en "num" un numero de la serie

        # 3er for recorre cada caracter de un numero
        #for j in range(len(num)):
          #x = int(num[j]) # se tranforma ese caracter a int, va contener un num entre 0 y9
          #posicion[x] = posicion[x] + 1 # se acumula la frecuencia de cada digito en la posicion correspondiente
          #digitos.append(x) # se guarda el digito en el arreglo

      # se calcula npi que es la cantidad total de digitos dividido la frecuencia de cada digito
      npi = cantDig[k] / len(fO[k])

      # llamada al metodo que devuelve un valor de chi para esa frecuencia
      vchi = self.testChiCuadrado(fO[k], npi, error)

      # se arma un diccionario con todo los datos necesarios para armar un tabla para mostrar
      final[k] = {
        'semilla': semillas[k],
        'serie': series[k],
        'serie0y1': series0y1[k],
        'frecuencia': fO[k],
        'valornpi': npi,
        'valorChi': vchi[0],
        'aceptacion': vchi[1]
      }
    return final

  def ranking(self, semillas, series, series0y1, fO, cantDig ,error):
    """ Recibe los arreglos de semillas, series, series0y1; la cantidad de repeticiones y el error
      devuelve devuelve en todo eso y mas en forma ordenada por el valor de chi"""
    dic = self.cantDigitos(semillas, series, series0y1, fO, cantDig, error)
    long = len(dic)
    chi = [0] * long # va a contener todos los valores de chi
    chicuadrado = [0] * long # va acontener todo un diccionario ordenado por el valor de chi

    # recorre todo el diccionario y guarda en chi los valores de chi cuadrado
    for i in range(long):
      chi[i] = dic[i]['valorChi']

    orden = sorted(chi) # ordena en forma ascendente los valores obtenedidos de chi

    # recorre los valores de chi ordenados y ordena todo el diccionario en base a ese arreglo (orden)
    for e in range(len(orden)):
      # recorre el dicionario
      for q in range(long):
        if dic[q]['valorChi'] == orden[e]:
          chicuadrado[e] = dic[q]

    return chicuadrado

  def testChiCuadrado(self, cant, npi, error):
    """ Para cada serie va devolver un valor de chi. Dependiendo del valor se rechaza o no la serie"""
    # Dependiendo del error recibido devuelve un valor de chi correspondiente al gl 9
    tabla = {
      0.01: 21.6660,
      0.025: 19.0228,
      0.05: 16.9190,
      0.1: 14.6837
    }[float(error)]

    acum=0
    #npi = len(dig) / len(cant)
    correcto = False

    # recorre la frecuencia de cada digito y con la formula de chi-cuadrado devuelve un valor que lo acumula
    for k in range(len(cant)):
      chi = (cant[k] - npi)**2 / npi
      acum = acum + chi

    # Dependiendo del valor de chi acumulado y del valor del error elegido retorna verdadero o falso
    if acum < tabla:
      correcto = True

    return acum, correcto

# test = TestChi()
# print(test.cantDigitos([29, 31, 59], [[487403, 1749331280, 1959695530], [521017, 166798131, 910028382], [991613, 1633654162, 1247073839]], [[0.00022696470852334272, 0.8145958561518211, 0.9125543436559636], [0.00024261744704219394, 0.07767143243815351, 0.42376498804603], [0.00046175578630611104, 0.7607295004468083, 0.5807140095069604]], [[1, 0, 0, 0, 0, 0, 0, 0, 1, 1], [2, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 1, 0, 0]],0.01))
#print(test.metCongMulti(149, 10))
