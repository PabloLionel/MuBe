//[[[[[[[[[[[[[[[[[[[[[[[[Formulario para tablero]]]]]]]]]]]]]]]]]]]]]]]]
var formRanking = getForm('ranking')
var preview = Array.prototype.slice.apply(formRanking.form.parentElement.parentElement.children[1].children[1].children).slice(1, 6)
var nsem = document.getElementById('nsemillas')
var optionsRanking = Array.prototype.slice.apply(formRanking.inputs[3].children)
var semillas = []
on(formRanking.form, 'keyup', 'entrante', e => ranking(e))
function ranking(e) {
  switch (formRanking.inputs.indexOf(e.target)) {
    case 0://Modulo
      preview[0].innerHTML = 'Modulo: ' + formRanking.inputs[0].value + ','
      break;
    case 1://Cantidad
      preview[1].innerHTML = 'Cantidad: ' + formRanking.inputs[1].value + ','
      break;
    case 2://Bandera
      preview[2].innerHTML = 'Bandera: ' + formRanking.inputs[2].value + ','
      break;
    case 3://Error
      preview[3].innerHTML = 'Error: ' + optionsRanking.filter(op => op.selected)[0].innerHTML + ','
      break;
    case 4://Semillas
      semillas = addInputs(e.target.value, 'semilla', nsem)
      let n = formRanking.inputs.length - 5
      formRanking.inputs.splice(5, n)
      each(semillas, el => {
        el.classList.add('entrante')
        formRanking.inputs.push(el)
      })
      preview[4].innerHTML = 'Semillas: ' + semillas.map(x => x.value)
      break;
    default:
      preview[4].innerHTML = 'Semillas: ' + semillas.map(x => x.value)
  }
}
formRanking.calcular.addEventListener('click', e => {
  e.preventDefault()
  removeChilds(newInfo)
  req.open('POST', '/testChi', true);
  req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  req.onload = () => {
    if (req.status >= 200 && req.status < 400) {
      var request = JSON.parse(req.response)
      newInfo.appendChild(newRanking(request.chicuadrado))
      cargarGraficosChi(request.chicuadrado, optionsRanking.filter(op => op.selected)[0].innerHTML)
      on(document.getElementById('ranking-container'),'click','list-toggle', e=>{
        e.target.nextSibling.classList.toggle('active')
      })
    } else { console.error('Error en la conexion! estado: ' + req.status) }
  }
  req.send(JSON.stringify({
    modulo: parseInt(formRanking.inputs[0].value),
    cant: parseInt(formRanking.inputs[1].value),
    a: parseInt(formRanking.inputs[2].value),
    error: parseFloat(optionsRanking.filter(op => op.selected)[0].innerHTML),
    semillas: semillas.map(x => parseInt(x.value))
  })
  )
  window.scrollTo(0, document.getElementById('informe').getBoundingClientRect().y)
})
// newInfo.appendChild(newRanking(resultadoRancking.chicuadrado))
// on(document.getElementById('ranking-container'),'click','item-toggle', e=>{
//   e.target.nextSibling.classList.toggle('active')
// })

//[[[[[[[[[[[[[[[[[[[[[[[[Formulario para inventarioParcial]]]]]]]]]]]]]]]]]]]]]]]]
var formInvParcial = getForm('inventarioParcial')
var arrPedido = []
const nPedidos = document.getElementById('nPedidos')
var arrStock = []
const nStock = document.getElementById('nStocks')

on(formInvParcial.form, 'keyup', 'entrante', e => inventarioParcial(e))
// on(inventarioParcial.form,'click','entrante',e=>inventarioParcial(e))
function inventarioParcial(e) {
  // console.log(e.target)
  switch (formInvParcial.inputs.indexOf(e.target)) {
    case 0://Modulo

      break;
    case 1://Cantidad

      break;
    case 2://Bandera

      break;
    case 3://Semilla

      break;
    case 4://Stock

      break;
    case 5://Pedidos
      arrPedido = addInputs(formInvParcial.inputs[5].value,'pedido',nPedidos)
      each(arrPedido, el => {el.classList.add('entrante') })
      break;
    case 6://Pedido

      break;
    case 7://Stocks
      arrStock = addInputs(formInvParcial.inputs[7].value,'stock',nStock)
      each(arrStock, el => {el.classList.add('entrante') })
      break;
    // default:
    // console.log(e.target)
    // preview[4].innerHTML = 'Semillas: ' + semillas.map(x=>x.value)
  }
}
formInvParcial.calcular.addEventListener('click', e => {
  e.preventDefault()
  removeChilds(newInfo)
  req.open('POST', '/inventarioParcial', true);
  req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  req.onload = () => {
    if (req.status >= 200 && req.status < 400) {
      var request = JSON.parse(req.response)
      newInfo.appendChild(newInvParcial(request.inventario))
      cargarGraficosInvPar(request.inventario)
      on(document.getElementById('experimentos'),'click','list-toggle', e=>{
        e.target.classList.toggle('active')
      })
    } else { console.error('Error en la conexion! Estado: ' + req.status) }
  }

req.send(JSON.stringify({
  modulo: parseInt(formInvParcial.inputs[0].value),
  cant: parseInt(formInvParcial.inputs[1].value),
  a: parseInt(formInvParcial.inputs[2].value),
  semillas: [parseInt(formInvParcial.inputs[3].value)],
  x1: [2, 3, 4],
  px1: [0.30, 0.40, 0.30],
  x2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  px2: [0.135, 0.271, 0.271, 0.180, 0.090, 0.036, 0.012, 0.004, 0.001],
  dic: [
    { 'stock': parseInt(formInvParcial.inputs[4].value), 'pedido': arrPedido.map(x=>parseInt(x.value)) },
    { 'pedido': parseInt(formInvParcial.inputs[6].value), 'stock': arrStock.map(x=>parseInt(x.value)) }
  ]
  })
  )
  window.scrollTo(0, document.getElementById('informe').getBoundingClientRect().y)
})
//[[[[[[[[[[[[[[[[[[[[[[[[Formulario para Teoria de Colas]]]]]]]]]]]]]]]]]]]]]]]]
var formTeoriaDeColas = getForm('teoriaDeColas')

// var optionsTColas = Array.prototype.slice.apply(formTeoriaDeColas.inputs[4].children)
// on(formTeoriaDeColas.form, 'keyup', 'entrante', e => teoriaDeColas(e))
// function teoriaDeColas(e) {
//   // console.log(e.target)
//   switch (formTeoriaDeColas.inputs.indexOf(e.target)) {
//     case 0://Modulo

//       break;
//     case 1://Cantidad

//       break;
//     case 2://Bandera

//       break;
//     case 3://Semilla

//       break;
//     case 4://Stock

//       break;
//     case 5://Pedidos
//       break;
//     case 6://Pedido

//       break;
//     case 7://Stocks
//       break;
//     // default:
//     // console.log(e.target)
//     // preview[4].innerHTML = 'Semillas: ' + semillas.map(x=>x.value)
//   }
// }
formTeoriaDeColas.calcular.addEventListener('click', e => {
  e.preventDefault()
  removeChilds(newInfo)
  req.open('POST', '/tColas', true);
  req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  req.onload = () => {
    if (req.status >= 200 && req.status < 400) {
      var request = JSON.parse(req.response)
      newInfo.appendChild(newTColas(request.tColas))
      cargarGraficosTColas(request.tColas)
    } else { console.error('Error en la conexion! Estado: ' + req.status) }
  }
  req.send(JSON.stringify({
    modulo: parseInt(formTeoriaDeColas.inputs[0].value),
    cant: parseInt(formTeoriaDeColas.inputs[1].value),
    a: parseInt(formTeoriaDeColas.inputs[2].value),
    semillas: parseInt(formTeoriaDeColas.inputs[3].value),
    exp: parseInt(formTeoriaDeColas.inputs[4].value),
    inc: parseFloat(formTeoriaDeColas.inputs[5].value),
    corridas: parseInt(formTeoriaDeColas.inputs[6].value),
    opcML: formTeoriaDeColas.inputs[7].checked,
    iniM: parseFloat(formTeoriaDeColas.inputs[9].value),
    iniL: parseFloat(formTeoriaDeColas.inputs[10].value)
    })
    )
    window.scrollTo(0, document.getElementById('informe').getBoundingClientRect().y)
})


