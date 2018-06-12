#from math import log1p, log10, sqrt
import numpy as num
"""
        TEORIA DE COLAS (Una cola es una línea de espera)
Los fenomenos basicos necesarios para diseniar un modelo de colas son:

Forma en que los clientes llegan al punto de servicio. Su descripcion podra ser:
  Determinística: Ejemplo, en una fábrica embotelladora, las botellas (clientes) llegan de forma deterministica (cada x tiempo) a la persona encargada de etiquetar las mismas (punto de servicio).
  Aleatoria: Ejemplo, la llegada de los clientes a la caja de un supermercado.

Forma como se realiza el servicio. Puede ser:
  Deterministico: Ejemplo, en una fabrica embotelladora, el tiempo que se tarda en colocar la etiqueta a cada botella es el mismo.
  Aleatorio: Ejemplo, en una consulta médica, el tiempo que un médico tarda en atender a cada paciente es aleatorio.

Modo de elegir los clientes de la fila de espera del servicio. Podra seguirse la norma FIFO (primero que entra, primero que se sirve), o la norma LIFO (ultimo que entre, primero que se sirve), etc.

T-subi: (Muestra Pseudoaleatoria) Tiempos de llegadas, comienza de
  cero e incrementa, T(i)<A(i)?si, no hay clientes en cola: no, hay
  clientes en la cola.
S-subi: (Muestra Artificial o Pseudoaleatoria).
R-subi: T(i)-T(i-1) Tiempo entre llegadas.
W-subi: E(i)+S(i).
A-subi: no comienza de cero.
E-subi: A(i-1)-T(i) si A(i-1)>T(i), sino E(i)=0.S
C-subi: si T(i)<A(i-n), 0<n<=i cuenta el numero de .
O-subi: T(i) > A(i) => T(i) - A(i-1).
pag12: estrategias para FIFO, LIFO.

"""

"""
 *  [[[[[[[[[[Notacion Kendall]]]]]]]]]]
"""
# A: Distribucion de tiempos entre llegadas. (M: Exponencial)
# A = 'M'
# B: Distribucion de tiempos de salida (M: Exponencial)
# B = 'M'
# S: Cantidad de servidores. De 1 a n.
# S = 1
# K: El tamanio de la cola. De 1 a n
# K = 14
# Z: Disciplina de atención. FIFO, LIFO, RSS
# Z = 'FIFO'
"""
 * [[[[[[[[[[[[[Analizar la Eficiencia un Sistema de Colas]]]]]]]]]]]]]

  - medidas de desempenio
"""
# L: Representa el numero medio de clientes en el sistema.
# Lq: Representa el numero medio de clientes en la cola.
# W: Tiempo de espera en el sistema para cada cliente (incluyendo el tiempo de servicio).
# Wq: Representa el tiempo que un cliente espera en la cola.
# Pn: Probabilidad de que haya n clientes en el sistema (n= 0, 1,...).
# N: Variable que contabiliza el número de clientes en el sistema.
# Nq: Variable aleatoria número de clientes en la cola.
# Ρ: Llamada constante de utilización del sistema o intensidad de tráfico.
# ρ =λ / μ.s.

class TeoriaDeColas:
  """Esta clase se encarga de simular un modelo de colas M/M/1 (una cola un servidor)
  Metodos:
    met_inversoExp  -  colas  -  expsTdeColas"""
  def __init__(self):
    pass

  def met_inversoExp(self, ser0y1, L, M):
    """Funcion que realiza el metodo inverso de utilizado el metodo Exponencial recibe como parametro:
      ser0y1: vector de numeros entre 0 y 1 generados por algun metodo de generacion
      L: parametro de la distribucion exponencial para simular los tiempos ENTRE LLEGADAS
      M: parametro de la distribucion exponencial para simular los tiempos de SERVICIOS
    devuelve vector de Tiempo de Llegada(T), Tiempo de Servicio(S) y
    Tiempo entre la llegada del cliente i e (i-1) (R) """
    sT = []
    sR = []
    sS = []

    # Recorre las series generadas recibidas
    for i in range(len(ser0y1)):
      T = [0] # Vector de Tiempo de Llegada. Se inicializa con 0
      S = [] # Vector de Tiempo de Servicio
      R = [0] # Vector de Tiempo entre la llegada del cliente i e (i-1)

      l = -1/L # calculo del parametro L usado para el tiempo de Servicio(S)
      m = -1/M # calculo del parametro L usado para el tiempo de Llegada(T) y tiempo entre llegadas (R)

      S.append(round(l * num.log(ser0y1[0][0]), 4)) # se calcula el primer valor de la inversa de la exponencial y se almacena en S
      #   print(T[0], S[0], R[0])
      for j in range(1, len(ser0y1[i])):
        ln = num.log(ser0y1[i][j]) # logaritmo neperiano de un numero de la serie generada recibida

        S.append(round(l * ln, 4)) # se calcula la inversa de la exponencial con el parametro L y se almacena en S
        R.append(round(m * ln, 4)) # se calcula la inversa de la exponencial con el parametro M y se almacena en R
        T.append(round(T[j-1] + R[j], 4)) # acumula los valores calculados en R
      #     print(T[j], S[j], R[j])
      #   print("----------")
      sT.append(T) # se agrega al arreglos el vector T (Tiempo de llegada)
      sS.append(S) # se agrega al arreglos el vector S (Tiempo de Servicio)
      sR.append(R) # se agrega al arreglos el vector R (Tiempo entre Llegada)
    return sT, sS, sR

  def cola(self, T, S, R):
    """Funcion que realiza un modelo de colas para un experimento determinado
    Parametros:
      T: contiene un arreglo con las series calculadas de Tiempo de llegada
      S: contiene un arreglo con las series calculadas de Tiempo de Servicio
      R: contiene un arreglo con las series calculadas de Tiempo entre Llegadas
      """
    cantCor = len(R) # se calcula la cantidad de corridas
    corridas = [0] * cantCor # se inicializa el arreglo con la cantidad de elementos que contendra

    def clientesEnCola(T,A,n):
      i = n - 1
      # c = 0
      while T[n] < A[i] and i > -1:
        # c += 1
        i += -1
      return n - i - 1

    sumMediaTE = 0
    sumMediaTW = 0
    sumMediaTO = 0
    for j in range(cantCor):
      n = len (R[j]) # longitud de la cola para markob: de 0 a n ESPACIO DE ESTADP (Rango de la va Xi)
      #R = [0,.0692,1.8901,5.2487,.0214,1.1352,.1696,3.3032]
      #T = [0,.0692,1.9593,7.208,7.2294,8.3646,8.5342,11.8362]# metCongMulti(14662,n)
      # insertar 0 en la primera pocision de T
      #S = [6.9278,2.9568,1.3725,.1139,13.7602,2.5446,2.2633,.1246]# metCongMulti(14662,n)
      # hay q empezar a contar desde el 1..S o preparar los vectores: (conviene preparar los vectores)
      #R.append(0)
      numClient = [1]
      W = []
      W.append(S[j][0])
      A = []
      A.append(S[j][0])
      E = []
      E.append(0)
      C = []
      C.append(0)
      O = []
      O.append(0)
      sumTeL = R[j][0]
      sumTS = S[j][0]
      sumTE = E[0]
      sumTW = W[0]
      sumTC = C[0]
      sumTO = O[0]
      # print("***************--------------..............########## Corrida "+ str(j+1) +" ##########..............--------------*****************")
      # print('NCliente | Tllegada | TServicio | TentreLlegadas |  TenCola  | TPermanencia |  TSalida  | ClientesCola | TOcioServidos')
      # print('   ',1, '   |    ', T[j][0], '   | ', S[j][0], '  |       ', R[j][0], '      |    ', E[0], '    |    ', W[0], '  | ', A[0], '  |      ', C[0], '     |      ', O[0])
      for i in range(1,n):
        numClient.append(i+1)
        E.append(round(A[i-1]-T[j][i] if A[i-1]>T[j][i] else 0,4)) # Tiempo de espera en la cola
        W.append(round(E[i]+S[j][i],4)) # Tiempo de Permanencia en la Sistema
        A.append(round(W[i]+T[j][i],4)) # Tiempo de Salida
        C.append(clientesEnCola(T[j],A,i)) # Numero de Clientes en la cola
        O.append(round(T[j][i]-A[i-1] if T[j][i] > A[i] else 0,4)) # Tiempo de ocio del servidor
        sumTeL = sumTeL + R[j][i]
        sumTS = sumTS + S[j][i]
        sumTE = sumTE + E[i]
        sumTW = sumTW + W[i]
        sumTC = sumTC + C[i]
        sumTO = sumTO + O[i]

      #   print('   ', i + 1, '   | ', T[j][i], ' | ', S[j][i], '  |    ', R[j][i], '    | ', E[i], '  |   ', W[i], '   | ', A[i], '  |      ', C[i], '     |      ', O[i])
      # print("")

      mediaTE = round(sumTE/n, 4)
      mediaTW = round(sumTW/n, 4)
      mediaTO = round(sumTO/n, 4)
      mediaTS = round(sumTS/n, 4)

      corridas[j] = {
        'numCliente': numClient,
        'tLlegada': T[j],
        'tServicio': S[j],
        'tEntLlega': R[j],
        'tEnCola': E,
        'tPerman': W,
        'tSalida': A,
        'clientsCola': C,
        'tOcioServer': O,
        'numCorrida': j+1,
        'mediaTeL': round(sumTeL/n, 4),
        'mediaTE': mediaTE,
        'mediaTW': mediaTW,
        'mediaTC': round(sumTC/n, 4),
        'mediaTO': mediaTO,
        'mediaTS': mediaTS
      }
      sumMediaTE = sumMediaTE + mediaTE
      sumMediaTW = sumMediaTW + mediaTW
      sumMediaTO = sumMediaTO + mediaTO
    # print("                          >>>>RESULTADOS DEL EXPERIMENTO >>>>")
    # print("NCorrida | MediaTentreLlegada | MediaTenCola | MediaTPermanencia | MediaClientesCola | MediaTOcio")
    # for k in range(len(corridas)):
    #   print('   ', corridas[k]['numCorrida'], '   |      ', corridas[k]['mediaTeL'], '      |   ', corridas[k]['mediaTE'], '   |      ', corridas[k]['mediaTW'], '     |      ', corridas[k]['mediaTC'], '     |   ', corridas[k]['mediaTO'])
    # print("")
    # print("")
    return corridas, round(sumMediaTE/len(corridas), 4), round(sumMediaTW/len(corridas), 4), round(sumMediaTO/len(corridas), 4)

  def expsTdeColas(self, Sser0y1, L, M, opLM, inc):
    exps = {}
    l = [L]
    m = [M]
    te = []
    tw = []
    to = []
    for i in range(len(Sser0y1)):
      if i > 0:
        if opLM == True:
          l.append(l[i-1])
          m.append(m[i-1]+inc)
        else:
          l.append(l[i-1]+inc)
          m.append(m[i-1])
      # print("***>>>>>>>>>>>>>>>>>> EXPERIMENTO "+ str(i+1) +" ****")

      ts = self.met_inversoExp(Sser0y1[i], l[i], m[i])
      col = self.cola(ts[0], ts[1], ts[2])
      te.append(col[1])
      tw.append(col[2])
      to.append(col[3])
      exps['exp'+str(i+1)] = {'corrida': col[0], 'L': round(l[i], 4), 'M': round(m[i], 4),'mediaExpTE': col[1], 'mediaExpTW': col[2], 'mediaExpTO': col[3]}

    # print("               RESULTADOS DE LA SIMULACION")
    # print("N-Exp |  mediaTE  |  mediaTW  |  mediaTO")
    # for m in range(len(Sser0y1)):
    #   print(' ', m+1, '  | ', te[m], '  | ', tw[m], '  |  ', to[m])
    return exps


# c = TeoriaDeColas()
# a = [[.2316, .8514, .3698, .1232], [.8523, .7412, .1284, .2852]]
# pe = [a, a.copy()]
# #   print(c.cola([[0,.0692,1.9593,7.208,7.2294,8.3646,8.5342,11.8362], [0, 0.7487, 5.8802]], [[6.9278,2.9568,1.3725,.1139,13.7602,2.5446,2.2633,.1246], [4.8758, 0.9983, 6.842]], [[0,.0692,1.8901,5.2487,.0214,1.1352,.1696,3.3032], [0, 0.7487, 5.1315]]))
# #cola([0, 4.0236, 5.3007, 5.8586, 6.122], [3.0543, 5.3648, 1.7028, 0.7438, 0.3512], [0, 4.0236, 1.2771, 0.5579, 0.2634])
# #   print(c.met_inversoExp([[.2316, .8514, .3698, .1232], [.8523, .7412, .1284], [.5621, .5412, .4122, .8563, .9632]], 0.3, 0.4))
# #print(c.expsTdeColas([[[.2316, .8514, .3698, .1232], [.8523, .7412, .1284], [.5621, .5412, .4122, .8563, .9632]],[[.2365, .7412], [.9563, .1285]]], 0.3, 0.4))
# #c.expsTdeColas([[[.2316, .8514, .3698, .1232], [.8523, .7412, .1284, .2852]],[[.2316, .8514, .3698, .1232], [.8523, .7412, .1284, .2852]]], [0.3, 0.3], [0.4, 0.6])
# c.expsTdeColas(pe, [0.3, 0.3], [0.4, 0.6])
