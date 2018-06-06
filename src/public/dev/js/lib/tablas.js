function newRanking(data) {
  if (Array.isArray(data)) {
    //configuracion de decimales:
    let decimales = 10000;//5decimales
    return newComponentHTML({
      el: 'div',
      attrs: [{name: 'id', val: 'ranking-container'}],
      child: [{
        el: 'h1',
        attrs: [{ name: 'class', val: 'tx-center tx-upper tx-Jumbo' }],
        text: 'Ranking Test Chi-Cuadrado'
      }, {
        el: 'div',
        attrs: [{ name: 'class', val: 'list-container' }],
        child: [{
          el: 'ol',
          attrs: [{ name: 'class', val: 'list' }],
          child: data.map((el, key) => ({
            el: 'li',
            attrs: [{ name: 'class', val: 'item' }],
            child: [{
              el: 'p',
              attrs: [{ name: 'class', val: 'item-toggle' }],
              text: 'Semilla utilizada: ' + el.semilla + ' , Chi-Cuadrado estimado: ' + el.valorChi + ' y fue ' + (el.aceptacion ? 'aceptado' : 'rechazado')
            }, {
              el: 'div',
              attrs: [{ name: 'class', val: 'item__content' }],
              child: [{
                el: 'div',
                attrs: [{ name: 'class', val: 'table' }],
                child: [{
                  el: 'table',
                  child: [{
                    el: 'thead',
                    child: [{
                      el: 'tr',
                      child: [{
                        el: 'th'
                      }, {
                        el: 'th',
                        text: 'f',
                        child: [{
                          el: 'sub',
                          text: 'i'
                        }]
                      }, {
                        el: 'th',
                        text: 'np',
                        child: [{
                          el: 'sub',
                          text: 'i'
                        }]
                      }, {
                        el: 'th',
                        child: [{
                          el: 'span',
                          text: 'f'
                        }, {
                          el: 'sub',
                          text: 'i'
                        }, {
                          el: 'span',
                          text: '-np'
                        }, {
                          el: 'sub',
                          text: 'i'
                        }]
                      }, {
                        el: 'th',
                        child: [{
                          el: 'span',
                          text: '(Φ'
                        }, {
                          el: 'sub',
                          text: 'i'
                        }, {
                          el: 'span',
                          text: ')²'
                        }]
                      }, {
                        el: 'th',
                        child: [{
                          el: 'span',
                          text: '(Φ'
                        }, {
                          el: 'sub',
                          text: 'i'
                        }, {
                          el: 'span',
                          text: ')²/np'
                        }, {
                          el: 'sub',
                          text: 'i'
                        }]
                      }]
                    }]
                  }, {
                    el: 'tbody',
                    child: el.frecuencia.map((fr, i) => ({//filas de cada tabla
                      el: 'tr',
                      child: [{
                        el: 'td',
                        text: (i == 0 ? '0' : i)
                      }, {
                        el: 'td',
                        text: (fr == 0 ? '0' : fr)
                      }, {
                        el: 'td',
                        text: (el.valornpi == 0 ? '0' : el.valornpi)
                      }, {
                        el: 'td',
                        text: ((Math.round((fr - el.valornpi) * decimales) / decimales) == 0 ? '0' : (Math.round((fr - el.valornpi) * decimales) / decimales))
                      }, {
                        el: 'td',
                        text: ((Math.round(((fr - el.valornpi) ** 2) * decimales) / decimales) == 0 ? '0' : (Math.round(((fr - el.valornpi) ** 2) * decimales) / decimales))
                      }, {
                        el: 'td',
                        text: ((Math.round((((fr - el.valornpi) ** 2) / el.valornpi) * decimales) / decimales) == 0 ? '0' : (Math.round((((fr - el.valornpi) ** 2) / el.valornpi) * decimales) / decimales))
                      }]
                    }))
                  }]
                }]
              }, {
                el: 'div',
                attrs: [{ name: 'class', val: 'grafico__content' }],
                child: [{
                  el: 'h4',
                  attrs: [{ name: 'class', val: 'grafico__title' }],
                  text: 'Gráfico de Frecuencia de dígitos'
                }, {
                  el: 'canvas',
                  attrs: [{ name: 'id', val: ('grafico-' + key) }]
                }]
              }]
            }]
          }))
        }, {
          el: 'div',
          attrs: [{ name: 'class', val: 'grafico__content' }],
          child: [{
            el: 'h4',
            attrs: [{ name: 'class', val: 'grafico__title' }],
            text: 'Grafico General de Experimentos'
          }, {
            el: 'canvas',
            attrs: [{ name: 'id', val: 'grafico-final' }]
          }]
        }]
      }]
    })
  } else {
    throw new Error('Se esperaba un Arraglo!')
  }
}
// const ca = '{"exp1": [{"dias": 8, "detalleCorrida": [{"dia": 1, "existIni": 400, "demanda": 50, "venta": 50, "demInsat": 0, "existFin": 350, "operacion": " Hoy se pidio 50 unidades "}, {"dia": 2, "existIni": 350, "demanda": 70, "venta": 70, "demInsat": 0, "existFin": 280, "operacion": ""}, {"dia": 3, "existIni": 330, "demanda": 58, "venta": 58, "demInsat": 0, "existFin": 272, "operacion": " Hoy se pidio 178 unidades  Hoy se repuso 50 unidades"}, {"dia": 4, "existIni": 272, "demanda": 98, "venta": 98, "demInsat": 0, "existFin": 174, "operacion": ""}, {"dia": 5, "existIni": 352, "demanda": 12, "venta": 12, "demInsat": 0, "existFin": 340, "operacion": " Hoy se pidio 288 unidades  Hoy se repuso 178 unidades"}, {"dia": 6, "existIni": 340, "demanda": 45, "venta": 45, "demInsat": 0, "existFin": 295, "operacion": ""}, {"dia": 7, "existIni": 583, "demanda": 74, "venta": 74, "demInsat": 0, "existFin": 509, "operacion": " Hoy se pidio 287 unidades  Hoy se repuso 288 unidades"}, {"dia": 8, "existIni": 509, "demanda": 78, "venta": 78, "demInsat": 0, "existFin": 431, "operacion": ""}], "existIni": 400, "pedido": 550, "promedio": 0.0, "totPerdida": 0, "totVenta": 485, "totDiaDemIns": 0}, {"dias": 8, "detalleCorrida": [{"dia": 1, "existIni": 400, "demanda": 50, "venta": 50, "demInsat": 0, "existFin": 350, "operacion": ""}, {"dia": 2, "existIni": 350, "demanda": 70, "venta": 70, "demInsat": 0, "existFin": 280, "operacion": ""}, {"dia": 3, "existIni": 280, "demanda": 58, "venta": 58, "demInsat": 0, "existFin": 222, "operacion": " Hoy se pidio 178 unidades "}, {"dia": 4, "existIni": 222, "demanda": 98, "venta": 98, "demInsat": 0, "existFin": 124, "operacion": ""}, {"dia": 5, "existIni": 302, "demanda": 12, "venta": 12, "demInsat": 0, "existFin": 290, "operacion": " Hoy se repuso 178 unidades"}, {"dia": 6, "existIni": 290, "demanda": 45, "venta": 45, "demInsat": 0, "existFin": 245, "operacion": " Hoy se pidio 283 unidades "}, {"dia": 7, "existIni": 245, "demanda": 74, "venta": 74, "demInsat": 0, "existFin": 171, "operacion": ""}, {"dia": 8, "existIni": 171, "demanda": 78, "venta": 78, "demInsat": 0, "existFin": 93, "operacion": ""}], "existIni": 400, "pedido": 278, "promedio": 0.0, "totPerdida": 0, "totVenta": 485, "totDiaDemIns": 0}, {"dias": 8, "detalleCorrida": [{"dia": 1, "existIni": 400, "demanda": 50, "venta": 50, "demInsat": 0, "existFin": 350, "operacion": ""}, {"dia": 2, "existIni": 350, "demanda": 70, "venta": 70, "demInsat": 0, "existFin": 280, "operacion": ""}, {"dia": 3, "existIni": 280, "demanda": 58, "venta": 58, "demInsat": 0, "existFin": 222, "operacion": ""}, {"dia": 4, "existIni": 222, "demanda": 98, "venta": 98, "demInsat": 0, "existFin": 124, "operacion": " Hoy se pidio 276 unidades "}, {"dia": 5, "existIni": 124, "demanda": 12, "venta": 12, "demInsat": 0, "existFin": 112, "operacion": ""}, {"dia": 6, "existIni": 112, "demanda": 45, "venta": 45, "demInsat": 0, "existFin": 67, "operacion": ""}, {"dia": 7, "existIni": 343, "demanda": 74, "venta": 74, "demInsat": 0, "existFin": 269, "operacion": " Hoy se repuso 276 unidades"}, {"dia": 8, "existIni": 269, "demanda": 78, "venta": 78, "demInsat": 0, "existFin": 191, "operacion": " Hoy se pidio 307 unidades "}], "existIni": 400, "pedido": 196, "promedio": 0.0, "totPerdida": 0, "totVenta": 485, "totDiaDemIns": 0}], "exp2": [{"dias": 8, "detalleCorrida": [{"dia": 1, "existIni": 36, "demanda": 50, "venta": 36, "demInsat": 14, "existFin": 0, "operacion": " Hoy se pidio 36 unidades "}, {"dia": 2, "existIni": 0, "demanda": 70, "venta": 0, "demInsat": 70, "existFin": 0, "operacion": ""}, {"dia": 3, "existIni": 36, "demanda": 58, "venta": 36, "demInsat": 22, "existFin": 0, "operacion": " Hoy se pidio 72 unidades  Hoy se repuso 36 unidades"}, {"dia": 4, "existIni": 0, "demanda": 98, "venta": 0, "demInsat": 98, "existFin": 0, "operacion": ""}, {"dia": 5, "existIni": 72, "demanda": 12, "venta": 12, "demInsat": 0, "existFin": 60, "operacion": " Hoy se repuso 72 unidades"}, {"dia": 6, "existIni": 60, "demanda": 45, "venta": 45, "demInsat": 0, "existFin": 15, "operacion": ""}, {"dia": 7, "existIni": 15, "demanda": 74, "venta": 15, "demInsat": 59, "existFin": 0, "operacion": " Hoy se pidio 108 unidades "}, {"dia": 8, "existIni": 0, "demanda": 78, "venta": 0, "demInsat": 78, "existFin": 0, "operacion": ""}], "existIni": 36, "pedido": 12, "promedio": 42.625, "totPerdida": 341, "totVenta": 144, "totDiaDemIns": 6}, {"dias": 8, "detalleCorrida": [{"dia": 1, "existIni": 45, "demanda": 50, "venta": 45, "demInsat": 5, "existFin": 0, "operacion": " Hoy se pidio 45 unidades "}, {"dia": 2, "existIni": 0, "demanda": 70, "venta": 0, "demInsat": 70, "existFin": 0, "operacion": ""}, {"dia": 3, "existIni": 45, "demanda": 58, "venta": 45, "demInsat": 13, "existFin": 0, "operacion": " Hoy se pidio 90 unidades  Hoy se repuso 45 unidades"}, {"dia": 4, "existIni": 0, "demanda": 98, "venta": 0, "demInsat": 98, "existFin": 0, "operacion": ""}, {"dia": 5, "existIni": 90, "demanda": 12, "venta": 12, "demInsat": 0, "existFin": 78, "operacion": " Hoy se repuso 90 unidades"}, {"dia": 6, "existIni": 78, "demanda": 45, "venta": 45, "demInsat": 0, "existFin": 33, "operacion": ""}, {"dia": 7, "existIni": 33, "demanda": 74, "venta": 33, "demInsat": 41, "existFin": 0, "operacion": " Hoy se pidio 135 unidades "}, {"dia": 8, "existIni": 0, "demanda": 78, "venta": 0, "demInsat": 78, "existFin": 0, "operacion": ""}], "existIni": 45, "pedido": 12, "promedio": 38.125, "totPerdida": 305, "totVenta": 180, "totDiaDemIns": 6}, {"dias": 8, "detalleCorrida": [{"dia": 1, "existIni": 52, "demanda": 50, "venta": 50, "demInsat": 0, "existFin": 2, "operacion": " Hoy se pidio 50 unidades "}, {"dia": 2, "existIni": 2, "demanda": 70, "venta": 2, "demInsat": 68, "existFin": 0, "operacion": ""}, {"dia": 3, "existIni": 50, "demanda": 58, "venta": 50, "demInsat": 8, "existFin": 0, "operacion": " Hoy se pidio 102 unidades  Hoy se repuso 50 unidades"}, {"dia": 4, "existIni": 0, "demanda": 98, "venta": 0, "demInsat": 98, "existFin": 0, "operacion": ""}, {"dia": 5, "existIni": 102, "demanda": 12, "venta": 12, "demInsat": 0, "existFin": 90, "operacion": " Hoy se repuso 102 unidades"}, {"dia": 6, "existIni": 90, "demanda": 45, "venta": 45, "demInsat": 0, "existFin": 45, "operacion": ""}, {"dia": 7, "existIni": 45, "demanda": 74, "venta": 45, "demInsat": 29, "existFin": 0, "operacion": " Hoy se pidio 152 unidades "}, {"dia": 8, "existIni": 0, "demanda": 78, "venta": 0, "demInsat": 78, "existFin": 0, "operacion": ""}], "existIni": 52, "pedido": 12, "promedio": 35.125, "totPerdida": 281, "totVenta": 204, "totDiaDemIns": 5}]}'
// const inv = JSON.parse(ca)
function newInvParcial(data) {
  return newComponentHTML({
    el: 'div',
    attrs: [{ name: 'class', val: 'experimentos' }],
    child: [{
      el: 'h1',
      attrs: [{ name: 'class', val: 'tx-center tx-upper tx-Jumbo' }],
      text: 'Inventario Parcial'
    }, {
      el: 'h2',
      text: 'Experimento 1'
    }, {
      el: 'div',
      attrs: [{ name: 'class', val: 'list-container' }],
      child: [{
        el: 'ol',
        attrs: [{ name: 'class', val: 'list' }],
        child: data.exp1.map((x, key) => ({
          el: 'li',
          attrs: [{ name: 'class', val: 'item' }],
          child: [{
            el: 'h3',
            text: 'Corrida ' + (key + 1 ? key + 1 : '0')
          }, {
            el: 'p',
            text: 'A ' + (x.dias ? x.dias : '0') + ' Dias, con una Existencia Inicial de ' + (x.existIni ? x.existIni : '0') + ' Articulos y con un Punto de Reposición de ' + (x.pedido ? x.pedido : '0') + ' el promedio de perdida fue del ' + (x.promedio ? x.promedio : '0') + ' respecto los dias que se perdio.'
          }, {
            el: 'p',
            text: 'Total de Dias de Demanda Insatisfecha: ' + x.totDiaDemIns
          }, {
            el: 'p',
            text: 'Total de Perdida: ' + x.totPerdida
          }, {
            el: 'p',
            text: 'Total de Venta: ' + x.totVenta
          }]
        }))
      }]
    }, {
      el: 'div',
      attrs: [{name: 'class', val: 'table-exp'}],
      child: [{
        el: 'table',
        child: [{
          el: 'thead',
          child: [{
            el: 'tr',
            child: [{ el: 'th', text: 'k-corridas' },{ el: 'th', text: 'Dias' }, { el: 'th', text: 'Stock Inicial' }, { el: 'th', text: 'Pedido (Puntod de Repo. )' }, { el: 'th', text: 'Demanda Total de Prod.' }, { el: 'th', text: 'Venta Total de Prod.' }, { el: 'th', text: 'Perdida Total de Prod.' }, { el: 'th', text: 'Total de Dias Perdido' }, { el: 'th', text: 'Promedio de Perdida' }]
          }]
        }, {
          el: 'tbody',
          child:  data.exp1.map((x, key) => ({
              el: 'tr',
              child: [{
                el: 'td',
                text: (key+1? key+1: '0')
              },{
                el: 'td',
                text: (x.dias? x.dias: '0')
              },{
                el: 'td',
                text: (x.existIni? x.existIni: '0')
              },{
                el: 'td',
                text: (x.pedido?x.pedido:'0')
              },{
                el: 'td',
                text:  x.totVenta + x.totPerdida
              },{
                el: 'td',
                text: (x.totVenta?x.totVenta:'0')
              },{
                el: 'td',
                text: (x.totPerdida?x.totPerdida:'0')
              },{
                el: 'td',
                text: (x.totDiaDemIns?x.totDiaDemIns:'0')
              },{
                el: 'td',
                text: (x.promedio?x.promedio:'0.0')
              }]
            }))
          }]
        }]
    },{
      el: 'div',
      attrs: [{ name: 'class', val: 'grafico__content' }],
      child: [{
        el: 'h4',
        attrs: [{ name: 'class', val: 'grafico__title' }],
        text: 'Gráfico de Ventas y perdidas totales'
      }, {
        el: 'canvas',
        attrs: [{ name: 'id', val: 'grafico-1' }]
      }]
    }, {
      el: 'h2',
      text: 'Experimento 2'
    }, {
      el: 'div',
      attrs: [{ name: 'class', val: 'list-container' }],
      child: [{
        el: 'ol',
        attrs: [{ name: 'class', val: 'list' }],
        child: data.exp2.map((x, key) => ({
          el: 'li',
          attrs: [{ name: 'class', val: 'item ' }],
          child: [{
            el: 'h3',
            text: 'Corrida ' + (key + 1 ? key + 1 : '0')
          }, {
            el: 'p',
            text: 'A ' + (x.dias ? x.dias : '0') + ' Dias, con una Existencia Inicial de ' + (x.existIni ? x.existIni : '0') + ' Articulos y con un Punto de Reposición de ' + (x.pedido ? x.pedido : '0') + ' el promedio de perdida fue del ' + (x.promedio ? x.promedio : '0') + ' respecto los dias que se perdio.'
          }, {
            el: 'p',
            text: 'Total de Dias de Demanda Insatisfecha: ' + x.totDiaDemIns
          }, {
            el: 'p',
            text: 'Total de Perdida: ' + x.totPerdida
          }, {
            el: 'p',
            text: 'Total de Venta: ' + x.totVenta
          }, {
            el: 'div',
            attrs: [{ name: 'class', val: 'item__content' }],
            child: [{
              el: 'div',
              attrs: [{ name: 'class', val: 'grafico__content' }],
              child: [{
                el: 'h4',
                attrs: [{ name: 'class', val: 'grafico__title' }],
                text: 'Gráfico de Venta por perdida'
              }, {
                el: 'canvas',
                attrs: [{ name: 'id', val: 'grafico-2-' + (key ? key : '0') }]
              }]
            }]
          }]
        }))
      }]
    }, {
        el: 'div',
        attrs: [{ name: 'class', val: 'table-exp' }],
        child: [{
          el: 'table',
          child: [{
            el: 'thead',
            child: [{
              el: 'tr',
              child: [{ el: 'th', text: 'k-corridas' },{ el: 'th', text: 'Dias' }, { el: 'th', text: 'Stock Inicial' }, { el: 'th', text: 'Pedido (Puntod de Repo. )' }, { el: 'th', text: 'Demanda Total de Prod.' }, { el: 'th', text: 'Venta Total de Prod.' }, { el: 'th', text: 'Perdida Total de Prod.' }, { el: 'th', text: 'Total de Dias Perdido' }, { el: 'th', text: 'Promedio de Perdida' }]
            }]
          }, {
            el: 'tbody',
            child:  data.exp2.map((x, key) => ({
                el: 'tr',
                child: [{
                  el: 'td',
                  text: (key+1? key+1: '0')
                },{
                  el: 'td',
                  text: (x.dias? x.dias: '0')
                },{
                  el: 'td',
                  text: (x.existIni? x.existIni: '0')
                },{
                  el: 'td',
                  text: (x.pedido?x.pedido:'0')
                },{
                  el: 'td',
                  text: x.totVenta + x.totPerdida
                },{
                  el: 'td',
                  text: (x.totVenta?x.totVenta:'0')
                },{
                  el: 'td',
                  text: (x.totPerdida?x.totPerdida:'0')
                },{
                  el: 'td',
                  text: (x.totDiaDemIns?x.totDiaDemIns:'0')
                },{
                  el: 'td',
                  text: (x.promedio?x.promedio:'0.0')
                }]
              }))
            }]
          }]
    },{
      el: 'div',
      attrs: [{ name: 'class', val: 'grafico__content' }],
      child: [{
        el: 'h4',
        attrs: [{ name: 'class', val: 'grafico__title' }],
        text: 'Gráfico de Ventas y perdidas totales'
      }, {
        el: 'canvas',
        attrs: [{ name: 'id', val: 'grafico-2' }]
      }]
    }, {
      el: 'div',
      attrs: [{ name: 'class', val: 'grafico__content' }],
      child: [{
        el: 'h4',
        attrs: [{ name: 'class', val: 'grafico__title' }],
        text: 'Grafico General de Experimentos'
      }, {
        el: 'canvas',
        attrs: [{ name: 'id', val: 'grafico' }]
      }]
    }]
  })
}
// // console.table(inv.exp1[0].detalleCorrida)
// // console.table(inv.exp2[0].detalleCorrida)
// cargarGraficosInvPar(inv)
// newInfo.appendChild(newRanking(resultadoRancking.chicuadrado))
// cargarGraficosChi(resultadoRancking.chicuadrado)
