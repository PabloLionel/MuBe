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
let tColas = {'tColas': {'exp1': {'corrida': [{'numCliente': [1, 2, 3], 'tLlegada': [0, 1.8442, 1.8783], 'tServicio': [1.7132, 7.3767, 0.1363], 'tEntLlega': [0, 1.8442, 0.0341], 'tEnCola': [0, 0, 7.3426], 'tPerman': [1.7132, 7.3767, 7.4789], 'tSalida': [1.7132, 9.2209, 9.3572], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 1, 'mediaTeL': 0.6261, 'mediaTE': 2.4475, 'mediaTW': 5.5229, 'mediaTC': 0.3333, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 0.5379, 1.5252], 'tServicio': [1.7132, 2.1516, 3.9494], 'tEntLlega': [0, 0.5379, 0.9873], 'tEnCola': [0, 1.1753, 2.3396], 'tPerman': [1.7132, 3.3269, 6.289], 'tSalida': [1.7132, 3.8648, 7.8142], 'clientsCola': [0, 1, 2], 'tOcioServer': [0, 0, 0], 'numCorrida': 2, 'mediaTeL': 0.5084, 'mediaTE': 1.1716, 'mediaTW': 3.7764, 'mediaTC': 1.0, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 1.9815, 2.4939], 'tServicio': [1.7132, 7.9262, 2.0496], 'tEntLlega': [0, 1.9815, 0.5124], 'tEnCola': [0, 0, 7.4138], 'tPerman': [1.7132, 7.9262, 9.4634], 'tSalida': [1.7132, 9.9077, 11.9573], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 3, 'mediaTeL': 0.8313, 'mediaTE': 2.4713, 'mediaTW': 6.3676, 'mediaTC': 0.3333, 'mediaTO': 0.0}], 'L': 0.2, 'M': 0.8, 'mediaExpTE': 2.0301, 'mediaExpTW': 5.2223, 'mediaExpTO': 0.0}, 'exp2': {'corrida': [{'numCliente': [1, 2, 3], 'tLlegada': [0, 2.4589, 2.5043], 'tServicio': [1.7132, 7.3767, 0.1363], 'tEntLlega': [0, 2.4589, 0.0454], 'tEnCola': [0, 0, 7.3313], 'tPerman': [1.7132, 7.3767, 7.4676], 'tSalida': [1.7132, 9.8356, 9.9719], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 1, 'mediaTeL': 0.8348, 'mediaTE': 2.4438, 'mediaTW': 5.5192, 'mediaTC': 0.3333, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 0.7172, 2.0337], 'tServicio': [1.7132, 2.1516, 3.9494], 'tEntLlega': [0, 0.7172, 1.3165], 'tEnCola': [0, 0.996, 1.8311], 'tPerman': [1.7132, 3.1476, 5.7805], 'tSalida': [1.7132, 3.8648, 7.8142], 'clientsCola': [0, 1, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 2, 'mediaTeL': 0.6779, 'mediaTE': 0.9424, 'mediaTW': 3.5471, 'mediaTC': 0.6667, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 2.6421, 3.3253], 'tServicio': [1.7132, 7.9262, 2.0496], 'tEntLlega': [0, 2.6421, 0.6832], 'tEnCola': [0, 0, 7.243], 'tPerman': [1.7132, 7.9262, 9.2926], 'tSalida': [1.7132, 10.5683, 12.6179], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 3, 'mediaTeL': 1.1084, 'mediaTE': 2.4143, 'mediaTW': 6.3107, 'mediaTC': 0.3333, 'mediaTO': 0.0}], 'L':0.2, 'M': 0.6, 'mediaExpTE': 1.9335, 'mediaExpTW': 5.1257, 'mediaExpTO': 0.0}}}
// tColas = JSON.parse(tColas)
console.log(tColas)
// for(let key in tColas.tColas){
//   console.log(tColas.tColas[key])
// }
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
        attrs: [{name: 'class', val: 'button btnsCor'}],
        text: 'Ver Corridas del experimento'
      },{
        el: 'h3',
        text: 'Resumen de Corridas:'
      },{
        el: 'div',
        text:'otra tabla aquí'
      },{
        el: 'div',
        attrs: [{name: 'id', val: 'garficoTC-'+numExp++}],
        text: 'grafico aquí'
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
let tResult = newTabsColas(tColas.tColas)
let btnsCor = document.getElementsByClassName('btnsCor')
each(btnsCor, btn => {
  btn.addEventListenert('click', e => {
    console.log(e.target)
  })
})
console.log(btnsCor)
console.log(tResult)
const info = document.getElementById('newInfo')
info.appendChild(tResult)
tabs()

// const btns_head_tab = n => {
//   let btns = []
//   for(let i = 0; i < n; ++i)
//     btns.push({
//       el: 'button',
//       text: 'Exp. 1'
//     })
//     return btns
//   }//botones para cada item
// let items = data =>{
//   let pages = []
//   let exp = 0
//   for(let key in data){
//     pages.push(newComponentHTML({
//       el: 'div',
//       attrs: [{name: 'class', val: 'tab__item'}],
//       child: [{
//         el: 'h4',
//         text: 'Experimento ' + exp++
//       },{
//         el: 'button',
//         attrs: [{name: 'class', val: 'button'}, {name: 'id', val: 'exp' + exp}],
//         text: 'Ver Corridas'
//       }]
//     }))
//   }
//   return pages
// }//items o paginas del tab
// const newTabsColas = data => newComponentHTML({
//   el: 'div',
//   attrs: [{name: 'class', val: 'tab'}],
//   child: [{
//     el: 'div',
//     attrs: [{name: 'class', val: 'tab__head'}],
//     child: btns_head_tab(getForm('teoriaDeColas').inputs[6].value ? parseInt(getForm('teoriaDeColas').inputs[6].value) : 0)
//   }].concat(items(data))
// })
