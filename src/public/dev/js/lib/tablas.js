function newRanking(data){
  if(Array.isArray(data)){
    //configuracion de decimales:
    let decimales = 10000;//5decimales
    return newComponentHTML({
      el: 'div',
      attrs: [{name: 'class', val: 'list-container'}],
      child: [{
        el: 'ol',
        attrs: [{name: 'class', val: 'list'}],
        child: data.map((el,key)=>({
          el: 'li',
          attrs: [{name: 'class',val: 'item'}],
          text: 'Semilla utilizada: ' + el.semilla + ' , Chi-Cuadrado estimado: ' + el.valorChi + ' y fue ' + (el.aceptacion ? 'aceptado': 'rechazado'),
          child: [{
            el: 'button',
            attrs: [{name: 'class', val: 'item__toggle'}],
            text: '+'
          },{
            el: 'div',
            attrs: [{name: 'class', val: 'item__content'}],
            child: [{
              el: 'div',
              attrs: [{name: 'class', val: 'table-basic'}],
              child: [{
                el: 'table',
                child: [{
                    el: 'thead',
                    child: [{
                      el: 'tr',
                      child: [{
                        el: 'th'
                      },{
                        el: 'th',
                        text: 'f',
                        child: [{
                          el: 'sub',
                          text: 'i'
                        }]
                      },{
                        el: 'th',
                        text: 'np',
                        child: [{
                          el: 'sub',
                          text: 'i'
                        }]
                      },{
                        el: 'th',
                        child:[{
                          el: 'span',
                          text: 'f'
                        },{
                          el: 'sub',
                          text: 'i'
                        },{
                          el: 'span',
                          text: '-np'
                        },{
                          el: 'sub',
                          text: 'i'
                        }]
                      },{
                        el: 'th',
                        child: [{
                          el:'span',
                          text: '(Φ'
                        },{
                          el: 'sub',
                          text: 'i'
                        },{
                          el: 'span',
                          text: ')²'
                        }]
                      },{
                        el: 'th',
                        child: [{
                          el: 'span',
                          text: '(Φ'
                        },{
                          el: 'sub',
                          text: 'i'
                        },{
                          el: 'span',
                          text: ')²/np'
                        },{
                          el: 'sub',
                          text: 'i'
                        }]
                      }]
                    }]
                  },{
                    el: 'tbody',
                    child: el.frecuencia.map((fr,i)=>({//filas de cada tabla
                      el: 'tr',
                      child: [{
                        el: 'td',
                        text: (i == 0 ? '0':i)
                      },{
                        el: 'td',
                        text: (fr == 0 ? '0':fr)
                      },{
                        el: 'td',
                        text: (el.valornpi == 0 ? '0':el.valornpi)
                      },{
                        el: 'td',
                        text: ((Math.round((fr-el.valornpi)*decimales)/decimales) == 0? '0':(Math.round((fr-el.valornpi)*decimales)/decimales))
                      },{
                        el: 'td',
                        text: ((Math.round(((fr-el.valornpi)**2)*decimales)/decimales) == 0? '0':(Math.round(((fr-el.valornpi)**2)*decimales)/decimales))
                      },{
                        el: 'td',
                        text: ((Math.round((((fr-el.valornpi)**2)/el.valornpi)*decimales)/decimales) == 0 ? '0':(Math.round((((fr-el.valornpi)**2)/el.valornpi)*decimales)/decimales))
                      }]
                    }))
                }]
              }]
            },{
              el: 'div',
              attrs: [{name: 'class', val: 'grafico-content'}],
              child: [{
                el:'canvas',
                attrs: [{name: 'class', val: ('grafico-'+key)}]
              }]
            }]
          }]
        }))
      }]
    })
  }else{
    return new Error('Se esperaba un Arraglo!')
  }
}
