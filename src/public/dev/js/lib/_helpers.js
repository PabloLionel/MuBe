// var resultadoRancking = JSON.parse('{"chicuadrado": [{"aceptacion": true, "frecuencia": [1, 8, 4, 8, 4, 5, 3, 9, 3, 9], "semilla": 251, "serie": [263, 419, 447, 811, 543, 59, 767, 971, 623, 99, 287, 731, 503, 539, 7, 91, 183, 379, 927, 51], "serie0y1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "valorChi": 11, "valornpi": 5}, {"aceptacion": true, "frecuencia": [2, 10, 3, 8, 2, 3, 4, 12, 7, 8], "semilla": 137, "serie": [781, 153, 989, 857, 141, 833, 829, 777, 101, 313, 69, 897, 661, 593, 709, 217, 821, 673, 749, 737], "serie0y1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "valorChi": 18, "valornpi": 5}]}')
let tColas = {'tColas': {'exp1': {'corrida': [{'numCliente': [1, 2, 3], 'tLlegada': [0, 1.8442, 1.8783], 'tServicio': [1.7132, 7.3767, 0.1363], 'tEntLlega': [0, 1.8442, 0.0341], 'tEnCola': [0, 0, 7.3426], 'tPerman': [1.7132, 7.3767, 7.4789], 'tSalida': [1.7132, 9.2209, 9.3572], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 1, 'mediaTeL': 0.6261, 'mediaTE': 2.4475, 'mediaTW': 5.5229, 'mediaTC': 0.3333, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 0.5379, 1.5252], 'tServicio': [1.7132, 2.1516, 3.9494], 'tEntLlega': [0, 0.5379, 0.9873], 'tEnCola': [0, 1.1753, 2.3396], 'tPerman': [1.7132, 3.3269, 6.289], 'tSalida': [1.7132, 3.8648, 7.8142], 'clientsCola': [0, 1, 2], 'tOcioServer': [0, 0, 0], 'numCorrida': 2, 'mediaTeL': 0.5084, 'mediaTE': 1.1716, 'mediaTW': 3.7764, 'mediaTC': 1.0, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 1.9815, 2.4939], 'tServicio': [1.7132, 7.9262, 2.0496], 'tEntLlega': [0, 1.9815, 0.5124], 'tEnCola': [0, 0, 7.4138], 'tPerman': [1.7132, 7.9262, 9.4634], 'tSalida': [1.7132, 9.9077, 11.9573], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 3, 'mediaTeL': 0.8313, 'mediaTE': 2.4713, 'mediaTW': 6.3676, 'mediaTC': 0.3333, 'mediaTO': 0.0}], 'L': 0.2, 'M': 0.8, 'mediaExpTE': 2.0301, 'mediaExpTW': 5.2223, 'mediaExpTO': 0.0}, 'exp2': {'corrida': [{'numCliente': [1, 2, 3], 'tLlegada': [0, 2.4589, 2.5043], 'tServicio': [1.7132, 7.3767, 0.1363], 'tEntLlega': [0, 2.4589, 0.0454], 'tEnCola': [0, 0, 7.3313], 'tPerman': [1.7132, 7.3767, 7.4676], 'tSalida': [1.7132, 9.8356, 9.9719], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 1, 'mediaTeL': 0.8348, 'mediaTE': 2.4438, 'mediaTW': 5.5192, 'mediaTC': 0.3333, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 0.7172, 2.0337], 'tServicio': [1.7132, 2.1516, 3.9494], 'tEntLlega': [0, 0.7172, 1.3165], 'tEnCola': [0, 0.996, 1.8311], 'tPerman': [1.7132, 3.1476, 5.7805], 'tSalida': [1.7132, 3.8648, 7.8142], 'clientsCola': [0, 1, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 2, 'mediaTeL': 0.6779, 'mediaTE': 0.9424, 'mediaTW': 3.5471, 'mediaTC': 0.6667, 'mediaTO': 0.0}, {'numCliente': [1, 2, 3], 'tLlegada': [0, 2.6421, 3.3253], 'tServicio': [1.7132, 7.9262, 2.0496], 'tEntLlega': [0, 2.6421, 0.6832], 'tEnCola': [0, 0, 7.243], 'tPerman': [1.7132, 7.9262, 9.2926], 'tSalida': [1.7132, 10.5683, 12.6179], 'clientsCola': [0, 0, 1], 'tOcioServer': [0, 0, 0], 'numCorrida': 3, 'mediaTeL': 1.1084, 'mediaTE': 2.4143, 'mediaTW': 6.3107, 'mediaTC': 0.3333, 'mediaTO': 0.0}], 'L':0.2, 'M': 0.6, 'mediaExpTE': 1.9335, 'mediaExpTW': 5.1257, 'mediaExpTO': 0.0}}}
// tColas = JSON.parse(tColas)
console.log(tColas)
//Sleep_sort
// Array.prototype.timeoutSort = function (f) {
// 	this.forEach(function (n) {
// 		setTimeout(function () { f(n) }, 5 * n)
// 	})
// }
//ejemplo: [1, 9, 8, 7, 6, 5, 3, 4, 5, 2, 0].timeoutSort(function(n) { document.write(n + 'br'); })
function each(iter,fn){Array.prototype.forEach.call(iter,(el,i)=>fn.call(this,el,i))}
/**
 * Escucha un evento pasado por parametro a una lista de componentes filtrados
 * por un selector, si el componente tiene dicho selector se aplica el Callback
 * que se pasa por parametro.
 * @author Iván Abascal Lozano
 * @param {list} list - Elemento (HTMLElement) sobre el que
 * se aplica el evento.
 * @param {event} event - Evento(string) a escuchar.
 * @param {selector} selector -
 * @param {fn} fn -
 */
var on = function(list, event, selector, fn) {
  list.addEventListener(event, function(e){
    let that = this;
    let helper = el =>{
      if (el !== that){
        if (typeof el !== 'undefined' ){
          if (el.classList.contains(selector))
            return el
        }
        return helper(el.parentNode)
      }
      return false
    }
    let el = helper(e.target)
    if (el !== false)
      fn.call(this, e)
  })
}
String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, function(a){return a.toUpperCase()})
}
function removeChilds(parent){
  while(parent.firstChild){parent.removeChild(parent.firstChild);}
};
function addChilds(node,childs) {
  childs = Array.isArray(childs) ? childs : Array.prototype.slice.apply(childs);
  childs.forEach(el=>node.appendChild(el));
};
function isElement(o){
  return (typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string")
}
function newElement(el, attr, text) {
  let elm = document.createElement(el)
  if(text)
    elm.appendChild(document.createTextNode(text))
  if(Array.isArray(attr))
    attr.forEach(at => elm.setAttribute(at.name, at.val))
  return elm
}
function newComponentHTML(els) {
  let node = isElement(els) ? els: newElement(els.el, els.attrs, els.text)
  if (Array.isArray(els.child)) {
      els.child.forEach(el => node.appendChild(newComponentHTML(el)))
  }//else if (isElement(els.child)) { node.appendChild(els.child) }
  return node
}
function getForm(id){return forms.filter(x=>x.id == id)[0]}
function addInputs(num,label,inputs){
  //  retornamos el estado de los nuevos inputs:
  var state = []
  // verificamos si num es un numero
  Number.isInteger(parseInt(num))?
    num = parseInt(num)
    : num = 0;
  // removemos los imputs actuales
  removeChilds(inputs);
  // agregamos los nuevos
  for(let i = 1; i<=num; i++){
    if(label){
      inputs.appendChild(newElement(
        'label',
        [{
          name: 'for',
          val: label +'-' + i
        }],
        label.capitalize() + '-' + i
      ))
    }
    let newInput =  newElement(
      'input',
      [{
        name: 'type',
        val: 'number'
      },{
        name: 'name',
        val: (label? label + '-': '') + i
      },{
        name: 'min',
        val: '0'
      },{
        name: 'placeholder',
        val: (label? label.capitalize() + '-': '') + i
      }]
    )
    inputs.appendChild(newInput)
    state.push(newInput)
  }
  return state
}
let modal = (head, body, foot) => {
  if (typeof head == 'string')
    return newComponent({
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
// function newInputExp(inputs, title, num){
//   //  retornamos el estado de los nuevos inputs:
//   var state = []
//   // verificamos si num es un numero
//   Number.isInteger(parseInt(num))?
//     num = parseInt(num)
//     : num = 0;
//   // removemos los imputs actuales
//   removeChilds(inputs);
//   // agregamos los nuevos
//   for(let i = 1; i<=num; i++){
//     let newInput = newComponentHTML({
//       el: 'div',
//       attrs: [{name: 'class',val: 'section'}],
//       child: [{
//         el: 'p',
//         attrs: [{name: 'class', val: 'subtitle'}],
//         text: (title? title.capitalize() + '-': '') + i
//       },{
//         el: 'label',
//         attrs: [{name: 'for', val: 'M'}],
//         text: 'M: '
//       },{
//         el: 'input',
//         attrs: [{name: 'class',val: 'entrante'},{name: 'type',val: 'number'},{name: 'name', val: 'M'},{name: 'placeholder', val: 'M'}, {name: 'required', val: 'true'}]
//       },{
//         el: 'label',
//         attrs: [{name: 'for',val: 'L'}],
//         text: 'L: '
//       },{
//         el: 'input',
//         attrs: [{name:'class', val:'entrante'},{name:'type', val:'number'},{name:'name', val:'L'},{name:'placeholder', val:'L'},{name:'required', val:'true'}]
//       }]
//     })
//     inputs.appendChild(newInput)
//     state.push(newInput)
//   }
//   return state
// }
// console.log(newInputExp(document.getElementById('newInfo'),'prueba', 1)[0])
/* <div class="section">
      <p class="subtitle">Experimento-1</p>
      <label for="M">M:</label>
      <input class="entrante" type="number" name="M" placeholder="M" required="required">
      <label for="L">L:</label>
      <input class="entrante" type="number" name="L" placeholder="L" required="required">
    </div> */
