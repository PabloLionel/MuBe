var req = new XMLHttpRequest()
var newInfo = document.getElementById('newInfo')
var forms = Array.prototype.slice.apply(document.getElementsByTagName('form')).map(
  x => ({
    id: x.dataset.id,
    form: x,
    imputs: Array.prototype.slice.apply(x).map(inp => inp),
    calcular: Array.prototype.slice.apply(x.children).filter(x => x.classList.contains('calcular'))[0],
    reset: Array.prototype.slice.apply(x.children).filter(x => x.classList.contains('reset'))[0]
  })
)
each(forms, el => {
  el.reset.addEventListener('click', e => {
    e.preventDefault();
    e.target.parentElement.reset();
  })
})
//[[[[[[[[[[[[[[[[[[[[[[[[Formulario para tablero]]]]]]]]]]]]]]]]]]]]]]]]
var formRanking = getForm('ranking')
var preview = Array.prototype.slice.apply(formRanking.form.parentElement.parentElement.children[1].children[1].children).slice(1, 6)
var nsem = document.getElementById('nsemillas')
var optionsRanking = Array.prototype.slice.apply(formRanking.imputs[3].children)
var semillas = []
on(formRanking.form, 'keyup', 'entrante', e => ranking(e))
function ranking(e) {
  switch (formRanking.imputs.indexOf(e.target)) {
    case 0://Modulo
      preview[0].innerHTML = 'Modulo: ' + formRanking.imputs[0].value + ','
      break;
    case 1://Cantidad
      preview[1].innerHTML = 'Cantidad: ' + formRanking.imputs[1].value + ','
      break;
    case 2://Bandera
      preview[2].innerHTML = 'Bandera: ' + formRanking.imputs[2].value + ','
      break;
    case 3://Error
      preview[3].innerHTML = 'Error: ' + optionsRanking.filter(op => op.selected)[0].innerHTML + ','
      break;
    case 4://Semillas
      semillas = addInputs(e.target.value, 'semilla', nsem)
      let n = formRanking.imputs.length - 5
      formRanking.imputs.splice(5, n)
      each(semillas, el => {
        el.classList.add('entrante')
        formRanking.imputs.push(el)
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
    modulo: parseInt(formRanking.imputs[0].value),
    cant: parseInt(formRanking.imputs[1].value),
    a: parseInt(formRanking.imputs[2].value),
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
  switch (formInvParcial.imputs.indexOf(e.target)) {
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
      arrPedido = addInputs(formInvParcial.imputs[5].value,'pedido',nPedidos)
      each(arrPedido, el => {el.classList.add('entrante') })
      break;
    case 6://Pedido

      break;
    case 7://Stocks
      arrStock = addInputs(formInvParcial.imputs[7].value,'stock',nStock)
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
      on(document.getElementById('ranking-container'),'click','list-toggle', e=>{
        e.target.classList.toggle('active')
      })
    } else { console.error('Error en la conexion! Estado: ' + req.status) }
  }

req.send(JSON.stringify({
  modulo: parseInt(formInvParcial.imputs[0].value),
  cant: parseInt(formInvParcial.imputs[1].value),
  a: parseInt(formInvParcial.imputs[2].value),
  semillas: [parseInt(formInvParcial.imputs[3].value)],
  x1: [2, 3, 4],
  px1: [0.30, 0.40, 0.30],
  x2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  px2: [0.135, 0.271, 0.271, 0.180, 0.090, 0.036, 0.012, 0.004, 0.001],
  dic: [
    { 'stock': parseInt(formInvParcial.imputs[4].value), 'pedido': arrPedido.map(x=>parseInt(x.value)) },
    { 'pedido': parseInt(formInvParcial.imputs[6].value), 'stock': arrStock.map(x=>parseInt(x.value)) }
  ]
  })
  )
  window.scrollTo(0, document.getElementById('informe').getBoundingClientRect().y)
})

