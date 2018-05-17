"""METODO DE INVENTARIO"""
class Inventario:
  """Esta clase se encarga de simular con diferentes parametros un detallado de los
  productos que se venden y la existencia con la que se cuenta por dia. Para saber
  al final del dia si hay que solicitar un pedido, y si asi, la cantidad que se va
  a pedir"""
  def __init__(self):
    pass

  def corridas(self, dias, demanda, demora, stock, ptoPedido, cantPedido):
    """Funcion que realiza una simulacion de inventario dependiendo de los siguientes parametros:
        dias: cantidad de corridas osea dias a simular;
        demanda: un arreglo con la demanda esperada;
        demora: un arreglo con los dias a demorar la reposicion;
        stock: es la existencia inicial;
        ptoPedido: marca el momento en que se va a realizar el pedido;
        cantPedido: cantidad de dia de venta anteriores que se va a pedir que se reponga"""
    if type(stock) == type([]):
      ma = True
      corrida = len(stock)
    else:
      ma = False
      corrida = len(ptoPedido)

    dicCorrida = [0] * corrida

    for h in range(corrida):
      inven = [0] * dias
      totalperdida = 0
      totalventa = 0
      venta = []
      diarep=0
      repos=0
      totdins=0
      if ma == True:
        exiIni = stock[h]
        pedido = ptoPedido
      else:
        pedido = ptoPedido[h]
        exiIni = stock
      mostExist = exiIni

      #print('Dia  existInicial  demanda  venta  demInsatis  existFin')
      for i in range(dias):
        b = '-'
        # si coincide con el dia de reposicion, se repone
        if diarep == i:
          if i > 0:
            b = ' Hoy se repuso ' + str(repos) + ' unidades'
            exiIni = exiIni + repos
            diarep = 0
            repos = 0

        # si la demanda es mayor al stock
        if demanda[i] > exiIni:
          venta.append(exiIni) # se guarda en vector venta lo que se vendio
          dins = demanda[i] - exiIni # se calcula la demanda insatisfecha
          totdins = totdins + 1
          totalperdida = totalperdida + dins
        else:
          venta.append(demanda[i]) # sino es mayor se vende la demanda solicitada
          dins = 0 # pudo vender lo demandado por lo tanto la demanda insatisfecha es cero

        totalventa = totalventa + venta[i] # acumula las ventas hechas
        a = '-'
        existencias_fin = exiIni - venta[i] # se actualiza la existencia final

        # solo se va a realizar el pedido si ya se repuso lo pedido anteriormente
        if diarep == 0:
          # se calcula la reposicion si el stock disponible es menor al stock minimo solicitado por el cliente
          if existencias_fin < pedido:
            #calculo reposicion que depende de la cantidad de dias de ventas anteriores que desea pedir
            if len(venta) <= cantPedido:
              k = 0
            else:
              k = len(venta) - cantPedido

            # recorre los ultimos dias de ventas elegidos por el usuario
            ac = 0
            for k in range(k, len(venta)):
              ac = ac + venta[k] # acumula las ventas de los ultimos dias

            repos = ac # repos guarda los el total de ventas a reponer
            diarep = i + demora[i] # diarep guarda el dia que se va a hacer la reposicion

            a = ' Hoy se pidio ' + str(repos) + ' unidades '

        #print(' ' + str(i+1) + '       ' + str(exiIni) + '        ' + str(demanda[i]) + '      ' + str(venta[i]) + '       ' + str(dins) + '       ' + str(existencias_fin) + '   '+ str(a + b))
        inven[i] = {
          'dia': i + 1,
          'existIni': exiIni,
          'demanda': demanda[i],
          'venta': venta[i],
          'demInsat': dins,
          'existFin': existencias_fin,
          'operacion': a + b
        }
        exiIni = existencias_fin
        if totdins == 0:
          totalperdidaTotdins = 0
        else:
          totalperdidaTotdins = totalperdida/totdins

      dicCorrida[h] = {
        'dias': dias,
        'detalleCorrida': inven,
        'existIni': mostExist,
        'pedido': pedido,
        'promedio': totalperdidaTotdins,
        'totPerdida': totalperdida,
        'totVenta': totalventa,
        'totDiaDemIns': totdins
      }
    return dicCorrida

  def exp_inventario(self, dias, demanda, demora, dics, cantPedido):
    """ Recibe el vector generado, la demanda, demora y un valor de stock
      Devuelve una simulacion con demanda y venta por dia. Con pedido y reposicion del prodcuto"""
    # 1er experimento: stock fijo, pedido variable
    exp1 = self.corridas(dias, demanda, demora, dics[0]['stock'], dics[0]['pedido'], cantPedido)

    # 2do experimento: stock variable, pedido fijo
    exp2 = self.corridas(dias, demanda, demora, dics[1]['stock'], dics[1]['pedido'], cantPedido)

    return {
      'exp1': exp1,
      'exp2': exp2
    }

# dias = 8#[0.001, 0.762, 0.807, 0.752, 0.124, 0.999, 0.647, 0.742]
# demanda = [50, 70, 58, 98, 12, 45, 74, 78]
# demora = [2, 4, 2, 3, 2, 4, 4, 2]
# stock = [200, 500, 300, 400]
# pedido = [200, 300]
# cantPedido = 5

# pepe = [
#   {'stock': 400, 'pedido': [550, 278, 196]},
#   {'pedido': 12, 'stock': [36, 45, 52]}
# ]

# inv = Inventario()
# print(inv.exp_inventario(dias, demanda, demora, pepe, cantPedido))
#print(corridas(dias, demanda, demora, 250, pedido, 5))
