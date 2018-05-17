var resultadoRancking = JSON.parse('{"chicuadrado": [{"aceptacion": true, "frecuencia": [1, 8, 4, 8, 4, 5, 3, 9, 3, 9], "semilla": 251, "serie": [263, 419, 447, 811, 543, 59, 767, 971, 623, 99, 287, 731, 503, 539, 7, 91, 183, 379, 927, 51], "serie0y1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "valorChi": 11, "valornpi": 5}, {"aceptacion": true, "frecuencia": [2, 10, 3, 8, 2, 3, 4, 12, 7, 8], "semilla": 137, "serie": [781, 153, 989, 857, 141, 833, 829, 777, 101, 313, 69, 897, 661, 593, 709, 217, 821, 673, 749, 737], "serie0y1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "valorChi": 18, "valornpi": 5}]}')
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
