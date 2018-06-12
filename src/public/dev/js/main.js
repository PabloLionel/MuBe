const modal = (head, body, foot) => {
  if (typeof head == 'string')
    return newComponentHTML({
      el: 'div',
      attrs: [{name: 'class', val: 'modal-content'}],
      child:[{
        el: 'div',
        attrs: [{name: 'class', val: 'modal'}],
        child: [{
          el: 'div',
          attrs: [{name: 'class', val: 'modal-head'}],
          child: [{el: 'h1',text: head}]
        },{
          el: 'div',
          attrs: [{name: 'class', val: 'modal-body'}],
          child: [body]
        },{
          el: 'div',
          attrs: [{name: 'class', val: 'modal-foot'}],
          child: foot
        }]
      }]

    })
  else
    throw new Error('El nombre del modal debe ser una cadena')
}
const newTabsColas = data => {
  let buttons = []
  let items = []
  let numExp = 1
  for(key in data){
    buttons.push({
      el: 'button',
      text: 'Exp. ' + numExp
    })
    items.push({
      el: 'div',
      attrs: [{name: 'class', val: 'tab__item'}],
      child: [{
        el: 'h2',
        text: 'Experimento ' + numExp
      },{
        el: 'button',
        attrs: [{name: 'class', val: 'button btnsCor'},{name: 'data-id',val: '' + numExp}],
        text: 'Ver Corridas del experimento'
      },
        modal('Corridas del experimento ' + numExp,
        newComponentHTML({
          el: 'div',
          child: data[key].corrida.map(tabla =>newTCCorridas(tabla))
        }),
        [newComponentHTML({
          el: 'button',
          attrs: [{name: 'class', val: 'button salir__modal'},{name: 'data-id', val: numExp}],
          text: 'Salir'
        })])
      ,{
        el: 'h3',
        text: 'Resumen de Corridas:'
      },{
        el: 'div',
        attrs: [{name: 'class', val: 'table'}],
        child: [newTablaPorExp(data[key].corrida)]
      },{
        el: 'div',
        attrs: [{name: 'class',val: 'grafico__content'}],
        child: [{
          el: 'canvas',
          attrs: [{name: 'id', val: 'graficoTC-'+numExp++}]
        }]
      }]
    })
  }
  return newComponentHTML({
    el: 'div',
    attrs: [{name: 'class', val: 'tab'}],
    child: [{
      el: 'div',
      attrs: [{name: 'class', val: 'tab__head'}],
      child: buttons
    }].concat(items)
  })
}
const newTablaPorExp = data =>{
  return newComponentHTML({
    el: 'div',
    attrs: [{name: 'class', val: 'table'}],
    child: [{
      el: 'h2',
      text: ''
    },{
      el: 'table',
      child: [{
        el: 'thead',
        child: [{
          el: 'tr',
          child: [{
            el: 'th',
            text: 'N° Corr.'
          }, {
            el: 'th',
            text: 'Med. de T. de Servicio'
          }, {
            el: 'th',
            text: 'Med. T. en Cola'
          }, {
            el: 'th',
            text: 'Med. T. de Per. en el S.'
          }, {
            el: 'th',
            text: 'Med. T. ente Llegadas'
          }, {
            el: 'th',
            text: 'Med. de N° de Cli. en Cola'
          }, {
            el: 'th',
            text: 'Med. T. en Ocio'
          }]
        }]
      },{
        el: 'tbody',
        child: data.map((c,i) => ({
          el: 'tr',
            child: [{
              el: 'td',
              text: c.numCorrida.toString()
            },{
              el: 'td',
              text: c.mediaTS.toString()
            },{
              el: 'td',
              text: c.mediaTE.toString()
            },{
              el: 'td',
              text: c.mediaTW.toString()
            },{
              el: 'td',
              text: c.mediaTeL.toString()
            },{
              el: 'td',
              text: c.mediaTC.toString()
            },{
              el: 'td',
              text: c.mediaTO.toString()
            }]
        }))
      }]
    }]
  })
}
const newTCCorridas = data => {
  return newComponentHTML({
    el: 'div',
    attrs: [{name: 'class', val: 'table'}],
    child: [{
      el: 'h2',
      text: 'Corrida ' + data.numCorrida
    },{
      el: 'table',
      child: [{
        el: 'thead',
        child: [{
          el: 'tr',
          child: [{
            el: 'th',
            text: 'N° de cliente'
          }, {
            el: 'th',
            text: 'T. de Llegada'
          }, {
            el: 'th',
            text: 'T. de Servicio'
          }, {
            el: 'th',
            text: 'T. entre Llegadas'
          }, {
            el: 'th',
            text: 'T. en la Cola'
          }, {
            el: 'th',
            text: 'T. de Permanencia'
          }, {
            el: 'th',
            text: 'T. de Salida'
          }, {
            el: 'th',
            text: 'N° de Clientes en Cola'
          }, {
            el: 'th',
            text: 'T. de Ocio del Servidor'
          }]
        }]
      },{
        el: 'tbody',
        child: data.numCliente.map((c,i)=>(
          {
            el: 'tr',
            child: [{
              el: 'td',
              text: c.toString()
            },{
              el: 'td',
              text: data.tLlegada[i].toString()
            },{
              el: 'td',
              text: data.tServicio[i].toString()
            },{
              el: 'td',
              text: data.tEntLlega[i].toString()
            },{
              el: 'td',
              text: data.tEnCola[i].toString()
            },{
              el: 'td',
              text: data.tPerman[i].toString()
            },{
              el: 'td',
              text: data.tSalida[i].toString()
            },{
              el: 'td',
              text: data.clientsCola[i].toString()
            },{
              el: 'td',
              text: data.tOcioServer[i].toString()
            }]
          }
        ))
      }]
    }]
  })
}
const newTablaFinal = data => {
  let acum = []
  let numExp = 1
  for(let key in data){
    acum.push({
      el: 'tr',
      child: [{
        el: 'td',
        text: (numExp++).toString()
      },{
        el: 'td',
        text: data[key].L.toString()
      },{
        el: 'td',
        text: data[key].M.toString()
      },{
        el: 'td',
        text: data[key].mediaExpTE.toString()
      },{
        el: 'td',
        text: data[key].mediaExpTO.toString()
      },{
        el: 'td',
        text: data[key].mediaExpTW.toString()
      }]
    })
  }
  return newComponentHTML({
    el: 'div',
    attrs: [{name: 'class', val: 'table'}],
    child: [{
      el: 'h2',
      text: ''
    },{
      el: 'table',
      child: [{
        el: 'thead',
        child: [{
          el: 'tr',
          child: [{
            el: 'th',
            text: 'Exp.'
          }, {
            el: 'th',
            text: 'Tasa de Llegada(L)'
          }, {
            el: 'th',
            text: 'Tasa de Servicio(M)'
          }, {
            el: 'th',
            text: 'Med. T. de EC'
          }, {
            el: 'th',
            text: 'Med. T. de Ocio'
          }, {
            el: 'th',
            text: 'Med. de Perm. en Sist.'
          }]
        }]
      },{
        el: 'tbody',
        child: acum
      }]
    }]
  })
}
newTColas = data => {
  const info = document.getElementById('newInfo')
  info.appendChild(newComponentHTML({
    el: 'h1',
    attrs: [{name: 'class', val: 'tx-center tx-upper tx-Jumbo'}],
    text: 'Teoria de Colas'
  }))
  info.appendChild(newTabsColas(data))
  info.appendChild(newComponentHTML({
    el: 'h2',
    attrs: [{name: 'class', val: 'tx-center tx-upper tx-Jumbo'}],
    text: 'Resumen de Simulación'
  }))
  info.appendChild(newTablaFinal(data))
  info.appendChild(newComponentHTML({
    el: 'div',
    attra: [{name: 'class', val: 'grafico__content'}],
    child: [{
      el: 'canvas',
      attrs: [{name: 'id', val: 'graficoTC-simu'}]
    }]
  }))
  let btnsCor = document.getElementsByClassName('btnsCor')
  let modales = document.getElementsByClassName('modal-content')
  each(btnsCor, btn => {
    btn.addEventListener('click', e => {
      modales[parseInt(e.target.dataset.id) - 1].style.display = 'block'
    })
  })
  let btnsModSalir = document.getElementsByClassName('salir__modal')
  each(btnsModSalir, btn => {
    btn.addEventListener('click', e => {
      modales[parseInt(e.target.dataset.id) - 1].style.display = 'none'
    })
  })
  tabs()
}
