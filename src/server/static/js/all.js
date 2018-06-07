// var resultadoRancking = JSON.parse('{"chicuadrado": [{"aceptacion": true, "frecuencia": [1, 8, 4, 8, 4, 5, 3, 9, 3, 9], "semilla": 251, "serie": [263, 419, 447, 811, 543, 59, 767, 971, 623, 99, 287, 731, 503, 539, 7, 91, 183, 379, 927, 51], "serie0y1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "valorChi": 11, "valornpi": 5}, {"aceptacion": true, "frecuencia": [2, 10, 3, 8, 2, 3, 4, 12, 7, 8], "semilla": 137, "serie": [781, 153, 989, 857, 141, 833, 829, 777, 101, 313, 69, 897, 661, 593, 709, 217, 821, 673, 749, 737], "serie0y1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "valorChi": 18, "valornpi": 5}]}')
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
const btns_head_tab = n => {
  let btns = []
  for(let i = 0; i < n; ++i)
    btns.push({
      el: 'button',
      text: 'Exp. 1'
    })
    return btns
  }//botones para cada item
let items = data =>{
  let pages = []
  let exp = 0
  for(let key in data){
    pages.push(newComponentHTML({
      el: 'div',
      attrs: [{name: 'class', val: 'tab__item'}],
      child: [{
        el: 'h4',
        text: 'Experimento ' + exp++
      },{
        el: 'button',
        attrs: [{name: 'class', val: 'button'}, {name: 'id', val: 'exp' + exp}],
        text: 'Ver Corridas'
      }]
    }))
  }
  return pages
}//items o paginas del tab
const newTabsColas = data => newComponentHTML({
  el: 'div',
  attrs: [{name: 'class', val: 'tab'}],
  child: [{
    el: 'div',
    attrs: [{name: 'class', val: 'tab__head'}],
    child: btns_head_tab(getForm('teoriaDeColas').inputs[6].value ? parseInt(getForm('teoriaDeColas').inputs[6].value) : 0)
  }].concat(items(data))
})
console.log(newTabsColas(tColas.tColash))
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
const info = document.getElementById('newInfo')
// const _modal = modal('Corridas ',
//       newComponentHTML({
//         el: 'div',
//         child: tColas.tColas.exp1.corrida.map(tabla =>newTCCorridas(tabla))
//       })
//       ,
//       [newComponentHTML({
//         el: 'button',
//         attrs: [{name: 'class', val: 'button'},{name: 'id', val: 'salir-modal'}],
//         text: 'Salir'
//       })])
// document.body.appendChild(_modal)
// document.getElementById('salir-modal').addEventListener('click',()=>{document.body.removeChild(_modal)})
// tColas.tColas.exp1.corrida.forEach(tabla => {
//   info.appendChild(newTCCorridas(tabla))
// })
// console.log()
// const newTColas = data => {
//   newTabsColas(data)

// }
tabs()

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.4
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function t(e,i,n){function a(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(o)return o(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var d=i[r]={exports:{}};e[r][0].call(d.exports,function(t){var i=e[r][1][t];return a(i?i:t)},d,d.exports,t,e,i,n)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)a(n[r]);return a}({1:[function(t,e,i){function n(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,i=/^#([a-fA-F0-9]{6})$/,n=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/(\w+)/,r=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var h=0;h<r.length;h++)r[h]=parseInt(l[h]+l[h],16)}else if(l=t.match(i)){l=l[1];for(var h=0;h<r.length;h++)r[h]=parseInt(l.slice(2*h,2*h+2),16)}else if(l=t.match(n)){for(var h=0;h<r.length;h++)r[h]=parseInt(l[h+1]);s=parseFloat(l[4])}else if(l=t.match(a)){for(var h=0;h<r.length;h++)r[h]=Math.round(2.55*parseFloat(l[h+1]));s=parseFloat(l[4])}else if(l=t.match(o)){if("transparent"==l[1])return[0,0,0,0];if(r=x[l[1]],!r)return}for(var h=0;h<r.length;h++)r[h]=v(r[h],0,255);return s=s||0==s?v(s,0,1):1,r[3]=s,r}}function a(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var n=parseFloat(i[4]),a=v(parseInt(i[1]),0,360),o=v(parseFloat(i[2]),0,100),r=v(parseFloat(i[3]),0,100),s=v(isNaN(n)?1:n,0,1);return[a,o,r,s]}}}function o(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var n=parseFloat(i[4]),a=v(parseInt(i[1]),0,360),o=v(parseFloat(i[2]),0,100),r=v(parseFloat(i[3]),0,100),s=v(isNaN(n)?1:n,0,1);return[a,o,r,s]}}}function r(t){var e=n(t);return e&&e.slice(0,3)}function s(t){var e=a(t);return e&&e.slice(0,3)}function l(t){var e=n(t);return e?e[3]:(e=a(t))?e[3]:(e=o(t))?e[3]:void 0}function h(t){return"#"+y(t[0])+y(t[1])+y(t[2])}function d(t,e){return 1>e||t[3]&&t[3]<1?u(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function u(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function c(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+a+"%)"}function f(t,e){var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgba("+i+"%, "+n+"%, "+a+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?m(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function b(t){return k[t.slice(0,3)]}function v(t,e,i){return Math.min(Math.max(e,t),i)}function y(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var x=t("color-name");e.exports={getRgba:n,getHsla:a,getRgb:r,getHsl:s,getHwb:o,getAlpha:l,hexString:h,rgbString:d,rgbaString:u,percentString:c,percentaString:f,hslString:g,hslaString:m,hwbString:p,keyword:b};var k={};for(var _ in x)k[x[_]]=_},{"color-name":5}],2:[function(t,e,i){var n=t("color-convert"),a=t("chartjs-color-string"),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=a.getRgba(t))this.setValues("rgb",e);else if(e=a.getHsla(t))this.setValues("hsl",e);else{if(!(e=a.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};o.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=.03928>=n?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=0>i?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=this,n=t,a=void 0===e?.5:e,o=2*a-1,r=i.alpha()-n.alpha(),s=((o*r===-1?o:(o+r)/(1+o*r))+1)/2,l=1-s;return this.rgb(s*i.red()+l*n.red(),s*i.green()+l*n.green(),s*i.blue()+l*n.blue()).alpha(i.alpha()*a+n.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new o,n=this.values,a=i.values;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],e={}.toString.call(t),"[object Array]"===e?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return i}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},o.prototype.setValues=function(t,e){var i,a=this.values,o=this.spaces,r=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)a[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[o[t][0]]){var l=o[t];for(i=0;i<t.length;i++)a[t][i]=e[l[i]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;var h;for(i=0;i<t.length;i++)h=Math.max(0,Math.min(r[t][i],a[t][i])),a[t][i]=Math.round(h);for(var d in o)d!==t&&(a[d]=n[t][d](a[t]));return!0},o.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},o.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{"chartjs-color-string":1,"color-convert":4}],3:[function(t,e,i){function n(t){var e,i,n,a=t[0]/255,o=t[1]/255,r=t[2]/255,s=Math.min(a,o,r),l=Math.max(a,o,r),h=l-s;return l==s?e=0:a==l?e=(o-r)/h:o==l?e=2+(r-a)/h:r==l&&(e=4+(a-o)/h),e=Math.min(60*e,360),0>e&&(e+=360),n=(s+l)/2,i=l==s?0:.5>=n?h/(l+s):h/(2-l-s),[e,100*i,100*n]}function a(t){var e,i,n,a=t[0],o=t[1],r=t[2],s=Math.min(a,o,r),l=Math.max(a,o,r),h=l-s;return i=0==l?0:h/l*1e3/10,l==s?e=0:a==l?e=(o-r)/h:o==l?e=2+(r-a)/h:r==l&&(e=4+(a-o)/h),e=Math.min(60*e,360),0>e&&(e+=360),n=l/255*1e3/10,[e,i,n]}function o(t){var e=t[0],i=t[1],a=t[2],o=n(t)[0],r=1/255*Math.min(e,Math.min(i,a)),a=1-1/255*Math.max(e,Math.max(i,a));return[o,100*r,100*a]}function s(t){var e,i,n,a,o=t[0]/255,r=t[1]/255,s=t[2]/255;return a=Math.min(1-o,1-r,1-s),e=(1-o-a)/(1-a)||0,i=(1-r-a)/(1-a)||0,n=(1-s-a)/(1-a)||0,[100*e,100*i,100*n,100*a]}function l(t){return Q[JSON.stringify(t)]}function h(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var a=.4124*e+.3576*i+.1805*n,o=.2126*e+.7152*i+.0722*n,r=.0193*e+.1192*i+.9505*n;return[100*a,100*o,100*r]}function d(t){var e,i,n,a=h(t),o=a[0],r=a[1],s=a[2];return o/=95.047,r/=100,s/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*r-16,i=500*(o-r),n=200*(r-s),[e,i,n]}function u(t){return B(d(t))}function c(t){var e,i,n,a,o,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return o=255*l,[o,o,o];i=.5>l?l*(1+s):l+s-l*s,e=2*l-i,a=[0,0,0];for(var h=0;3>h;h++)n=r+1/3*-(h-1),0>n&&n++,n>1&&n--,o=1>6*n?e+6*(i-e)*n:1>2*n?i:2>3*n?e+(i-e)*(2/3-n)*6:e,a[h]=255*o;return a}function f(t){var e,i,n=t[0],a=t[1]/100,o=t[2]/100;return 0===o?[0,0,0]:(o*=2,a*=1>=o?o:2-o,i=(o+a)/2,e=2*a/(o+a),[n,100*e,100*i])}function m(t){return o(c(t))}function p(t){return s(c(t))}function v(t){return l(c(t))}function y(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),r=255*n*(1-i),s=255*n*(1-i*o),l=255*n*(1-i*(1-o)),n=255*n;switch(a){case 0:return[n,l,r];case 1:return[s,n,r];case 2:return[r,n,l];case 3:return[r,s,n];case 4:return[l,r,n];case 5:return[n,r,s]}}function x(t){var e,i,n=t[0],a=t[1]/100,o=t[2]/100;return i=(2-a)*o,e=a*o,e/=1>=i?i:2-i,e=e||0,i/=2,[n,100*e,100*i]}function k(t){return o(y(t))}function _(t){return s(y(t))}function S(t){return l(y(t))}function w(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,h=s+l;switch(h>1&&(s/=h,l/=h),e=Math.floor(6*o),i=1-l,n=6*o-e,0!=(1&e)&&(n=1-n),a=s+n*(i-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function M(t){return n(w(t))}function C(t){return a(w(t))}function D(t){return s(w(t))}function T(t){return l(w(t))}function P(t){var e,i,n,a=t[0]/100,o=t[1]/100,r=t[2]/100,s=t[3]/100;return e=1-Math.min(1,a*(1-s)+s),i=1-Math.min(1,o*(1-s)+s),n=1-Math.min(1,r*(1-s)+s),[255*e,255*i,255*n]}function A(t){return n(P(t))}function F(t){return a(P(t))}function I(t){return o(P(t))}function O(t){return l(P(t))}function R(t){var e,i,n,a=t[0]/100,o=t[1]/100,r=t[2]/100;return e=3.2406*a+-1.5372*o+r*-.4986,i=a*-.9689+1.8758*o+.0415*r,n=.0557*a+o*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n=12.92*n,e=Math.min(Math.max(0,e),1),i=Math.min(Math.max(0,i),1),n=Math.min(Math.max(0,n),1),[255*e,255*i,255*n]}function W(t){var e,i,n,a=t[0],o=t[1],r=t[2];return a/=95.047,o/=100,r/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*o-16,i=500*(a-o),n=200*(o-r),[e,i,n]}function V(t){return B(W(t))}function L(t){var e,i,n,a,o=t[0],r=t[1],s=t[2];return 8>=o?(i=100*o/903.3,a=7.787*(i/100)+16/116):(i=100*Math.pow((o+16)/116,3),a=Math.pow(i/100,1/3)),e=.008856>=e/95.047?e=95.047*(r/500+a-16/116)/7.787:95.047*Math.pow(r/500+a,3),n=.008859>=n/108.883?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3),[e,i,n]}function B(t){var e,i,n,a=t[0],o=t[1],r=t[2];return e=Math.atan2(r,o),i=360*e/2/Math.PI,0>i&&(i+=360),n=Math.sqrt(o*o+r*r),[a,n,i]}function z(t){return R(L(t))}function Y(t){var e,i,n,a=t[0],o=t[1],r=t[2];return n=r/360*2*Math.PI,e=o*Math.cos(n),i=o*Math.sin(n),[a,e,i]}function H(t){return L(Y(t))}function N(t){return z(Y(t))}function E(t){return X[t]}function U(t){return n(E(t))}function j(t){return a(E(t))}function G(t){return o(E(t))}function q(t){return s(E(t))}function Z(t){return d(E(t))}function J(t){return h(E(t))}e.exports={rgb2hsl:n,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:h,rgb2lab:d,rgb2lch:u,hsl2rgb:c,hsl2hsv:f,hsl2hwb:m,hsl2cmyk:p,hsl2keyword:v,hsv2rgb:y,hsv2hsl:x,hsv2hwb:k,hsv2cmyk:_,hsv2keyword:S,hwb2rgb:w,hwb2hsl:M,hwb2hsv:C,hwb2cmyk:D,hwb2keyword:T,cmyk2rgb:P,cmyk2hsl:A,cmyk2hsv:F,cmyk2hwb:I,cmyk2keyword:O,keyword2rgb:E,keyword2hsl:U,keyword2hsv:j,keyword2hwb:G,keyword2cmyk:q,keyword2lab:Z,keyword2xyz:J,xyz2rgb:R,xyz2lab:W,xyz2lch:V,lab2xyz:L,lab2rgb:z,lab2lch:B,lch2lab:Y,lch2xyz:H,lch2rgb:N};var X={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Q={};for(var $ in X)Q[JSON.stringify(X[$])]=$},{}],4:[function(t,e,i){var n=t("./conversions"),a=function(){return new h};for(var o in n){a[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),n[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),s=r[1],l=r[2];a[s]=a[s]||{},a[s][l]=a[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=n[t](e);if("string"==typeof i||void 0===i)return i;for(var a=0;a<i.length;a++)i[a]=Math.round(i[a]);return i}}(o)}var h=function(){this.convs={}};h.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},h.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},h.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=a[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){h.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{"./conversions":3}],5:[function(t,e,i){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],6:[function(t,e,i){!function(t,n){"object"==typeof i&&"undefined"!=typeof e?e.exports=n():"function"==typeof define&&define.amd?define(n):t.moment=n()}(this,function(){"use strict";function i(){return ln.apply(null,arguments)}function n(t){ln=t}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function o(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function r(t,e){var i,n=[];for(i=0;i<t.length;++i)n.push(e(t[i],i));return n}function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function l(t,e){for(var i in e)s(e,i)&&(t[i]=e[i]);return s(e,"toString")&&(t.toString=e.toString),s(e,"valueOf")&&(t.valueOf=e.valueOf),t}function h(t,e,i,n){return Lt(t,e,i,n,!0).utc()}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function u(t){return null==t._pf&&(t._pf=d()),t._pf}function c(t){if(null==t._isValid){var e=u(t),i=hn.call(e.parsedDateParts,function(t){return null!=t});t._isValid=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&i),t._strict&&(t._isValid=t._isValid&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour)}return t._isValid}function f(t){var e=h(NaN);return null!=t?l(u(e),t):u(e).userInvalidated=!0,e}function g(t){return void 0===t}function m(t,e){var i,n,a;if(g(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),g(e._i)||(t._i=e._i),g(e._f)||(t._f=e._f),g(e._l)||(t._l=e._l),g(e._strict)||(t._strict=e._strict),g(e._tzm)||(t._tzm=e._tzm),g(e._isUTC)||(t._isUTC=e._isUTC),g(e._offset)||(t._offset=e._offset),g(e._pf)||(t._pf=u(e)),g(e._locale)||(t._locale=e._locale),dn.length>0)for(i in dn)n=dn[i],a=e[n],g(a)||(t[n]=a);return t}function p(t){m(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),un===!1&&(un=!0,i.updateOffset(this),un=!1)}function b(t){return t instanceof p||null!=t&&null!=t._isAMomentObject}function v(t){return 0>t?Math.ceil(t):Math.floor(t)}function y(t){var e=+t,i=0;return 0!==e&&isFinite(e)&&(i=v(e)),i}function x(t,e,i){var n,a=Math.min(t.length,e.length),o=Math.abs(t.length-e.length),r=0;for(n=0;a>n;n++)(i&&t[n]!==e[n]||!i&&y(t[n])!==y(e[n]))&&r++;return r+o}function k(t){i.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function _(t,e){var n=!0;return l(function(){return null!=i.deprecationHandler&&i.deprecationHandler(null,t),n&&(k(t+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),n=!1),e.apply(this,arguments)},e)}function S(t,e){null!=i.deprecationHandler&&i.deprecationHandler(t,e),cn[t]||(k(e),cn[t]=!0)}function w(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function M(t){return"[object Object]"===Object.prototype.toString.call(t)}function C(t){var e,i;for(i in t)e=t[i],w(e)?this[i]=e:this["_"+i]=e;this._config=t,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function D(t,e){var i,n=l({},t);for(i in e)s(e,i)&&(M(t[i])&&M(e[i])?(n[i]={},l(n[i],t[i]),l(n[i],e[i])):null!=e[i]?n[i]=e[i]:delete n[i]);return n}function T(t){null!=t&&this.set(t)}function P(t){return t?t.toLowerCase().replace("_","-"):t}function A(t){for(var e,i,n,a,o=0;o<t.length;){for(a=P(t[o]).split("-"),e=a.length,i=P(t[o+1]),i=i?i.split("-"):null;e>0;){if(n=F(a.slice(0,e).join("-")))return n;if(i&&i.length>=e&&x(a,i,!0)>=e-1)break;e--}o++}return null}function F(i){var n=null;if(!pn[i]&&"undefined"!=typeof e&&e&&e.exports)try{n=gn._abbr,t("./locale/"+i),I(n)}catch(a){}return pn[i]}function I(t,e){var i;return t&&(i=g(e)?W(t):O(t,e),i&&(gn=i)),gn._abbr}function O(t,e){return null!==e?(e.abbr=t,null!=pn[t]?(S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),e=D(pn[t]._config,e)):null!=e.parentLocale&&(null!=pn[e.parentLocale]?e=D(pn[e.parentLocale]._config,e):S("parentLocaleUndefined","specified parentLocale is not defined yet")),pn[t]=new T(e),I(t),pn[t]):(delete pn[t],null)}function R(t,e){if(null!=e){var i;null!=pn[t]&&(e=D(pn[t]._config,e)),i=new T(e),i.parentLocale=pn[t],pn[t]=i,I(t)}else null!=pn[t]&&(null!=pn[t].parentLocale?pn[t]=pn[t].parentLocale:null!=pn[t]&&delete pn[t]);return pn[t]}function W(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return gn;if(!a(t)){if(e=F(t))return e;t=[t]}return A(t)}function V(){return fn(pn)}function L(t,e){var i=t.toLowerCase();bn[i]=bn[i+"s"]=bn[e]=t}function B(t){return"string"==typeof t?bn[t]||bn[t.toLowerCase()]:void 0}function z(t){var e,i,n={};for(i in t)s(t,i)&&(e=B(i),e&&(n[e]=t[i]));return n}function Y(t,e){return function(n){return null!=n?(N(this,t,n),i.updateOffset(this,e),this):H(this,t)}}function H(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function N(t,e,i){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](i)}function E(t,e){var i;if("object"==typeof t)for(i in t)this.set(i,t[i]);else if(t=B(t),w(this[t]))return this[t](e);return this}function U(t,e,i){var n=""+Math.abs(t),a=e-n.length,o=t>=0;return(o?i?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+n}function j(t,e,i,n){var a=n;"string"==typeof n&&(a=function(){return this[n]()}),t&&(kn[t]=a),e&&(kn[e[0]]=function(){return U(a.apply(this,arguments),e[1],e[2])}),i&&(kn[i]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function G(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function q(t){var e,i,n=t.match(vn);for(e=0,i=n.length;i>e;e++)kn[n[e]]?n[e]=kn[n[e]]:n[e]=G(n[e]);return function(e){var a,o="";for(a=0;i>a;a++)o+=n[a]instanceof Function?n[a].call(e,t):n[a];return o}}function Z(t,e){return t.isValid()?(e=J(e,t.localeData()),xn[e]=xn[e]||q(e),xn[e](t)):t.localeData().invalidDate()}function J(t,e){function i(t){return e.longDateFormat(t)||t}var n=5;for(yn.lastIndex=0;n>=0&&yn.test(t);)t=t.replace(yn,i),yn.lastIndex=0,n-=1;return t}function X(t,e,i){zn[t]=w(e)?e:function(t,n){return t&&i?i:e}}function Q(t,e){return s(zn,t)?zn[t](e._strict,e._locale):new RegExp($(t))}function $(t){return K(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,i,n,a){return e||i||n||a}))}function K(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function tt(t,e){var i,n=e;for("string"==typeof t&&(t=[t]),"number"==typeof e&&(n=function(t,i){i[e]=y(t)}),i=0;i<t.length;i++)Yn[t[i]]=n}function et(t,e){tt(t,function(t,i,n,a){n._w=n._w||{},e(t,n._w,n,a)})}function it(t,e,i){null!=e&&s(Yn,t)&&Yn[t](e,i._a,i,t)}function nt(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function at(t,e){return a(this._months)?this._months[t.month()]:this._months[Xn.test(e)?"format":"standalone"][t.month()]}function ot(t,e){return a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Xn.test(e)?"format":"standalone"][t.month()]}function rt(t,e,i){var n,a,o,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;12>n;++n)o=h([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(o,"").toLocaleLowerCase();return i?"MMM"===e?(a=mn.call(this._shortMonthsParse,r),-1!==a?a:null):(a=mn.call(this._longMonthsParse,r),-1!==a?a:null):"MMM"===e?(a=mn.call(this._shortMonthsParse,r),-1!==a?a:(a=mn.call(this._longMonthsParse,r),-1!==a?a:null)):(a=mn.call(this._longMonthsParse,r),-1!==a?a:(a=mn.call(this._shortMonthsParse,r),-1!==a?a:null))}function st(t,e,i){var n,a,o;if(this._monthsParseExact)return rt.call(this,t,e,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;12>n;n++){if(a=h([2e3,n]),i&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),i||this._monthsParse[n]||(o="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[n]=new RegExp(o.replace(".",""),"i")),i&&"MMMM"===e&&this._longMonthsParse[n].test(t))return n;if(i&&"MMM"===e&&this._shortMonthsParse[n].test(t))return n;if(!i&&this._monthsParse[n].test(t))return n}}function lt(t,e){var i;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=y(e);else if(e=t.localeData().monthsParse(e),"number"!=typeof e)return t;return i=Math.min(t.date(),nt(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,i),t}function ht(t){return null!=t?(lt(this,t),i.updateOffset(this,!0),this):H(this,"Month")}function dt(){
return nt(this.year(),this.month())}function ut(t){return this._monthsParseExact?(s(this,"_monthsRegex")||ft.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex}function ct(t){return this._monthsParseExact?(s(this,"_monthsRegex")||ft.call(this),t?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex}function ft(){function t(t,e){return e.length-t.length}var e,i,n=[],a=[],o=[];for(e=0;12>e;e++)i=h([2e3,e]),n.push(this.monthsShort(i,"")),a.push(this.months(i,"")),o.push(this.months(i,"")),o.push(this.monthsShort(i,""));for(n.sort(t),a.sort(t),o.sort(t),e=0;12>e;e++)n[e]=K(n[e]),a[e]=K(a[e]),o[e]=K(o[e]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function gt(t){var e,i=t._a;return i&&-2===u(t).overflow&&(e=i[Nn]<0||i[Nn]>11?Nn:i[En]<1||i[En]>nt(i[Hn],i[Nn])?En:i[Un]<0||i[Un]>24||24===i[Un]&&(0!==i[jn]||0!==i[Gn]||0!==i[qn])?Un:i[jn]<0||i[jn]>59?jn:i[Gn]<0||i[Gn]>59?Gn:i[qn]<0||i[qn]>999?qn:-1,u(t)._overflowDayOfYear&&(Hn>e||e>En)&&(e=En),u(t)._overflowWeeks&&-1===e&&(e=Zn),u(t)._overflowWeekday&&-1===e&&(e=Jn),u(t).overflow=e),t}function mt(t){var e,i,n,a,o,r,s=t._i,l=ea.exec(s)||ia.exec(s);if(l){for(u(t).iso=!0,e=0,i=aa.length;i>e;e++)if(aa[e][1].exec(l[1])){a=aa[e][0],n=aa[e][2]!==!1;break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,i=oa.length;i>e;e++)if(oa[e][1].exec(l[3])){o=(l[2]||" ")+oa[e][0];break}if(null==o)return void(t._isValid=!1)}if(!n&&null!=o)return void(t._isValid=!1);if(l[4]){if(!na.exec(l[4]))return void(t._isValid=!1);r="Z"}t._f=a+(o||"")+(r||""),At(t)}else t._isValid=!1}function pt(t){var e=ra.exec(t._i);return null!==e?void(t._d=new Date(+e[1])):(mt(t),void(t._isValid===!1&&(delete t._isValid,i.createFromInputFallback(t))))}function bt(t,e,i,n,a,o,r){var s=new Date(t,e,i,n,a,o,r);return 100>t&&t>=0&&isFinite(s.getFullYear())&&s.setFullYear(t),s}function vt(t){var e=new Date(Date.UTC.apply(null,arguments));return 100>t&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function yt(t){return xt(t)?366:365}function xt(t){return t%4===0&&t%100!==0||t%400===0}function kt(){return xt(this.year())}function _t(t,e,i){var n=7+e-i,a=(7+vt(t,0,n).getUTCDay()-e)%7;return-a+n-1}function St(t,e,i,n,a){var o,r,s=(7+i-n)%7,l=_t(t,n,a),h=1+7*(e-1)+s+l;return 0>=h?(o=t-1,r=yt(o)+h):h>yt(t)?(o=t+1,r=h-yt(t)):(o=t,r=h),{year:o,dayOfYear:r}}function wt(t,e,i){var n,a,o=_t(t.year(),e,i),r=Math.floor((t.dayOfYear()-o-1)/7)+1;return 1>r?(a=t.year()-1,n=r+Mt(a,e,i)):r>Mt(t.year(),e,i)?(n=r-Mt(t.year(),e,i),a=t.year()+1):(a=t.year(),n=r),{week:n,year:a}}function Mt(t,e,i){var n=_t(t,e,i),a=_t(t+1,e,i);return(yt(t)-n+a)/7}function Ct(t,e,i){return null!=t?t:null!=e?e:i}function Dt(t){var e=new Date(i.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Tt(t){var e,i,n,a,o=[];if(!t._d){for(n=Dt(t),t._w&&null==t._a[En]&&null==t._a[Nn]&&Pt(t),t._dayOfYear&&(a=Ct(t._a[Hn],n[Hn]),t._dayOfYear>yt(a)&&(u(t)._overflowDayOfYear=!0),i=vt(a,0,t._dayOfYear),t._a[Nn]=i.getUTCMonth(),t._a[En]=i.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=o[e]=n[e];for(;7>e;e++)t._a[e]=o[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[Un]&&0===t._a[jn]&&0===t._a[Gn]&&0===t._a[qn]&&(t._nextDay=!0,t._a[Un]=0),t._d=(t._useUTC?vt:bt).apply(null,o),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Un]=24)}}function Pt(t){var e,i,n,a,o,r,s,l;e=t._w,null!=e.GG||null!=e.W||null!=e.E?(o=1,r=4,i=Ct(e.GG,t._a[Hn],wt(Bt(),1,4).year),n=Ct(e.W,1),a=Ct(e.E,1),(1>a||a>7)&&(l=!0)):(o=t._locale._week.dow,r=t._locale._week.doy,i=Ct(e.gg,t._a[Hn],wt(Bt(),o,r).year),n=Ct(e.w,1),null!=e.d?(a=e.d,(0>a||a>6)&&(l=!0)):null!=e.e?(a=e.e+o,(e.e<0||e.e>6)&&(l=!0)):a=o),1>n||n>Mt(i,o,r)?u(t)._overflowWeeks=!0:null!=l?u(t)._overflowWeekday=!0:(s=St(i,n,a,o,r),t._a[Hn]=s.year,t._dayOfYear=s.dayOfYear)}function At(t){if(t._f===i.ISO_8601)return void mt(t);t._a=[],u(t).empty=!0;var e,n,a,o,r,s=""+t._i,l=s.length,h=0;for(a=J(t._f,t._locale).match(vn)||[],e=0;e<a.length;e++)o=a[e],n=(s.match(Q(o,t))||[])[0],n&&(r=s.substr(0,s.indexOf(n)),r.length>0&&u(t).unusedInput.push(r),s=s.slice(s.indexOf(n)+n.length),h+=n.length),kn[o]?(n?u(t).empty=!1:u(t).unusedTokens.push(o),it(o,n,t)):t._strict&&!n&&u(t).unusedTokens.push(o);u(t).charsLeftOver=l-h,s.length>0&&u(t).unusedInput.push(s),u(t).bigHour===!0&&t._a[Un]<=12&&t._a[Un]>0&&(u(t).bigHour=void 0),u(t).parsedDateParts=t._a.slice(0),u(t).meridiem=t._meridiem,t._a[Un]=Ft(t._locale,t._a[Un],t._meridiem),Tt(t),gt(t)}function Ft(t,e,i){var n;return null==i?e:null!=t.meridiemHour?t.meridiemHour(e,i):null!=t.isPM?(n=t.isPM(i),n&&12>e&&(e+=12),n||12!==e||(e=0),e):e}function It(t){var e,i,n,a,o;if(0===t._f.length)return u(t).invalidFormat=!0,void(t._d=new Date(NaN));for(a=0;a<t._f.length;a++)o=0,e=m({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],At(e),c(e)&&(o+=u(e).charsLeftOver,o+=10*u(e).unusedTokens.length,u(e).score=o,(null==n||n>o)&&(n=o,i=e));l(t,i||e)}function Ot(t){if(!t._d){var e=z(t._i);t._a=r([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),Tt(t)}}function Rt(t){var e=new p(gt(Wt(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Wt(t){var e=t._i,i=t._f;return t._locale=t._locale||W(t._l),null===e||void 0===i&&""===e?f({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),b(e)?new p(gt(e)):(a(i)?It(t):i?At(t):o(e)?t._d=e:Vt(t),c(t)||(t._d=null),t))}function Vt(t){var e=t._i;void 0===e?t._d=new Date(i.now()):o(e)?t._d=new Date(e.valueOf()):"string"==typeof e?pt(t):a(e)?(t._a=r(e.slice(0),function(t){return parseInt(t,10)}),Tt(t)):"object"==typeof e?Ot(t):"number"==typeof e?t._d=new Date(e):i.createFromInputFallback(t)}function Lt(t,e,i,n,a){var o={};return"boolean"==typeof i&&(n=i,i=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=a,o._l=i,o._i=t,o._f=e,o._strict=n,Rt(o)}function Bt(t,e,i,n){return Lt(t,e,i,n,!1)}function zt(t,e){var i,n;if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return Bt();for(i=e[0],n=1;n<e.length;++n)(!e[n].isValid()||e[n][t](i))&&(i=e[n]);return i}function Yt(){var t=[].slice.call(arguments,0);return zt("isBefore",t)}function Ht(){var t=[].slice.call(arguments,0);return zt("isAfter",t)}function Nt(t){var e=z(t),i=e.year||0,n=e.quarter||0,a=e.month||0,o=e.week||0,r=e.day||0,s=e.hour||0,l=e.minute||0,h=e.second||0,d=e.millisecond||0;this._milliseconds=+d+1e3*h+6e4*l+1e3*s*60*60,this._days=+r+7*o,this._months=+a+3*n+12*i,this._data={},this._locale=W(),this._bubble()}function Et(t){return t instanceof Nt}function Ut(t,e){j(t,0,0,function(){var t=this.utcOffset(),i="+";return 0>t&&(t=-t,i="-"),i+U(~~(t/60),2)+e+U(~~t%60,2)})}function jt(t,e){var i=(e||"").match(t)||[],n=i[i.length-1]||[],a=(n+"").match(ua)||["-",0,0],o=+(60*a[1])+y(a[2]);return"+"===a[0]?o:-o}function Gt(t,e){var n,a;return e._isUTC?(n=e.clone(),a=(b(t)||o(t)?t.valueOf():Bt(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+a),i.updateOffset(n,!1),n):Bt(t).local()}function qt(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Zt(t,e){var n,a=this._offset||0;return this.isValid()?null!=t?("string"==typeof t?t=jt(Vn,t):Math.abs(t)<16&&(t=60*t),!this._isUTC&&e&&(n=qt(this)),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),a!==t&&(!e||this._changeInProgress?ue(this,oe(t-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?a:qt(this):null!=t?this:NaN}function Jt(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Xt(t){return this.utcOffset(0,t)}function Qt(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(qt(this),"m")),this}function $t(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(jt(Wn,this._i)),this}function Kt(t){return this.isValid()?(t=t?Bt(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function te(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function ee(){if(!g(this._isDSTShifted))return this._isDSTShifted;var t={};if(m(t,this),t=Wt(t),t._a){var e=t._isUTC?h(t._a):Bt(t._a);this._isDSTShifted=this.isValid()&&x(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function ie(){return this.isValid()?!this._isUTC:!1}function ne(){return this.isValid()?this._isUTC:!1}function ae(){return this.isValid()?this._isUTC&&0===this._offset:!1}function oe(t,e){var i,n,a,o=t,r=null;return Et(t)?o={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(o={},e?o[e]=t:o.milliseconds=t):(r=ca.exec(t))?(i="-"===r[1]?-1:1,o={y:0,d:y(r[En])*i,h:y(r[Un])*i,m:y(r[jn])*i,s:y(r[Gn])*i,ms:y(r[qn])*i}):(r=fa.exec(t))?(i="-"===r[1]?-1:1,o={y:re(r[2],i),M:re(r[3],i),w:re(r[4],i),d:re(r[5],i),h:re(r[6],i),m:re(r[7],i),s:re(r[8],i)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(a=le(Bt(o.from),Bt(o.to)),o={},o.ms=a.milliseconds,o.M=a.months),n=new Nt(o),Et(t)&&s(t,"_locale")&&(n._locale=t._locale),n}function re(t,e){var i=t&&parseFloat(t.replace(",","."));return(isNaN(i)?0:i)*e}function se(t,e){var i={milliseconds:0,months:0};return i.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(i.months,"M").isAfter(e)&&--i.months,i.milliseconds=+e-+t.clone().add(i.months,"M"),i}function le(t,e){var i;return t.isValid()&&e.isValid()?(e=Gt(e,t),t.isBefore(e)?i=se(t,e):(i=se(e,t),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function he(t){return 0>t?-1*Math.round(-1*t):Math.round(t)}function de(t,e){return function(i,n){var a,o;return null===n||isNaN(+n)||(S(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),o=i,i=n,n=o),i="string"==typeof i?+i:i,a=oe(i,n),ue(this,a,t),this}}function ue(t,e,n,a){var o=e._milliseconds,r=he(e._days),s=he(e._months);t.isValid()&&(a=null==a?!0:a,o&&t._d.setTime(t._d.valueOf()+o*n),r&&N(t,"Date",H(t,"Date")+r*n),s&&lt(t,H(t,"Month")+s*n),a&&i.updateOffset(t,r||s))}function ce(t,e){var i=t||Bt(),n=Gt(i,this).startOf("day"),a=this.diff(n,"days",!0),o=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse",r=e&&(w(e[o])?e[o]():e[o]);return this.format(r||this.localeData().calendar(o,this,Bt(i)))}function fe(){return new p(this)}function ge(t,e){var i=b(t)?t:Bt(t);return this.isValid()&&i.isValid()?(e=B(g(e)?"millisecond":e),"millisecond"===e?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(e).valueOf()):!1}function me(t,e){var i=b(t)?t:Bt(t);return this.isValid()&&i.isValid()?(e=B(g(e)?"millisecond":e),"millisecond"===e?this.valueOf()<i.valueOf():this.clone().endOf(e).valueOf()<i.valueOf()):!1}function pe(t,e,i,n){return n=n||"()",("("===n[0]?this.isAfter(t,i):!this.isBefore(t,i))&&(")"===n[1]?this.isBefore(e,i):!this.isAfter(e,i))}function be(t,e){var i,n=b(t)?t:Bt(t);return this.isValid()&&n.isValid()?(e=B(e||"millisecond"),"millisecond"===e?this.valueOf()===n.valueOf():(i=n.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf())):!1}function ve(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function ye(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function xe(t,e,i){var n,a,o,r;return this.isValid()?(n=Gt(t,this),n.isValid()?(a=6e4*(n.utcOffset()-this.utcOffset()),e=B(e),"year"===e||"month"===e||"quarter"===e?(r=ke(this,n),"quarter"===e?r/=3:"year"===e&&(r/=12)):(o=this-n,r="second"===e?o/1e3:"minute"===e?o/6e4:"hour"===e?o/36e5:"day"===e?(o-a)/864e5:"week"===e?(o-a)/6048e5:o),i?r:v(r)):NaN):NaN}function ke(t,e){var i,n,a=12*(e.year()-t.year())+(e.month()-t.month()),o=t.clone().add(a,"months");return 0>e-o?(i=t.clone().add(a-1,"months"),n=(e-o)/(o-i)):(i=t.clone().add(a+1,"months"),n=(e-o)/(i-o)),-(a+n)||0}function _e(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Se(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?w(Date.prototype.toISOString)?this.toDate().toISOString():Z(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Z(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function we(t){t||(t=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var e=Z(this,t);return this.localeData().postformat(e)}function Me(t,e){return this.isValid()&&(b(t)&&t.isValid()||Bt(t).isValid())?oe({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Ce(t){return this.from(Bt(),t)}function De(t,e){return this.isValid()&&(b(t)&&t.isValid()||Bt(t).isValid())?oe({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Te(t){return this.to(Bt(),t)}function Pe(t){var e;return void 0===t?this._locale._abbr:(e=W(t),null!=e&&(this._locale=e),this)}function Ae(){return this._locale}function Fe(t){switch(t=B(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function Ie(t){return t=B(t),void 0===t||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function Oe(){return this._d.valueOf()-6e4*(this._offset||0)}function Re(){return Math.floor(this.valueOf()/1e3)}function We(){return this._offset?new Date(this.valueOf()):this._d}function Ve(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function Le(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Be(){return this.isValid()?this.toISOString():null}function ze(){return c(this)}function Ye(){return l({},u(this))}function He(){return u(this).overflow}function Ne(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ee(t,e){j(0,[t,t.length],0,e)}function Ue(t){return Ze.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function je(t){return Ze.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Ge(){return Mt(this.year(),1,4)}function qe(){var t=this.localeData()._week;return Mt(this.year(),t.dow,t.doy)}function Ze(t,e,i,n,a){var o;return null==t?wt(this,n,a).year:(o=Mt(t,n,a),e>o&&(e=o),Je.call(this,t,e,i,n,a))}function Je(t,e,i,n,a){var o=St(t,e,i,n,a),r=vt(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}function Xe(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Qe(t){return wt(t,this._week.dow,this._week.doy).week}function $e(){return this._week.dow}function Ke(){return this._week.doy}function ti(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function ei(t){var e=wt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function ii(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function ni(t,e){return a(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]}function ai(t){return this._weekdaysShort[t.day()]}function oi(t){return this._weekdaysMin[t.day()]}function ri(t,e,i){var n,a,o,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;7>n;++n)o=h([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(o,"").toLocaleLowerCase();return i?"dddd"===e?(a=mn.call(this._weekdaysParse,r),-1!==a?a:null):"ddd"===e?(a=mn.call(this._shortWeekdaysParse,r),-1!==a?a:null):(a=mn.call(this._minWeekdaysParse,r),-1!==a?a:null):"dddd"===e?(a=mn.call(this._weekdaysParse,r),-1!==a?a:(a=mn.call(this._shortWeekdaysParse,r),-1!==a?a:(a=mn.call(this._minWeekdaysParse,r),-1!==a?a:null))):"ddd"===e?(a=mn.call(this._shortWeekdaysParse,r),-1!==a?a:(a=mn.call(this._weekdaysParse,r),-1!==a?a:(a=mn.call(this._minWeekdaysParse,r),-1!==a?a:null))):(a=mn.call(this._minWeekdaysParse,r),-1!==a?a:(a=mn.call(this._weekdaysParse,r),-1!==a?a:(a=mn.call(this._shortWeekdaysParse,r),-1!==a?a:null)))}function si(t,e,i){var n,a,o;if(this._weekdaysParseExact)return ri.call(this,t,e,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;7>n;n++){if(a=h([2e3,1]).day(n),i&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".",".?")+"$","i")),this._weekdaysParse[n]||(o="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[n]=new RegExp(o.replace(".",""),"i")),i&&"dddd"===e&&this._fullWeekdaysParse[n].test(t))return n;if(i&&"ddd"===e&&this._shortWeekdaysParse[n].test(t))return n;if(i&&"dd"===e&&this._minWeekdaysParse[n].test(t))return n;if(!i&&this._weekdaysParse[n].test(t))return n}}function li(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=ii(t,this.localeData()),this.add(t-e,"d")):e}function hi(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function di(t){return this.isValid()?null==t?this.day()||7:this.day(this.day()%7?t:t-7):null!=t?this:NaN}function ui(t){return this._weekdaysParseExact?(s(this,"_weekdaysRegex")||gi.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex}function ci(t){return this._weekdaysParseExact?(s(this,"_weekdaysRegex")||gi.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}function fi(t){return this._weekdaysParseExact?(s(this,"_weekdaysRegex")||gi.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function gi(){function t(t,e){return e.length-t.length}var e,i,n,a,o,r=[],s=[],l=[],d=[];for(e=0;7>e;e++)i=h([2e3,1]).day(e),n=this.weekdaysMin(i,""),a=this.weekdaysShort(i,""),o=this.weekdays(i,""),r.push(n),s.push(a),l.push(o),d.push(n),d.push(a),d.push(o);for(r.sort(t),s.sort(t),l.sort(t),d.sort(t),e=0;7>e;e++)s[e]=K(s[e]),l[e]=K(l[e]),d[e]=K(d[e]);this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function mi(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function pi(){return this.hours()%12||12}function bi(){return this.hours()||24}function vi(t,e){j(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function yi(t,e){return e._meridiemParse}function xi(t){return"p"===(t+"").toLowerCase().charAt(0)}function ki(t,e,i){return t>11?i?"pm":"PM":i?"am":"AM"}function _i(t,e){e[qn]=y(1e3*("0."+t))}function Si(){return this._isUTC?"UTC":""}function wi(){return this._isUTC?"Coordinated Universal Time":""}function Mi(t){return Bt(1e3*t)}function Ci(){return Bt.apply(null,arguments).parseZone()}function Di(t,e,i){var n=this._calendar[t];return w(n)?n.call(e,i):n}function Ti(t){var e=this._longDateFormat[t],i=this._longDateFormat[t.toUpperCase()];return e||!i?e:(this._longDateFormat[t]=i.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function Pi(){return this._invalidDate}function Ai(t){return this._ordinal.replace("%d",t)}function Fi(t){return t}function Ii(t,e,i,n){var a=this._relativeTime[i];return w(a)?a(t,e,i,n):a.replace(/%d/i,t)}function Oi(t,e){var i=this._relativeTime[t>0?"future":"past"];return w(i)?i(e):i.replace(/%s/i,e)}function Ri(t,e,i,n){var a=W(),o=h().set(n,e);return a[i](o,t)}function Wi(t,e,i){if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return Ri(t,e,i,"month");var n,a=[];for(n=0;12>n;n++)a[n]=Ri(t,n,i,"month");return a}function Vi(t,e,i,n){"boolean"==typeof t?("number"==typeof e&&(i=e,e=void 0),e=e||""):(e=t,i=e,t=!1,"number"==typeof e&&(i=e,e=void 0),e=e||"");var a=W(),o=t?a._week.dow:0;if(null!=i)return Ri(e,(i+o)%7,n,"day");var r,s=[];for(r=0;7>r;r++)s[r]=Ri(e,(r+o)%7,n,"day");return s}function Li(t,e){return Wi(t,e,"months")}function Bi(t,e){return Wi(t,e,"monthsShort")}function zi(t,e,i){return Vi(t,e,i,"weekdays")}function Yi(t,e,i){return Vi(t,e,i,"weekdaysShort")}function Hi(t,e,i){return Vi(t,e,i,"weekdaysMin")}function Ni(){var t=this._data;return this._milliseconds=Ya(this._milliseconds),this._days=Ya(this._days),this._months=Ya(this._months),t.milliseconds=Ya(t.milliseconds),t.seconds=Ya(t.seconds),t.minutes=Ya(t.minutes),t.hours=Ya(t.hours),t.months=Ya(t.months),t.years=Ya(t.years),this}function Ei(t,e,i,n){var a=oe(e,i);return t._milliseconds+=n*a._milliseconds,t._days+=n*a._days,t._months+=n*a._months,t._bubble()}function Ui(t,e){return Ei(this,t,e,1)}function ji(t,e){return Ei(this,t,e,-1)}function Gi(t){return 0>t?Math.floor(t):Math.ceil(t)}function qi(){var t,e,i,n,a,o=this._milliseconds,r=this._days,s=this._months,l=this._data;return o>=0&&r>=0&&s>=0||0>=o&&0>=r&&0>=s||(o+=864e5*Gi(Ji(s)+r),r=0,s=0),l.milliseconds=o%1e3,t=v(o/1e3),l.seconds=t%60,e=v(t/60),l.minutes=e%60,i=v(e/60),l.hours=i%24,r+=v(i/24),a=v(Zi(r)),s+=a,r-=Gi(Ji(a)),n=v(s/12),s%=12,l.days=r,l.months=s,l.years=n,this}function Zi(t){return 4800*t/146097}function Ji(t){return 146097*t/4800}function Xi(t){var e,i,n=this._milliseconds;if(t=B(t),"month"===t||"year"===t)return e=this._days+n/864e5,i=this._months+Zi(e),"month"===t?i:i/12;switch(e=this._days+Math.round(Ji(this._months)),t){case"week":return e/7+n/6048e5;case"day":return e+n/864e5;case"hour":return 24*e+n/36e5;case"minute":return 1440*e+n/6e4;case"second":return 86400*e+n/1e3;case"millisecond":return Math.floor(864e5*e)+n;default:throw new Error("Unknown unit "+t)}}function Qi(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*y(this._months/12)}function $i(t){return function(){return this.as(t)}}function Ki(t){return t=B(t),this[t+"s"]()}function tn(t){return function(){return this._data[t]}}function en(){return v(this.days()/7)}function nn(t,e,i,n,a){return a.relativeTime(e||1,!!i,t,n)}function an(t,e,i){var n=oe(t).abs(),a=io(n.as("s")),o=io(n.as("m")),r=io(n.as("h")),s=io(n.as("d")),l=io(n.as("M")),h=io(n.as("y")),d=a<no.s&&["s",a]||1>=o&&["m"]||o<no.m&&["mm",o]||1>=r&&["h"]||r<no.h&&["hh",r]||1>=s&&["d"]||s<no.d&&["dd",s]||1>=l&&["M"]||l<no.M&&["MM",l]||1>=h&&["y"]||["yy",h];return d[2]=e,d[3]=+t>0,d[4]=i,nn.apply(null,d)}function on(t,e){return void 0===no[t]?!1:void 0===e?no[t]:(no[t]=e,!0)}function rn(t){var e=this.localeData(),i=an(this,!t,e);return t&&(i=e.pastFuture(+this,i)),e.postformat(i)}function sn(){var t,e,i,n=ao(this._milliseconds)/1e3,a=ao(this._days),o=ao(this._months);t=v(n/60),e=v(t/60),n%=60,t%=60,i=v(o/12),o%=12;var r=i,s=o,l=a,h=e,d=t,u=n,c=this.asSeconds();return c?(0>c?"-":"")+"P"+(r?r+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(h||d||u?"T":"")+(h?h+"H":"")+(d?d+"M":"")+(u?u+"S":""):"P0D"}var ln,hn;hn=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),i=e.length>>>0,n=0;i>n;n++)if(n in e&&t.call(this,e[n],n,e))return!0;return!1};var dn=i.momentProperties=[],un=!1,cn={};i.suppressDeprecationWarnings=!1,i.deprecationHandler=null;var fn;fn=Object.keys?Object.keys:function(t){var e,i=[];for(e in t)s(t,e)&&i.push(e);return i};var gn,mn,pn={},bn={},vn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,yn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,xn={},kn={},_n=/\d/,Sn=/\d\d/,wn=/\d{3}/,Mn=/\d{4}/,Cn=/[+-]?\d{6}/,Dn=/\d\d?/,Tn=/\d\d\d\d?/,Pn=/\d\d\d\d\d\d?/,An=/\d{1,3}/,Fn=/\d{1,4}/,In=/[+-]?\d{1,6}/,On=/\d+/,Rn=/[+-]?\d+/,Wn=/Z|[+-]\d\d:?\d\d/gi,Vn=/Z|[+-]\d\d(?::?\d\d)?/gi,Ln=/[+-]?\d+(\.\d{1,3})?/,Bn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,zn={},Yn={},Hn=0,Nn=1,En=2,Un=3,jn=4,Gn=5,qn=6,Zn=7,Jn=8;mn=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},j("M",["MM",2],"Mo",function(){return this.month()+1}),j("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),j("MMMM",0,0,function(t){return this.localeData().months(this,t)}),L("month","M"),X("M",Dn),X("MM",Dn,Sn),X("MMM",function(t,e){return e.monthsShortRegex(t)}),X("MMMM",function(t,e){return e.monthsRegex(t)}),tt(["M","MM"],function(t,e){e[Nn]=y(t)-1}),tt(["MMM","MMMM"],function(t,e,i,n){var a=i._locale.monthsParse(t,n,i._strict);null!=a?e[Nn]=a:u(i).invalidMonth=t});var Xn=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Qn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),$n="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Kn=Bn,ta=Bn,ea=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ia=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,na=/Z|[+-]\d\d(?::?\d\d)?/,aa=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],oa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],ra=/^\/?Date\((\-?\d+)/i;i.createFromInputFallback=_("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),j("Y",0,0,function(){var t=this.year();return 9999>=t?""+t:"+"+t}),j(0,["YY",2],0,function(){return this.year()%100}),j(0,["YYYY",4],0,"year"),j(0,["YYYYY",5],0,"year"),j(0,["YYYYYY",6,!0],0,"year"),L("year","y"),X("Y",Rn),X("YY",Dn,Sn),X("YYYY",Fn,Mn),X("YYYYY",In,Cn),X("YYYYYY",In,Cn),tt(["YYYYY","YYYYYY"],Hn),tt("YYYY",function(t,e){e[Hn]=2===t.length?i.parseTwoDigitYear(t):y(t)}),tt("YY",function(t,e){e[Hn]=i.parseTwoDigitYear(t)}),tt("Y",function(t,e){e[Hn]=parseInt(t,10)}),i.parseTwoDigitYear=function(t){return y(t)+(y(t)>68?1900:2e3)};var sa=Y("FullYear",!0);i.ISO_8601=function(){};var la=_("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var t=Bt.apply(null,arguments);return this.isValid()&&t.isValid()?this>t?this:t:f()}),ha=_("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var t=Bt.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:f()}),da=function(){return Date.now?Date.now():+new Date};Ut("Z",":"),Ut("ZZ",""),X("Z",Vn),X("ZZ",Vn),tt(["Z","ZZ"],function(t,e,i){i._useUTC=!0,i._tzm=jt(Vn,t)});var ua=/([\+\-]|\d\d)/gi;i.updateOffset=function(){};var ca=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,fa=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;oe.fn=Nt.prototype;var ga=de(1,"add"),ma=de(-1,"subtract");i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var pa=_("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});j(0,["gg",2],0,function(){return this.weekYear()%100}),j(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ee("gggg","weekYear"),Ee("ggggg","weekYear"),Ee("GGGG","isoWeekYear"),Ee("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),X("G",Rn),X("g",Rn),X("GG",Dn,Sn),X("gg",Dn,Sn),X("GGGG",Fn,Mn),X("gggg",Fn,Mn),X("GGGGG",In,Cn),X("ggggg",In,Cn),et(["gggg","ggggg","GGGG","GGGGG"],function(t,e,i,n){e[n.substr(0,2)]=y(t)}),et(["gg","GG"],function(t,e,n,a){e[a]=i.parseTwoDigitYear(t)}),j("Q",0,"Qo","quarter"),L("quarter","Q"),X("Q",_n),tt("Q",function(t,e){e[Nn]=3*(y(t)-1)}),j("w",["ww",2],"wo","week"),j("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),X("w",Dn),X("ww",Dn,Sn),X("W",Dn),X("WW",Dn,Sn),et(["w","ww","W","WW"],function(t,e,i,n){e[n.substr(0,1)]=y(t)});var ba={dow:0,doy:6};j("D",["DD",2],"Do","date"),L("date","D"),X("D",Dn),X("DD",Dn,Sn),X("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),tt(["D","DD"],En),tt("Do",function(t,e){e[En]=y(t.match(Dn)[0],10)});var va=Y("Date",!0);j("d",0,"do","day"),j("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),j("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),j("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),j("e",0,0,"weekday"),j("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),X("d",Dn),X("e",Dn),X("E",Dn),X("dd",function(t,e){return e.weekdaysMinRegex(t)}),X("ddd",function(t,e){return e.weekdaysShortRegex(t)}),X("dddd",function(t,e){return e.weekdaysRegex(t)}),et(["dd","ddd","dddd"],function(t,e,i,n){var a=i._locale.weekdaysParse(t,n,i._strict);null!=a?e.d=a:u(i).invalidWeekday=t}),et(["d","e","E"],function(t,e,i,n){e[n]=y(t)});var ya="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),xa="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ka="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),_a=Bn,Sa=Bn,wa=Bn;j("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),X("DDD",An),X("DDDD",wn),tt(["DDD","DDDD"],function(t,e,i){i._dayOfYear=y(t)}),j("H",["HH",2],0,"hour"),j("h",["hh",2],0,pi),j("k",["kk",2],0,bi),j("hmm",0,0,function(){return""+pi.apply(this)+U(this.minutes(),2)}),j("hmmss",0,0,function(){return""+pi.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),j("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),j("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),vi("a",!0),vi("A",!1),L("hour","h"),X("a",yi),X("A",yi),X("H",Dn),X("h",Dn),X("HH",Dn,Sn),X("hh",Dn,Sn),X("hmm",Tn),X("hmmss",Pn),X("Hmm",Tn),X("Hmmss",Pn),tt(["H","HH"],Un),tt(["a","A"],function(t,e,i){i._isPm=i._locale.isPM(t),i._meridiem=t}),tt(["h","hh"],function(t,e,i){e[Un]=y(t),u(i).bigHour=!0}),tt("hmm",function(t,e,i){var n=t.length-2;e[Un]=y(t.substr(0,n)),e[jn]=y(t.substr(n)),u(i).bigHour=!0}),tt("hmmss",function(t,e,i){var n=t.length-4,a=t.length-2;e[Un]=y(t.substr(0,n)),e[jn]=y(t.substr(n,2)),e[Gn]=y(t.substr(a)),
u(i).bigHour=!0}),tt("Hmm",function(t,e,i){var n=t.length-2;e[Un]=y(t.substr(0,n)),e[jn]=y(t.substr(n))}),tt("Hmmss",function(t,e,i){var n=t.length-4,a=t.length-2;e[Un]=y(t.substr(0,n)),e[jn]=y(t.substr(n,2)),e[Gn]=y(t.substr(a))});var Ma=/[ap]\.?m?\.?/i,Ca=Y("Hours",!0);j("m",["mm",2],0,"minute"),L("minute","m"),X("m",Dn),X("mm",Dn,Sn),tt(["m","mm"],jn);var Da=Y("Minutes",!1);j("s",["ss",2],0,"second"),L("second","s"),X("s",Dn),X("ss",Dn,Sn),tt(["s","ss"],Gn);var Ta=Y("Seconds",!1);j("S",0,0,function(){return~~(this.millisecond()/100)}),j(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),j(0,["SSS",3],0,"millisecond"),j(0,["SSSS",4],0,function(){return 10*this.millisecond()}),j(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),j(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),j(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),j(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),j(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),X("S",An,_n),X("SS",An,Sn),X("SSS",An,wn);var Pa;for(Pa="SSSS";Pa.length<=9;Pa+="S")X(Pa,On);for(Pa="S";Pa.length<=9;Pa+="S")tt(Pa,_i);var Aa=Y("Milliseconds",!1);j("z",0,0,"zoneAbbr"),j("zz",0,0,"zoneName");var Fa=p.prototype;Fa.add=ga,Fa.calendar=ce,Fa.clone=fe,Fa.diff=xe,Fa.endOf=Ie,Fa.format=we,Fa.from=Me,Fa.fromNow=Ce,Fa.to=De,Fa.toNow=Te,Fa.get=E,Fa.invalidAt=He,Fa.isAfter=ge,Fa.isBefore=me,Fa.isBetween=pe,Fa.isSame=be,Fa.isSameOrAfter=ve,Fa.isSameOrBefore=ye,Fa.isValid=ze,Fa.lang=pa,Fa.locale=Pe,Fa.localeData=Ae,Fa.max=ha,Fa.min=la,Fa.parsingFlags=Ye,Fa.set=E,Fa.startOf=Fe,Fa.subtract=ma,Fa.toArray=Ve,Fa.toObject=Le,Fa.toDate=We,Fa.toISOString=Se,Fa.toJSON=Be,Fa.toString=_e,Fa.unix=Re,Fa.valueOf=Oe,Fa.creationData=Ne,Fa.year=sa,Fa.isLeapYear=kt,Fa.weekYear=Ue,Fa.isoWeekYear=je,Fa.quarter=Fa.quarters=Xe,Fa.month=ht,Fa.daysInMonth=dt,Fa.week=Fa.weeks=ti,Fa.isoWeek=Fa.isoWeeks=ei,Fa.weeksInYear=qe,Fa.isoWeeksInYear=Ge,Fa.date=va,Fa.day=Fa.days=li,Fa.weekday=hi,Fa.isoWeekday=di,Fa.dayOfYear=mi,Fa.hour=Fa.hours=Ca,Fa.minute=Fa.minutes=Da,Fa.second=Fa.seconds=Ta,Fa.millisecond=Fa.milliseconds=Aa,Fa.utcOffset=Zt,Fa.utc=Xt,Fa.local=Qt,Fa.parseZone=$t,Fa.hasAlignedHourOffset=Kt,Fa.isDST=te,Fa.isDSTShifted=ee,Fa.isLocal=ie,Fa.isUtcOffset=ne,Fa.isUtc=ae,Fa.isUTC=ae,Fa.zoneAbbr=Si,Fa.zoneName=wi,Fa.dates=_("dates accessor is deprecated. Use date instead.",va),Fa.months=_("months accessor is deprecated. Use month instead",ht),Fa.years=_("years accessor is deprecated. Use year instead",sa),Fa.zone=_("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Jt);var Ia=Fa,Oa={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ra={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Wa="Invalid date",Va="%d",La=/\d{1,2}/,Ba={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},za=T.prototype;za._calendar=Oa,za.calendar=Di,za._longDateFormat=Ra,za.longDateFormat=Ti,za._invalidDate=Wa,za.invalidDate=Pi,za._ordinal=Va,za.ordinal=Ai,za._ordinalParse=La,za.preparse=Fi,za.postformat=Fi,za._relativeTime=Ba,za.relativeTime=Ii,za.pastFuture=Oi,za.set=C,za.months=at,za._months=Qn,za.monthsShort=ot,za._monthsShort=$n,za.monthsParse=st,za._monthsRegex=ta,za.monthsRegex=ct,za._monthsShortRegex=Kn,za.monthsShortRegex=ut,za.week=Qe,za._week=ba,za.firstDayOfYear=Ke,za.firstDayOfWeek=$e,za.weekdays=ni,za._weekdays=ya,za.weekdaysMin=oi,za._weekdaysMin=ka,za.weekdaysShort=ai,za._weekdaysShort=xa,za.weekdaysParse=si,za._weekdaysRegex=_a,za.weekdaysRegex=ui,za._weekdaysShortRegex=Sa,za.weekdaysShortRegex=ci,za._weekdaysMinRegex=wa,za.weekdaysMinRegex=fi,za.isPM=xi,za._meridiemParse=Ma,za.meridiem=ki,I("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,i=1===y(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+i}}),i.lang=_("moment.lang is deprecated. Use moment.locale instead.",I),i.langData=_("moment.langData is deprecated. Use moment.localeData instead.",W);var Ya=Math.abs,Ha=$i("ms"),Na=$i("s"),Ea=$i("m"),Ua=$i("h"),ja=$i("d"),Ga=$i("w"),qa=$i("M"),Za=$i("y"),Ja=tn("milliseconds"),Xa=tn("seconds"),Qa=tn("minutes"),$a=tn("hours"),Ka=tn("days"),to=tn("months"),eo=tn("years"),io=Math.round,no={s:45,m:45,h:22,d:26,M:11},ao=Math.abs,oo=Nt.prototype;oo.abs=Ni,oo.add=Ui,oo.subtract=ji,oo.as=Xi,oo.asMilliseconds=Ha,oo.asSeconds=Na,oo.asMinutes=Ea,oo.asHours=Ua,oo.asDays=ja,oo.asWeeks=Ga,oo.asMonths=qa,oo.asYears=Za,oo.valueOf=Qi,oo._bubble=qi,oo.get=Ki,oo.milliseconds=Ja,oo.seconds=Xa,oo.minutes=Qa,oo.hours=$a,oo.days=Ka,oo.weeks=en,oo.months=to,oo.years=eo,oo.humanize=rn,oo.toISOString=sn,oo.toString=sn,oo.toJSON=sn,oo.locale=Pe,oo.localeData=Ae,oo.toIsoString=_("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",sn),oo.lang=pa,j("X",0,0,"unix"),j("x",0,0,"valueOf"),X("x",Rn),X("X",Ln),tt("X",function(t,e,i){i._d=new Date(1e3*parseFloat(t,10))}),tt("x",function(t,e,i){i._d=new Date(y(t))}),i.version="2.13.0",n(Bt),i.fn=Ia,i.min=Yt,i.max=Ht,i.now=da,i.utc=h,i.unix=Mi,i.months=Li,i.isDate=o,i.locale=I,i.invalid=f,i.duration=oe,i.isMoment=b,i.weekdays=zi,i.parseZone=Ci,i.localeData=W,i.isDuration=Et,i.monthsShort=Bi,i.weekdaysMin=Hi,i.defineLocale=O,i.updateLocale=R,i.locales=V,i.weekdaysShort=Yi,i.normalizeUnits=B,i.relativeTimeThreshold=on,i.prototype=Ia;var ro=i;return ro})},{}],7:[function(t,e,i){var n=t("./core/core.js")();t("./core/core.helpers")(n),t("./core/core.element")(n),t("./core/core.animation")(n),t("./core/core.controller")(n),t("./core/core.datasetController")(n),t("./core/core.layoutService")(n),t("./core/core.legend")(n),t("./core/core.plugin.js")(n),t("./core/core.scale")(n),t("./core/core.scaleService")(n),t("./core/core.title")(n),t("./core/core.tooltip")(n),t("./elements/element.arc")(n),t("./elements/element.line")(n),t("./elements/element.point")(n),t("./elements/element.rectangle")(n),t("./scales/scale.category")(n),t("./scales/scale.linear")(n),t("./scales/scale.logarithmic")(n),t("./scales/scale.radialLinear")(n),t("./scales/scale.time")(n),t("./controllers/controller.bar")(n),t("./controllers/controller.bubble")(n),t("./controllers/controller.doughnut")(n),t("./controllers/controller.line")(n),t("./controllers/controller.polarArea")(n),t("./controllers/controller.radar")(n),t("./charts/Chart.Bar")(n),t("./charts/Chart.Bubble")(n),t("./charts/Chart.Doughnut")(n),t("./charts/Chart.Line")(n),t("./charts/Chart.PolarArea")(n),t("./charts/Chart.Radar")(n),t("./charts/Chart.Scatter")(n),window.Chart=e.exports=n},{"./charts/Chart.Bar":8,"./charts/Chart.Bubble":9,"./charts/Chart.Doughnut":10,"./charts/Chart.Line":11,"./charts/Chart.PolarArea":12,"./charts/Chart.Radar":13,"./charts/Chart.Scatter":14,"./controllers/controller.bar":15,"./controllers/controller.bubble":16,"./controllers/controller.doughnut":17,"./controllers/controller.line":18,"./controllers/controller.polarArea":19,"./controllers/controller.radar":20,"./core/core.animation":21,"./core/core.controller":22,"./core/core.datasetController":23,"./core/core.element":24,"./core/core.helpers":25,"./core/core.js":26,"./core/core.layoutService":27,"./core/core.legend":28,"./core/core.plugin.js":29,"./core/core.scale":30,"./core/core.scaleService":31,"./core/core.title":32,"./core/core.tooltip":33,"./elements/element.arc":34,"./elements/element.line":35,"./elements/element.point":36,"./elements/element.rectangle":37,"./scales/scale.category":38,"./scales/scale.linear":39,"./scales/scale.logarithmic":40,"./scales/scale.radialLinear":41,"./scales/scale.time":42}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.options=t.helpers.configMerge({aspectRatio:1},i.options),i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,i){t.DatasetController.prototype.initialize.call(this,e,i),this.getMeta().bar=!0},getBarCount:function(){var t=0;return e.each(this.chart.data.datasets,function(e,i){var n=this.chart.getDatasetMeta(i);n.bar&&this.chart.isDatasetVisible(i)&&++t},this),t},update:function(t){e.each(this.getMeta().data,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,n){var a=this.getMeta(),o=this.getScaleForId(a.xAxisID),r=this.getScaleForId(a.yAxisID),s=r.getBasePixel(),l=this.chart.options.elements.rectangle,h=t.custom||{},d=this.getDataset();e.extend(t,{_xScale:o,_yScale:r,_datasetIndex:this.index,_index:i,_model:{x:this.calculateBarX(i,this.index),y:n?s:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:d.label,base:n?s:this.calculateBarBase(this.index,i),width:this.calculateBarWidth(i),backgroundColor:h.backgroundColor?h.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,i,l.backgroundColor),borderSkipped:h.borderSkipped?h.borderSkipped:l.borderSkipped,borderColor:h.borderColor?h.borderColor:e.getValueAtIndexOrDefault(d.borderColor,i,l.borderColor),borderWidth:h.borderWidth?h.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,i,l.borderWidth)}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),n=this.getScaleForId(i.yAxisID),a=0;if(n.options.stacked){var o=this.chart,r=o.data.datasets,s=r[t].data[e];if(0>s)for(var l=0;t>l;l++){var h=r[l],d=o.getDatasetMeta(l);d.bar&&d.yAxisID===n.id&&o.isDatasetVisible(l)&&(a+=h.data[e]<0?h.data[e]:0)}else for(var u=0;t>u;u++){var c=r[u],f=o.getDatasetMeta(u);f.bar&&f.yAxisID===n.id&&o.isDatasetVisible(u)&&(a+=c.data[e]>0?c.data[e]:0)}return n.getPixelForValue(a)}return n.getBasePixel()},getRuler:function(t){var e,i=this.getMeta(),n=this.getScaleForId(i.xAxisID),a=this.getBarCount();e="category"===n.options.type?n.getPixelForTick(t+1)-n.getPixelForTick(t):n.width/n.ticks.length;var o=e*n.options.categoryPercentage,r=(e-e*n.options.categoryPercentage)/2,s=o/a;if(n.ticks.length!==this.chart.data.labels.length){var l=n.ticks.length/this.chart.data.labels.length;s*=l}var h=s*n.options.barPercentage,d=s-s*n.options.barPercentage;return{datasetCount:a,tickWidth:e,categoryWidth:o,categorySpacing:r,fullBarWidth:s,barWidth:h,barSpacing:d}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID),i=this.getRuler(t);return e.options.stacked?i.categoryWidth:i.barWidth},getBarIndex:function(t){var e,i,n=0;for(i=0;t>i;++i)e=this.chart.getDatasetMeta(i),e.bar&&this.chart.isDatasetVisible(i)&&++n;return n},calculateBarX:function(t,e){var i=this.getMeta(),n=this.getScaleForId(i.xAxisID),a=this.getBarIndex(e),o=this.getRuler(t),r=n.getPixelForValue(null,t,e,this.chart.isCombo);return r-=this.chart.isCombo?o.tickWidth/2:0,n.options.stacked?r+o.categoryWidth/2+o.categorySpacing:r+o.barWidth/2+o.categorySpacing+o.barWidth*a+o.barSpacing/2+o.barSpacing*a},calculateBarY:function(t,e){var i=this.getMeta(),n=this.getScaleForId(i.yAxisID),a=this.getDataset().data[t];if(n.options.stacked){for(var o=0,r=0,s=0;e>s;s++){var l=this.chart.data.datasets[s],h=this.chart.getDatasetMeta(s);h.bar&&h.yAxisID===n.id&&this.chart.isDatasetVisible(s)&&(l.data[t]<0?r+=l.data[t]||0:o+=l.data[t]||0)}return 0>a?n.getPixelForValue(r+a):n.getPixelForValue(o+a)}return n.getPixelForValue(a)},draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){var n=this.getDataset().data[e];null===n||void 0===n||isNaN(n)||t.transition(i).draw()},this)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=t._model;o.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,n,e.getHoverColor(o.backgroundColor)),o.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,n,e.getHoverColor(o.borderColor)),o.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,n,o.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=t._model,r=this.chart.options.elements.rectangle;o.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,n,r.backgroundColor),o.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(i.borderColor,n,r.borderColor),o.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,n,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,i,n,a){var o=this.getMeta(),r=this.getScaleForId(o.xAxisID),s=this.getScaleForId(o.yAxisID),l=r.getBasePixel(),h=t.custom||{},d=this.getDataset(),u=this.chart.options.elements.rectangle;e.extend(t,{_xScale:r,_yScale:s,_datasetIndex:this.index,_index:i,_model:{x:n?l:this.calculateBarX(i,this.index),y:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:d.label,base:n?l:this.calculateBarBase(this.index,i),height:this.calculateBarHeight(i),backgroundColor:h.backgroundColor?h.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,i,u.backgroundColor),borderSkipped:h.borderSkipped?h.borderSkipped:u.borderSkipped,borderColor:h.borderColor?h.borderColor:e.getValueAtIndexOrDefault(d.borderColor,i,u.borderColor),borderWidth:h.borderWidth?h.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,i,u.borderWidth)},draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,i=this._view,n=i.height/2,a=i.y-n,o=i.y+n,r=i.base-(i.base-i.x),s=i.borderWidth/2;i.borderWidth&&(a+=s,o-=s,r+=s),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var l=[[i.base,o],[i.base,a],[r,a],[r,o]],h=["bottom","left","top","right"],d=h.indexOf(i.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var u=1;4>u;u++)e.lineTo.apply(e,t(u));e.fill(),i.borderWidth&&e.stroke()},inRange:function(t,e){var i=this._view,n=!1;return i&&(n=i.x<i.base?e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.x&&t<=i.base:e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.base&&t<=i.x),n}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),n=this.getScaleForId(i.xAxisID),a=0;if(n.options.stacked){var o=this.chart.data.datasets[t].data[e];if(0>o)for(var r=0;t>r;r++){var s=this.chart.data.datasets[r],l=this.chart.getDatasetMeta(r);l.bar&&l.xAxisID===n.id&&this.chart.isDatasetVisible(r)&&(a+=s.data[e]<0?s.data[e]:0)}else for(var h=0;t>h;h++){var d=this.chart.data.datasets[h],u=this.chart.getDatasetMeta(h);u.bar&&u.xAxisID===n.id&&this.chart.isDatasetVisible(h)&&(a+=d.data[e]>0?d.data[e]:0)}return n.getPixelForValue(a)}return n.getBasePixel()},getRuler:function(t){var e,i=this.getMeta(),n=this.getScaleForId(i.yAxisID),a=this.getBarCount();e="category"===n.options.type?n.getPixelForTick(t+1)-n.getPixelForTick(t):n.width/n.ticks.length;var o=e*n.options.categoryPercentage,r=(e-e*n.options.categoryPercentage)/2,s=o/a;if(n.ticks.length!==this.chart.data.labels.length){var l=n.ticks.length/this.chart.data.labels.length;s*=l}var h=s*n.options.barPercentage,d=s-s*n.options.barPercentage;return{datasetCount:a,tickHeight:e,categoryHeight:o,categorySpacing:r,fullBarHeight:s,barHeight:h,barSpacing:d}},calculateBarHeight:function(t){var e=this.getScaleForId(this.getMeta().yAxisID),i=this.getRuler(t);return e.options.stacked?i.categoryHeight:i.barHeight},calculateBarX:function(t,e){var i=this.getMeta(),n=this.getScaleForId(i.xAxisID),a=this.getDataset().data[t];if(n.options.stacked){for(var o=0,r=0,s=0;e>s;s++){var l=this.chart.data.datasets[s],h=this.chart.getDatasetMeta(s);h.bar&&h.xAxisID===n.id&&this.chart.isDatasetVisible(s)&&(l.data[t]<0?r+=l.data[t]||0:o+=l.data[t]||0)}return 0>a?n.getPixelForValue(r+a):n.getPixelForValue(o+a)}return n.getPixelForValue(a)},calculateBarY:function(t,e){var i=this.getMeta(),n=this.getScaleForId(i.yAxisID),a=this.getBarIndex(e),o=this.getRuler(t),r=n.getPixelForValue(null,t,e,this.chart.isCombo);return r-=this.chart.isCombo?o.tickHeight/2:0,n.options.stacked?r+o.categoryHeight/2+o.categorySpacing:r+o.barHeight/2+o.categorySpacing+o.barHeight*a+o.barSpacing/2+o.barSpacing*a}})}},{}],16:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+n.x+", "+n.y+", "+n.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var i=this.getMeta(),n=i.data;e.each(n,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,n){var a=this.getMeta(),o=this.getScaleForId(a.xAxisID),r=this.getScaleForId(a.yAxisID),s=t.custom||{},l=this.getDataset(),h=l.data[i],d=this.chart.options.elements.point;e.extend(t,{_xScale:o,_yScale:r,_datasetIndex:this.index,_index:i,_model:{x:n?o.getPixelForDecimal(.5):o.getPixelForValue(h,i,this.index,this.chart.isCombo),y:n?r.getBasePixel():r.getPixelForValue(h,i,this.index),radius:n?0:s.radius?s.radius:this.getRadius(h),backgroundColor:s.backgroundColor?s.backgroundColor:e.getValueAtIndexOrDefault(l.backgroundColor,i,d.backgroundColor),borderColor:s.borderColor?s.borderColor:e.getValueAtIndexOrDefault(l.borderColor,i,d.borderColor),borderWidth:s.borderWidth?s.borderWidth:e.getValueAtIndexOrDefault(l.borderWidth,i,d.borderWidth),hitRadius:s.hitRadius?s.hitRadius:e.getValueAtIndexOrDefault(l.hitRadius,i,d.hitRadius)}});var u=t._model;u.skip=s.skip?s.skip:isNaN(u.x)||isNaN(u.y),t.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=t._model;o.radius=a.hoverRadius?a.hoverRadius:e.getValueAtIndexOrDefault(i.hoverRadius,n,this.chart.options.elements.point.hoverRadius)+this.getRadius(this.getDataset().data[t._index]),o.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,n,e.getHoverColor(o.backgroundColor)),o.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,n,e.getHoverColor(o.borderColor)),o.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,n,o.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=t._model,r=this.chart.options.elements.point;o.radius=a.radius?a.radius:this.getRadius(i.data[t._index]),o.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,n,r.backgroundColor),o.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(i.borderColor,n,r.borderColor),o.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,n,r.borderWidth)}})}},{}],17:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults;i.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(n,a){var o=t.getDatasetMeta(0),r=i.datasets[0],s=o.data[a],l=s.custom||{},h=e.getValueAtIndexOrDefault,d=t.options.elements.arc,u=l.backgroundColor?l.backgroundColor:h(r.backgroundColor,a,d.backgroundColor),c=l.borderColor?l.borderColor:h(r.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:h(r.borderWidth,a,d.borderWidth);return{text:n,fillStyle:u,strokeStyle:c,lineWidth:f,hidden:isNaN(r.data[a])||o.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var i,n,a,o=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;n>i;++i)a=r.getDatasetMeta(i),a.data[o].hidden=!a.data[o].hidden;r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+e.datasets[t.datasetIndex].data[t.index]}}}},i.pie=e.clone(i.doughnut),e.extend(i.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,i=0;t>i;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var i=this,n=i.chart,a=n.chartArea,o=n.options,r=o.elements.arc,s=a.right-a.left-r.borderWidth,l=a.bottom-a.top-r.borderWidth,h=Math.min(s,l),d={x:0,y:0},u=i.getMeta(),c=o.cutoutPercentage,f=o.circumference;if(f<2*Math.PI){var g=o.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var m=g+f,p={x:Math.cos(g),y:Math.sin(g)},b={x:Math.cos(m),y:Math.sin(m)},v=0>=g&&m>=0||g<=2*Math.PI&&2*Math.PI<=m,y=g<=.5*Math.PI&&.5*Math.PI<=m||g<=2.5*Math.PI&&2.5*Math.PI<=m,x=g<=-Math.PI&&-Math.PI<=m||g<=Math.PI&&Math.PI<=m,k=g<=.5*-Math.PI&&.5*-Math.PI<=m||g<=1.5*Math.PI&&1.5*Math.PI<=m,_=c/100,S={x:x?-1:Math.min(p.x*(p.x<0?1:_),b.x*(b.x<0?1:_)),y:k?-1:Math.min(p.y*(p.y<0?1:_),b.y*(b.y<0?1:_))},w={x:v?1:Math.max(p.x*(p.x>0?1:_),b.x*(b.x>0?1:_)),y:y?1:Math.max(p.y*(p.y>0?1:_),b.y*(b.y>0?1:_))},M={width:.5*(w.x-S.x),height:.5*(w.y-S.y)};h=Math.min(s/M.width,l/M.height),d={x:(w.x+S.x)*-.5,y:(w.y+S.y)*-.5}}n.outerRadius=Math.max(h/2,0),n.innerRadius=Math.max(c?n.outerRadius/100*c:1,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=d.x*n.outerRadius,n.offsetY=d.y*n.outerRadius,u.total=i.calculateTotal(),i.outerRadius=n.outerRadius-n.radiusLength*i.getRingIndex(i.index),i.innerRadius=i.outerRadius-n.radiusLength,e.each(u.data,function(e,n){i.updateElement(e,n,t)})},updateElement:function(t,i,n){var a=this,o=a.chart,r=o.chartArea,s=o.options,l=s.animation,h=s.elements.arc,d=(r.left+r.right)/2,u=(r.top+r.bottom)/2,c=s.rotation,f=s.rotation,g=a.getDataset(),m=n&&l.animateRotate?0:t.hidden?0:a.calculateCircumference(g.data[i])*(s.circumference/(2*Math.PI)),p=n&&l.animateScale?0:a.innerRadius,b=n&&l.animateScale?0:a.outerRadius,v=t.custom||{},y=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:a.index,_index:i,_model:{x:d+o.offsetX,y:u+o.offsetY,startAngle:c,endAngle:f,circumference:m,outerRadius:b,innerRadius:p,label:y(g.label,i,o.data.labels[i])}});var x=t._model;x.backgroundColor=v.backgroundColor?v.backgroundColor:y(g.backgroundColor,i,h.backgroundColor),x.hoverBackgroundColor=v.hoverBackgroundColor?v.hoverBackgroundColor:y(g.hoverBackgroundColor,i,h.hoverBackgroundColor),x.borderWidth=v.borderWidth?v.borderWidth:y(g.borderWidth,i,h.borderWidth),x.borderColor=v.borderColor?v.borderColor:y(g.borderColor,i,h.borderColor),n&&l.animateRotate||(0===i?x.startAngle=s.rotation:x.startAngle=a.getMeta().data[i-1]._model.endAngle,x.endAngle=x.startAngle+x.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,i=this.getDataset(),n=this.getMeta(),a=0;return e.each(n.data,function(e,n){t=i.data[n],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0}})}},{}],18:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.line={showLines:!0,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,addElementAndReset:function(e){var i=this,n=i.chart.options;t.DatasetController.prototype.addElementAndReset.call(i,e),n.showLines&&0!==n.elements.line.tension&&i.updateBezierControlPoints()},update:function(t){var i,n,a,o,r=this,s=r.getMeta(),l=s.dataset,h=s.data||[],d=r.chart.options,u=d.elements.line,c=r.getScaleForId(s.yAxisID);for(d.showLines&&(a=r.getDataset(),o=l.custom||{},void 0!==a.tension&&void 0===a.lineTension&&(a.lineTension=a.tension),l._scale=c,l._datasetIndex=r.index,l._children=h,l._model={tension:o.tension?o.tension:e.getValueOrDefault(a.lineTension,u.tension),backgroundColor:o.backgroundColor?o.backgroundColor:a.backgroundColor||u.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:a.borderWidth||u.borderWidth,borderColor:o.borderColor?o.borderColor:a.borderColor||u.borderColor,borderCapStyle:o.borderCapStyle?o.borderCapStyle:a.borderCapStyle||u.borderCapStyle,borderDash:o.borderDash?o.borderDash:a.borderDash||u.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:a.borderDashOffset||u.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:a.borderJoinStyle||u.borderJoinStyle,fill:o.fill?o.fill:void 0!==a.fill?a.fill:u.fill,scaleTop:c.top,scaleBottom:c.bottom,scaleZero:c.getBasePixel()},l.pivot()),i=0,n=h.length;n>i;++i)r.updateElement(h[i],i,t);d.showLines&&0!==u.tension&&r.updateBezierControlPoints()},getPointBackgroundColor:function(t,i){var n=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),o=t.custom||{};return o.backgroundColor?n=o.backgroundColor:a.pointBackgroundColor?n=e.getValueAtIndexOrDefault(a.pointBackgroundColor,i,n):a.backgroundColor&&(n=a.backgroundColor),n},getPointBorderColor:function(t,i){var n=this.chart.options.elements.point.borderColor,a=this.getDataset(),o=t.custom||{};return o.borderColor?n=o.borderColor:a.pointBorderColor?n=e.getValueAtIndexOrDefault(a.pointBorderColor,i,n):a.borderColor&&(n=a.borderColor),n},getPointBorderWidth:function(t,i){var n=this.chart.options.elements.point.borderWidth,a=this.getDataset(),o=t.custom||{};return o.borderWidth?n=o.borderWidth:a.pointBorderWidth?n=e.getValueAtIndexOrDefault(a.pointBorderWidth,i,n):a.borderWidth&&(n=a.borderWidth),n},updateElement:function(t,i,n){var a,o,r=this,s=r.getMeta(),l=t.custom||{},h=r.getDataset(),d=r.index,u=h.data[i],c=r.getScaleForId(s.yAxisID),f=r.getScaleForId(s.xAxisID),g=r.chart.options.elements.point;void 0!==h.radius&&void 0===h.pointRadius&&(h.pointRadius=h.radius),void 0!==h.hitRadius&&void 0===h.pointHitRadius&&(h.pointHitRadius=h.hitRadius),a=f.getPixelForValue(u,i,d,r.chart.isCombo),o=n?c.getBasePixel():r.calculatePointY(u,i,d,r.chart.isCombo),t._xScale=f,t._yScale=c,t._datasetIndex=d,t._index=i,t._model={x:a,y:o,skip:l.skip||isNaN(a)||isNaN(o),radius:l.radius||e.getValueAtIndexOrDefault(h.pointRadius,i,g.radius),pointStyle:l.pointStyle||e.getValueAtIndexOrDefault(h.pointStyle,i,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,i),borderColor:r.getPointBorderColor(t,i),borderWidth:r.getPointBorderWidth(t,i),tension:s.dataset._model?s.dataset._model.tension:0,hitRadius:l.hitRadius||e.getValueAtIndexOrDefault(h.pointHitRadius,i,g.hitRadius)}},calculatePointY:function(t,e,i,n){var a,o,r,s=this,l=s.chart,h=s.getMeta(),d=s.getScaleForId(h.yAxisID),u=0,c=0;if(d.options.stacked){for(a=0;i>a;a++)o=l.data.datasets[a],r=l.getDatasetMeta(a),"line"===r.type&&l.isDatasetVisible(a)&&(o.data[e]<0?c+=o.data[e]||0:u+=o.data[e]||0);return 0>t?d.getPixelForValue(c+t):d.getPixelForValue(u+t)}return d.getPixelForValue(t)},updateBezierControlPoints:function(){var t,i,n,a,o,r=this.getMeta(),s=this.chart.chartArea,l=r.data||[];for(t=0,i=l.length;i>t;++t)n=l[t],a=n._model,o=e.splineCurve(e.previousItem(l,t)._model,a,e.nextItem(l,t)._model,r.dataset._model.tension),a.controlPointPreviousX=Math.max(Math.min(o.previous.x,s.right),s.left),a.controlPointPreviousY=Math.max(Math.min(o.previous.y,s.bottom),s.top),a.controlPointNextX=Math.max(Math.min(o.next.x,s.right),s.left),a.controlPointNextY=Math.max(Math.min(o.next.y,s.bottom),s.top),n.pivot()},draw:function(t){var e,i,n=this.getMeta(),a=n.data||[],o=t||1;for(e=0,i=a.length;i>e;++e)a[e].transition(o);for(this.chart.options.showLines&&n.dataset.transition(o).draw(),e=0,i=a.length;i>e;++e)a[e].draw()},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=t._model;o.radius=a.hoverRadius||e.getValueAtIndexOrDefault(i.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),o.backgroundColor=a.hoverBackgroundColor||e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,n,e.getHoverColor(o.backgroundColor)),o.borderColor=a.hoverBorderColor||e.getValueAtIndexOrDefault(i.pointHoverBorderColor,n,e.getHoverColor(o.borderColor)),o.borderWidth=a.hoverBorderWidth||e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,n,o.borderWidth)},removeHoverStyle:function(t){var i=this,n=i.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=t._model;void 0!==n.radius&&void 0===n.pointRadius&&(n.pointRadius=n.radius),r.radius=o.radius||e.getValueAtIndexOrDefault(n.pointRadius,a,i.chart.options.elements.point.radius),r.backgroundColor=i.getPointBackgroundColor(t,a),r.borderColor=i.getPointBorderColor(t,a),r.borderWidth=i.getPointBorderWidth(t,a)}})}},{}],19:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0},animation:{animateRotate:!0,animateScale:!0},aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'">'),a[o]&&e.push(a[o]),e.push("</span></li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(n,a){var o=t.getDatasetMeta(0),r=i.datasets[0],s=o.data[a],l=s.custom||{},h=e.getValueAtIndexOrDefault,d=t.options.elements.arc,u=l.backgroundColor?l.backgroundColor:h(r.backgroundColor,a,d.backgroundColor),c=l.borderColor?l.borderColor:h(r.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:h(r.borderWidth,a,d.borderWidth);
return{text:n,fillStyle:u,strokeStyle:c,lineWidth:f,hidden:isNaN(r.data[a])||o.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var i,n,a,o=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;n>i;++i)a=r.getDatasetMeta(i),a.data[o].hidden=!a.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var i=this,n=i.chart,a=n.chartArea,o=this.getMeta(),r=n.options,s=r.elements.arc,l=Math.min(a.right-a.left,a.bottom-a.top);n.outerRadius=Math.max((l-s.borderWidth/2)/2,0),n.innerRadius=Math.max(r.cutoutPercentage?n.outerRadius/100*r.cutoutPercentage:1,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),i.outerRadius=n.outerRadius-n.radiusLength*i.index,i.innerRadius=i.outerRadius-n.radiusLength,o.count=i.countVisibleElements(),e.each(o.data,function(e,n){i.updateElement(e,n,t)})},updateElement:function(t,i,n){for(var a=this,o=a.chart,r=o.chartArea,s=a.getDataset(),l=o.options,h=l.animation,d=l.elements.arc,u=t.custom||{},c=o.scale,f=e.getValueAtIndexOrDefault,g=o.data.labels,m=a.calculateCircumference(s.data[i]),p=(r.left+r.right)/2,b=(r.top+r.bottom)/2,v=0,y=a.getMeta(),x=0;i>x;++x)isNaN(s.data[x])||y.data[x].hidden||++v;var k=t.hidden?0:c.getDistanceFromCenterForValue(s.data[i]),_=-.5*Math.PI+m*v,S=_+(t.hidden?0:m),w={x:p,y:b,innerRadius:0,outerRadius:h.animateScale?0:c.getDistanceFromCenterForValue(s.data[i]),startAngle:h.animateRotate?Math.PI*-.5:_,endAngle:h.animateRotate?Math.PI*-.5:S,backgroundColor:u.backgroundColor?u.backgroundColor:f(s.backgroundColor,i,d.backgroundColor),borderWidth:u.borderWidth?u.borderWidth:f(s.borderWidth,i,d.borderWidth),borderColor:u.borderColor?u.borderColor:f(s.borderColor,i,d.borderColor),label:f(g,i,g[i])};e.extend(t,{_datasetIndex:a.index,_index:i,_scale:c,_model:n?w:{x:p,y:b,innerRadius:0,outerRadius:k,startAngle:_,endAngle:S,backgroundColor:u.backgroundColor?u.backgroundColor:f(s.backgroundColor,i,d.backgroundColor),borderWidth:u.borderWidth?u.borderWidth:f(s.borderWidth,i,d.borderWidth),borderColor:u.borderColor?u.borderColor:f(s.borderColor,i,d.borderColor),label:f(g,i,g[i])}}),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),i=this.getMeta(),n=0;return e.each(i.data,function(e,i){isNaN(t.data[i])||e.hidden||n++}),n},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,addElementAndReset:function(e){t.DatasetController.prototype.addElementAndReset.call(this,e),this.updateBezierControlPoints()},update:function(t){var i=this.getMeta(),n=i.dataset,a=i.data,o=n.custom||{},r=this.getDataset(),s=this.chart.options.elements.line,l=this.chart.scale;void 0!==r.tension&&void 0===r.lineTension&&(r.lineTension=r.tension),e.extend(i.dataset,{_datasetIndex:this.index,_children:a,_loop:!0,_model:{tension:o.tension?o.tension:e.getValueOrDefault(r.lineTension,s.tension),backgroundColor:o.backgroundColor?o.backgroundColor:r.backgroundColor||s.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:r.borderWidth||s.borderWidth,borderColor:o.borderColor?o.borderColor:r.borderColor||s.borderColor,fill:o.fill?o.fill:void 0!==r.fill?r.fill:s.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:r.borderCapStyle||s.borderCapStyle,borderDash:o.borderDash?o.borderDash:r.borderDash||s.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:r.borderDashOffset||s.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:r.borderJoinStyle||s.borderJoinStyle,scaleTop:l.top,scaleBottom:l.bottom,scaleZero:l.getBasePosition()}}),i.dataset.pivot(),e.each(a,function(e,i){this.updateElement(e,i,t)},this),this.updateBezierControlPoints()},updateElement:function(t,i,n){var a=t.custom||{},o=this.getDataset(),r=this.chart.scale,s=this.chart.options.elements.point,l=r.getPointPositionForValue(i,o.data[i]);e.extend(t,{_datasetIndex:this.index,_index:i,_scale:r,_model:{x:n?r.xCenter:l.x,y:n?r.yCenter:l.y,tension:a.tension?a.tension:e.getValueOrDefault(o.tension,this.chart.options.elements.line.tension),radius:a.radius?a.radius:e.getValueAtIndexOrDefault(o.pointRadius,i,s.radius),backgroundColor:a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(o.pointBackgroundColor,i,s.backgroundColor),borderColor:a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(o.pointBorderColor,i,s.borderColor),borderWidth:a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(o.pointBorderWidth,i,s.borderWidth),pointStyle:a.pointStyle?a.pointStyle:e.getValueAtIndexOrDefault(o.pointStyle,i,s.pointStyle),hitRadius:a.hitRadius?a.hitRadius:e.getValueAtIndexOrDefault(o.hitRadius,i,s.hitRadius)}}),t._model.skip=a.skip?a.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,i=this.getMeta();e.each(i.data,function(n,a){var o=n._model,r=e.splineCurve(e.previousItem(i.data,a,!0)._model,o,e.nextItem(i.data,a,!0)._model,o.tension);o.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),o.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),o.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),o.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),n.pivot()},this)},draw:function(t){var i=this.getMeta(),n=t||1;e.each(i.data,function(t,e){t.transition(n)}),i.dataset.transition(n).draw(),e.each(i.data,function(t){t.draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},a=t._index,o=t._model;o.radius=n.hoverRadius?n.hoverRadius:e.getValueAtIndexOrDefault(i.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),o.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,a,e.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor?n.hoverBorderColor:e.getValueAtIndexOrDefault(i.pointHoverBorderColor,a,e.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,a,o.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},a=t._index,o=t._model,r=this.chart.options.elements.point;o.radius=n.radius?n.radius:e.getValueAtIndexOrDefault(i.radius,a,r.radius),o.backgroundColor=n.backgroundColor?n.backgroundColor:e.getValueAtIndexOrDefault(i.pointBackgroundColor,a,r.backgroundColor),o.borderColor=n.borderColor?n.borderColor:e.getValueAtIndexOrDefault(i.pointBorderColor,a,r.borderColor),o.borderWidth=n.borderWidth?n.borderWidth:e.getValueAtIndexOrDefault(i.pointBorderWidth,a,r.borderWidth)}})}},{}],21:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,n){n||(t.animating=!0);for(var a=0;a<this.animations.length;++a)if(this.animations[a].chartInstance===t)return void(this.animations[a].animationObject=e);this.animations.push({chartInstance:t,animationObject:e}),1===this.animations.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var i=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==i&&(this.animations.splice(i,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=Date.now(),e=0;this.dropFrames>1&&(e=Math.floor(this.dropFrames),this.dropFrames=this.dropFrames%1);for(var i=0;i<this.animations.length;)null===this.animations[i].animationObject.currentStep&&(this.animations[i].animationObject.currentStep=0),this.animations[i].animationObject.currentStep+=1+e,this.animations[i].animationObject.currentStep>this.animations[i].animationObject.numSteps&&(this.animations[i].animationObject.currentStep=this.animations[i].animationObject.numSteps),this.animations[i].animationObject.render(this.animations[i].chartInstance,this.animations[i].animationObject),this.animations[i].animationObject.onAnimationProgress&&this.animations[i].animationObject.onAnimationProgress.call&&this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].animationObject.currentStep===this.animations[i].animationObject.numSteps?(this.animations[i].animationObject.onAnimationComplete&&this.animations[i].animationObject.onAnimationComplete.call&&this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].chartInstance.animating=!1,this.animations.splice(i,1)):++i;var n=Date.now(),a=(n-t)/this.frameDuration;this.dropFrames+=a,this.animations.length>0&&this.requestAnimationFrame()}}}},{}],22:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(i){return this.chart=i,this.config=i.config,this.options=this.config.options=e.configMerge(t.defaults.global,t.defaults[this.config.type],this.config.options||{}),this.id=e.uid(),Object.defineProperty(this,"data",{get:function(){return this.config.data}}),t.instances[this.id]=this,this.options.responsive&&this.resize(!0),this.initialize(),this},e.extend(t.Controller.prototype,{initialize:function(){return t.pluginService.notifyPlugins("beforeInit",[this]),this.bindEvents(),this.ensureScalesHaveIDs(),this.buildOrUpdateControllers(),this.buildScales(),this.buildSurroundingItems(),this.updateLayout(),this.resetElements(),this.initToolTip(),this.update(),t.pluginService.notifyPlugins("afterInit",[this]),this},clear:function(){return e.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var i=this.chart.canvas,n=e.getMaximumWidth(this.chart.canvas),a=this.options.maintainAspectRatio&&isNaN(this.chart.aspectRatio)===!1&&isFinite(this.chart.aspectRatio)&&0!==this.chart.aspectRatio?n/this.chart.aspectRatio:e.getMaximumHeight(this.chart.canvas),o=this.chart.width!==n||this.chart.height!==a;return o?(i.width=this.chart.width=n,i.height=this.chart.height=a,e.retinaScale(this.chart),t||(this.stop(),this.update(this.options.responsiveAnimationDuration)),this):this},ensureScalesHaveIDs:function(){var t=this.options,i=t.scales||{},n=t.scale;e.each(i.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(i.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var i=this,n=i.options,a=i.scales={},o=[];n.scales&&(o=o.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),n.scale&&o.push({options:n.scale,dtype:"radialLinear",isDefault:!0}),e.each(o,function(n,o){var r=n.options,s=e.getValueOrDefault(r.type,n.dtype),l=t.scaleService.getScaleConstructor(s);if(l){var h=new l({id:r.id,options:r,ctx:i.chart.ctx,chart:i});a[h.id]=h,n.isDefault&&(i.scale=h)}}),t.scaleService.addScalesToLayout(this)},buildSurroundingItems:function(){this.options.title&&(this.titleBlock=new t.Title({ctx:this.chart.ctx,options:this.options.title,chart:this}),t.layoutService.addBox(this,this.titleBlock)),this.options.legend&&(this.legend=new t.Legend({ctx:this.chart.ctx,options:this.options.legend,chart:this}),t.layoutService.addBox(this,this.legend))},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var i=[],n=[];if(e.each(this.data.datasets,function(e,a){var o=this.getDatasetMeta(a);o.type||(o.type=e.type||this.config.type),i.push(o.type),o.controller?o.controller.updateIndex(a):(o.controller=new t.controllers[o.type](this,a),n.push(o.controller))},this),i.length>1)for(var a=1;a<i.length;a++)if(i[a]!==i[a-1]){this.isCombo=!0;break}return n},resetElements:function(){e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.reset()},this)},update:function(i,n){t.pluginService.notifyPlugins("beforeUpdate",[this]),this.tooltip._data=this.data;var a=this.buildOrUpdateControllers();e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.buildOrUpdateElements()},this),t.layoutService.update(this,this.chart.width,this.chart.height),t.pluginService.notifyPlugins("afterScaleUpdate",[this]),e.each(a,function(t){t.reset()}),e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.update()},this),t.pluginService.notifyPlugins("afterUpdate",[this]),this.render(i,n)},render:function(i,n){t.pluginService.notifyPlugins("beforeRender",[this]);var a=this.options.animation;if(a&&("undefined"!=typeof i&&0!==i||"undefined"==typeof i&&0!==a.duration)){var o=new t.Animation;o.numSteps=(i||a.duration)/16.66,o.easing=a.easing,o.render=function(t,i){var n=e.easingEffects[i.easing],a=i.currentStep/i.numSteps,o=n(a);t.draw(o,a,i.currentStep)},o.onAnimationProgress=a.onProgress,o.onAnimationComplete=a.onComplete,t.animationService.addAnimation(this,o,i,n)}else this.draw(),a&&a.onComplete&&a.onComplete.call&&a.onComplete.call(this);return this},draw:function(i){var n=i||1;this.clear(),t.pluginService.notifyPlugins("beforeDraw",[this,n]),e.each(this.boxes,function(t){t.draw(this.chartArea)},this),this.scale&&this.scale.draw();var a=this.chart.ctx;a.save(),a.beginPath(),a.rect(this.chartArea.left,this.chartArea.top,this.chartArea.right-this.chartArea.left,this.chartArea.bottom-this.chartArea.top),a.clip(),e.each(this.data.datasets,function(t,e){this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.draw(i)},this,!0),a.restore(),this.tooltip.transition(n).draw(),t.pluginService.notifyPlugins("afterDraw",[this,n])},getElementAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),n=[];return e.each(this.data.datasets,function(t,a){if(this.isDatasetVisible(a)){var o=this.getDatasetMeta(a);e.each(o.data,function(t,e){return t.inRange(i.x,i.y)?(n.push(t),n):void 0})}},this),n},getElementsAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),n=[],a=function(){if(this.data.datasets)for(var t=0;t<this.data.datasets.length;t++){var e=this.getDatasetMeta(t);if(this.isDatasetVisible(t))for(var n=0;n<e.data.length;n++)if(e.data[n].inRange(i.x,i.y))return e.data[n]}}.call(this);return a?(e.each(this.data.datasets,function(t,e){if(this.isDatasetVisible(e)){var i=this.getDatasetMeta(e);n.push(i.data[a._index])}},this),n):n},getElementsAtEventForMode:function(t,e){var i=this;switch(e){case"single":return i.getElementAtEvent(t);case"label":return i.getElementsAtEvent(t);case"dataset":return i.getDatasetAtEvent(t);default:return t}},getDatasetAtEvent:function(t){var e=this.getElementAtEvent(t);return e.length>0&&(e=this.getDatasetMeta(e[0]._datasetIndex).data),e},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;i>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){this.clear(),e.unbindEvents(this,this.events),e.removeResizeListener(this.chart.canvas.parentNode);var i=this.chart.canvas;i.width=this.chart.width,i.height=this.chart.height,void 0!==this.chart.originalDevicePixelRatio&&this.chart.ctx.scale(1/this.chart.originalDevicePixelRatio,1/this.chart.originalDevicePixelRatio),i.style.width=this.chart.originalCanvasStyleWidth,i.style.height=this.chart.originalCanvasStyleHeight,t.pluginService.notifyPlugins("destroy",[this]),delete t.instances[this.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){this.tooltip=new t.Tooltip({_chart:this.chart,_chartInstance:this,_data:this.data,_options:this.options},this)},bindEvents:function(){e.bindEvents(this,this.options.events,function(t){this.eventHandler(t)})},updateHoverStyle:function(t,e,i){var n,a,o,r=i?"setHoverStyle":"removeHoverStyle";switch(e){case"single":t=[t[0]];break;case"label":case"dataset":break;default:return}for(a=0,o=t.length;o>a;++a)n=t[a],n&&this.getDatasetMeta(n._datasetIndex).controller[r](n)},eventHandler:function(t){var i=this,n=i.tooltip,a=i.options||{},o=a.hover,r=a.tooltips;return i.lastActive=i.lastActive||[],i.lastTooltipActive=i.lastTooltipActive||[],"mouseout"===t.type?(i.active=[],i.tooltipActive=[]):(i.active=i.getElementsAtEventForMode(t,o.mode),i.tooltipActive=i.getElementsAtEventForMode(t,r.mode)),o.onHover&&o.onHover.call(i,i.active),("mouseup"===t.type||"click"===t.type)&&(a.onClick&&a.onClick.call(i,t,i.active),i.legend&&i.legend.handleEvent&&i.legend.handleEvent(t)),i.lastActive.length&&i.updateHoverStyle(i.lastActive,o.mode,!1),i.active.length&&o.mode&&i.updateHoverStyle(i.active,o.mode,!0),(r.enabled||r.custom)&&(n.initialize(),n._active=i.tooltipActive,n.update(!0)),n.pivot(),i.animating||e.arrayEquals(i.active,i.lastActive)&&e.arrayEquals(i.tooltipActive,i.lastTooltipActive)||(i.stop(),(r.enabled||r.custom)&&n.update(!0),i.render(o.animationDuration,!0)),i.lastActive=i.active,i.lastTooltipActive=i.tooltipActive,i}})}},{}],23:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.DatasetController=function(t,e){this.initialize.call(this,t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.getDataset();null===t.xAxisID&&(t.xAxisID=e.xAxisID||this.chart.options.scales.xAxes[0].id),null===t.yAxisID&&(t.yAxisID=e.yAxisID||this.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,i=e.dataElementType;return i&&new i({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,i=this,n=i.getMeta(),a=i.getDataset().data||[],o=n.data;for(t=0,e=a.length;e>t;++t)o[t]=o[t]||i.createMetaData(n,t);n.dataset=n.dataset||i.createMetaDataset()},addElementAndReset:function(t){var e=this,i=e.createMetaData(t);e.getMeta().data.splice(t,0,i),e.updateElement(i,t,!0)},buildOrUpdateElements:function(){var t=this.getMeta(),e=t.data,i=this.getDataset().data.length,n=e.length;if(n>i)e.splice(i,n-i);else if(i>n)for(var a=n;i>a;++a)this.addElementAndReset(a)},update:i,draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){t.transition(i).draw()})},removeHoverStyle:function(t,i){var n=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=e.getValueAtIndexOrDefault,s=(e.color,t._model);s.backgroundColor=o.backgroundColor?o.backgroundColor:r(n.backgroundColor,a,i.backgroundColor),s.borderColor=o.borderColor?o.borderColor:r(n.borderColor,a,i.borderColor),s.borderWidth=o.borderWidth?o.borderWidth:r(n.borderWidth,a,i.borderWidth)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=e.getValueAtIndexOrDefault,r=(e.color,e.getHoverColor),s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:o(i.hoverBackgroundColor,n,r(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:o(i.hoverBorderColor,n,r(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:o(i.hoverBorderWidth,n,s.borderWidth)}}),t.DatasetController.extend=e.inherits}},{}],24:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){return this._view||(this._view=e.clone(this._model)),this._start=e.clone(this._view),this},transition:function(t){return this._view||(this._view=e.clone(this._model)),1===t?(this._view=this._model,this._start=null,this):(this._start||this.pivot(),e.each(this._model,function(i,n){if("_"===n[0]);else if(this._view.hasOwnProperty(n))if(i===this._view[n]);else if("string"==typeof i)try{var a=e.color(this._model[n]).mix(e.color(this._start[n]),t);this._view[n]=a.rgbString()}catch(o){this._view[n]=i}else if("number"==typeof i){var r=void 0!==this._start[n]&&isNaN(this._start[n])===!1?this._start[n]:0;this._view[n]=(this._model[n]-r)*t+r}else this._view[n]=i;else"number"!=typeof i||isNaN(this._view[n])?this._view[n]=i:this._view[n]=i*t},this),this)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],25:[function(t,e,i){"use strict";var n=t("chartjs-color");e.exports=function(t){function e(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!=t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function i(t){return void 0!==t&&null!==t&&"none"!==t}function a(t,n,a){var o=document.defaultView,r=t.parentNode,s=o.getComputedStyle(t)[n],l=o.getComputedStyle(r)[n],h=i(s),d=i(l),u=Number.POSITIVE_INFINITY;return h||d?Math.min(h?e(s,t,a):u,d?e(l,r,a):u):"none"}var o=t.helpers={};o.each=function(t,e,i,n){var a,r;if(o.isArray(t))if(r=t.length,n)for(a=r-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;r>a;a++)e.call(i,t[a],a);else if("object"==typeof t){var s=Object.keys(t);for(r=s.length,a=0;r>a;a++)e.call(i,t[s[a]],s[a])}},o.clone=function(t){var e={};return o.each(t,function(t,i){o.isArray(t)?e[i]=t.slice(0):"object"==typeof t&&null!==t?e[i]=o.clone(t):e[i]=t}),e},o.extend=function(t){for(var e=arguments.length,i=[],n=1;e>n;n++)i.push(arguments[n]);return o.each(i,function(e){o.each(e,function(e,i){t[i]=e})}),t},o.configMerge=function(e){var i=o.clone(e);return o.each(Array.prototype.slice.call(arguments,1),function(e){o.each(e,function(e,n){if("scales"===n)i[n]=o.scaleMerge(i.hasOwnProperty(n)?i[n]:{},e);else if("scale"===n)i[n]=o.configMerge(i.hasOwnProperty(n)?i[n]:{},t.scaleService.getScaleDefaults(e.type),e);else if(i.hasOwnProperty(n)&&o.isArray(i[n])&&o.isArray(e)){var a=i[n];o.each(e,function(t,e){e<a.length?"object"==typeof a[e]&&null!==a[e]&&"object"==typeof t&&null!==t?a[e]=o.configMerge(a[e],t):a[e]=t:a.push(t)})}else i.hasOwnProperty(n)&&"object"==typeof i[n]&&null!==i[n]&&"object"==typeof e?i[n]=o.configMerge(i[n],e):i[n]=e})}),i},o.extendDeep=function(t){function e(t){return o.each(arguments,function(i){i!==t&&o.each(i,function(i,n){t[n]&&t[n].constructor&&t[n].constructor===Object?e(t[n],i):t[n]=i})}),t}return e.apply(this,arguments)},o.scaleMerge=function(e,i){var n=o.clone(e);return o.each(i,function(e,i){"xAxes"===i||"yAxes"===i?n.hasOwnProperty(i)?o.each(e,function(e,a){var r=o.getValueOrDefault(e.type,"xAxes"===i?"category":"linear"),s=t.scaleService.getScaleDefaults(r);a>=n[i].length||!n[i][a].type?n[i].push(o.configMerge(s,e)):e.type&&e.type!==n[i][a].type?n[i][a]=o.configMerge(n[i][a],s,e):n[i][a]=o.configMerge(n[i][a],e)}):(n[i]=[],o.each(e,function(e){var a=o.getValueOrDefault(e.type,"xAxes"===i?"category":"linear");n[i].push(o.configMerge(t.scaleService.getScaleDefaults(a),e))})):n.hasOwnProperty(i)&&"object"==typeof n[i]&&null!==n[i]&&"object"==typeof e?n[i]=o.configMerge(n[i],e):n[i]=e}),n},o.getValueAtIndexOrDefault=function(t,e,i){return void 0===t||null===t?i:o.isArray(t)?e<t.length?t[e]:i:t},o.getValueOrDefault=function(t,e){return void 0===t?e:t},o.indexOf=function(t,e){if(Array.prototype.indexOf)return t.indexOf(e);for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return o.each(t,function(t){e(t)&&i.push(t)}),i},o.findIndex=function(t,e,i){var n=-1;if(Array.prototype.findIndex)n=t.findIndex(e,i);else for(var a=0;a<t.length;++a)if(i=void 0!==i?i:t,e.call(i,t[a],a,t)){n=a;break}return n},o.findNextWhere=function(t,e,i){(void 0===i||null===i)&&(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},o.findPreviousWhere=function(t,e,i){(void 0===i||null===i)&&(i=t.length);for(var n=i-1;n>=0;n--){var a=t[n];if(e(a))return a}},o.inherits=function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=o.inherits,t&&o.extend(i.prototype,t),i.__super__=e.prototype,i},o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.warn=function(t){console&&"function"==typeof console.warn&&console.warn(t)},o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,i){return Math.abs(t-e)<i},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=function(t){return Math.sign?Math.sign(t):(t=+t,0===t||isNaN(t)?t:t>0?1:-1)},o.log10=function(t){return Math.log10?Math.log10(t):Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),o=Math.atan2(n,i);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:a}},o.aliasPixel=function(t){return t%2===0?0:.5},o.splineCurve=function(t,e,i,n){var a=t.skip?e:t,o=e,r=i.skip?e:i,s=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),l=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),h=s/(s+l),d=l/(s+l);h=isNaN(h)?0:h,d=isNaN(d)?0:d;var u=n*h,c=n*d;return{previous:{x:o.x-u*(r.x-a.x),y:o.y-u*(r.y-a.y)},next:{x:o.x+c*(r.x-a.x),y:o.y+c*(r.y-a.y)}}},o.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,i){return i?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},o.niceNum=function(t,e){var i,n=Math.floor(o.log10(t)),a=t/Math.pow(10,n);return i=e?1.5>a?1:3>a?2:7>a?5:10:1>=a?1:2>=a?2:5>=a?5:10,i*Math.pow(10,n)};var r=o.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2===(t/=.5)?1:(i||(i=1*(.3*1.5)),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),1>t?-.5*(n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)):n*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};o.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),o.getRelativePosition=function(t,e){var i,n,a=t.originalEvent||t,r=t.currentTarget||t.srcElement,s=r.getBoundingClientRect(),l=a.touches;l&&l.length>0?(i=l[0].clientX,n=l[0].clientY):(i=a.clientX,n=a.clientY);var h=parseFloat(o.getStyle(r,"padding-left")),d=parseFloat(o.getStyle(r,"padding-top")),u=parseFloat(o.getStyle(r,"padding-right")),c=parseFloat(o.getStyle(r,"padding-bottom")),f=s.right-s.left-h-u,g=s.bottom-s.top-d-c;return i=Math.round((i-s.left-h)/f*r.width/e.currentDevicePixelRatio),n=Math.round((n-s.top-d)/g*r.height/e.currentDevicePixelRatio),{x:i,y:n}},o.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},o.removeEvent=function(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=o.noop},o.bindEvents=function(t,e,i){var n=t.events=t.events||{};o.each(e,function(e){n[e]=function(){i.apply(t,arguments)},o.addEvent(t.chart.canvas,e,n[e])})},o.unbindEvents=function(t,e){var i=t.chart.canvas;o.each(e,function(t,e){o.removeEvent(i,e,t)})},o.getConstraintWidth=function(t){return a(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return a(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode,i=parseInt(o.getStyle(e,"padding-left"))+parseInt(o.getStyle(e,"padding-right")),n=e.clientWidth-i,a=o.getConstraintWidth(t);return isNaN(a)?n:Math.min(n,a)},o.getMaximumHeight=function(t){var e=t.parentNode,i=parseInt(o.getStyle(e,"padding-top"))+parseInt(o.getStyle(e,"padding-bottom")),n=e.clientHeight-i,a=o.getConstraintHeight(t);return isNaN(a)?n:Math.min(n,a)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e);
},o.retinaScale=function(t){var e=t.ctx,i=t.canvas,n=i.width,a=i.height,o=t.currentDevicePixelRatio=window.devicePixelRatio||1;1!==o&&(i.height=a*o,i.width=n*o,e.scale(o,o),t.originalDevicePixelRatio=t.originalDevicePixelRatio||o),i.style.width=n+"px",i.style.height=a+"px"},o.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},o.fontString=function(t,e,i){return e+" "+t+"px "+i},o.longestText=function(t,e,i,n){n=n||{};var a=n.data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},r=n.garbageCollect=[],n.font=e),t.font=e;var s=0;o.each(i,function(e){if(void 0!==e&&null!==e){var i=a[e];i||(i=a[e]=t.measureText(e).width,r.push(e)),i>s&&(s=i)}});var l=r.length/2;if(l>i.length){for(var h=0;l>h;h++)delete a[r[h]];r.splice(0,l)}return s},o.drawRoundedRectangle=function(t,e,i,n,a,o){t.beginPath(),t.moveTo(e+o,i),t.lineTo(e+n-o,i),t.quadraticCurveTo(e+n,i,e+n,i+o),t.lineTo(e+n,i+a-o),t.quadraticCurveTo(e+n,i+a,e+n-o,i+a),t.lineTo(e+o,i+a),t.quadraticCurveTo(e,i+a,e,i+a-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath()},o.color=function(e){return n?n(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.log("Color.js not found!"),e)},o.addResizeListener=function(t,e){var i=document.createElement("iframe"),n="chartjs-hidden-iframe";i.classlist?i.classlist.add(n):i.setAttribute("class",n);var a=i.style;a.width="100%",a.display="block",a.border=0,a.height=0,a.margin=0,a.position="absolute",a.left=0,a.right=0,a.top=0,a.bottom=0,t.insertBefore(i,t.firstChild),(i.contentWindow||i).onresize=function(){e&&e()}},o.removeResizeListener=function(t){var e=t.querySelector(".chartjs-hidden-iframe");e&&e.parentNode.removeChild(e)},o.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},o.arrayEquals=function(t,e){var i,n,a,r;if(!t||!e||t.length!=e.length)return!1;for(i=0,n=t.length;n>i;++i)if(a=t[i],r=e[i],a instanceof Array&&r instanceof Array){if(!o.arrayEquals(a,r))return!1}else if(a!=r)return!1;return!0},o.pushAllIfDefined=function(t,e){"undefined"!=typeof t&&(o.isArray(t)?e.push.apply(e,t):e.push(t))},o.callCallback=function(t,e,i){t&&"function"==typeof t.call&&t.apply(i,e)},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{"chartjs-color":2}],26:[function(t,e,i){"use strict";e.exports=function(){var t=function(e,i){this.config=i,e.length&&e[0].getContext&&(e=e[0]),e.getContext&&(e=e.getContext("2d")),this.ctx=e,this.canvas=e.canvas,this.width=e.canvas.width||parseInt(t.helpers.getStyle(e.canvas,"width"))||t.helpers.getMaximumWidth(e.canvas),this.height=e.canvas.height||parseInt(t.helpers.getStyle(e.canvas,"height"))||t.helpers.getMaximumHeight(e.canvas),this.aspectRatio=this.width/this.height,(isNaN(this.aspectRatio)||isFinite(this.aspectRatio)===!1)&&(this.aspectRatio=void 0!==i.aspectRatio?i.aspectRatio:2),this.originalCanvasStyleWidth=e.canvas.style.width,this.originalCanvasStyleHeight=e.canvas.style.height,t.helpers.retinaScale(this),i&&(this.controller=new t.Controller(this));var n=this;return t.helpers.addResizeListener(e.canvas.parentNode,function(){n.controller&&n.controller.config.options.responsive&&n.controller.resize()}),this.controller?this.controller:this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"single",animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t}},{}],27:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,i,n){function a(t){var e,i=t.isHorizontal();i?(e=t.update(t.options.fullWidth?m:k,x),_-=e.height):(e=t.update(y,v),k-=e.width),S.push({horizontal:i,minSize:e,box:t})}function o(t){var i=e.findNextWhere(S,function(e){return e.box===t});if(i)if(t.isHorizontal()){var n={left:w,right:M,top:0,bottom:0};t.update(t.options.fullWidth?m:k,p/2,n)}else t.update(i.minSize.width,_)}function r(t){var i=e.findNextWhere(S,function(e){return e.box===t}),n={left:0,right:0,top:C,bottom:D};i&&t.update(i.minSize.width,_,n)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?l:w,t.right=t.options.fullWidth?i-l:w+k,t.top=F,t.bottom=F+t.height,F=t.bottom):(t.left=A,t.right=A+t.width,t.top=C,t.bottom=C+_,A=t.right)}if(t){var l=0,h=0,d=e.where(t.boxes,function(t){return"left"===t.options.position}),u=e.where(t.boxes,function(t){return"right"===t.options.position}),c=e.where(t.boxes,function(t){return"top"===t.options.position}),f=e.where(t.boxes,function(t){return"bottom"===t.options.position}),g=e.where(t.boxes,function(t){return"chartArea"===t.options.position});c.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),f.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var m=i-2*l,p=n-2*h,b=m/2,v=p/2,y=(i-b)/(d.length+u.length),x=(n-v)/(c.length+f.length),k=m,_=p,S=[];e.each(d.concat(u,c,f),a);var w=l,M=l,C=h,D=h;e.each(d.concat(u),o),e.each(d,function(t){w+=t.width}),e.each(u,function(t){M+=t.width}),e.each(c.concat(f),o),e.each(c,function(t){C+=t.height}),e.each(f,function(t){D+=t.height}),e.each(d.concat(u),r),w=l,M=l,C=h,D=h,e.each(d,function(t){w+=t.width}),e.each(u,function(t){M+=t.width}),e.each(c,function(t){C+=t.height}),e.each(f,function(t){D+=t.height});var T=n-C-D,P=i-w-M;(P!==k||T!==_)&&(e.each(d,function(t){t.height=T}),e.each(u,function(t){t.height=T}),e.each(c,function(t){t.options.fullWidth||(t.width=P)}),e.each(f,function(t){t.options.fullWidth||(t.width=P)}),_=T,k=P);var A=l,F=h;e.each(d.concat(c),s),A+=k,F+=_,e.each(u,s),e.each(f,s),t.chartArea={left:w,top:C,right:w+k,bottom:C+_},e.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,_)})}}}}},{}],28:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},labels:{boxWidth:40,padding:10,generateLabels:function(t){var i=t.data;return e.isArray(i.datasets)?i.datasets.map(function(e,i){return{text:e.label,fillStyle:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:function(){this.legendItems=this.options.labels.generateLabels.call(this,this.chart),this.options.reverse&&this.legendItems.reverse()},afterBuildLabels:i,beforeFit:i,fit:function(){var i=this.options,n=i.labels,a=i.display,o=this.ctx,r=t.defaults.global,s=e.getValueOrDefault,l=s(n.fontSize,r.defaultFontSize),h=s(n.fontStyle,r.defaultFontStyle),d=s(n.fontFamily,r.defaultFontFamily),u=e.fontString(l,h,d),c=this.legendHitBoxes=[],f=this.minSize,g=this.isHorizontal();if(g?(f.width=this.maxWidth,f.height=a?10:0):(f.width=a?10:0,f.height=this.maxHeight),a&&g){var m=this.lineWidths=[0],p=this.legendItems.length?l+n.padding:0;o.textAlign="left",o.textBaseline="top",o.font=u,e.each(this.legendItems,function(t,e){var i=n.boxWidth+l/2+o.measureText(t.text).width;m[m.length-1]+i+n.padding>=this.width&&(p+=l+n.padding,m[m.length]=this.left),c[e]={left:0,top:0,width:i,height:l},m[m.length-1]+=i+n.padding},this),f.height+=p}this.width=f.width,this.height=f.height},afterFit:i,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this.options,n=i.labels,a=t.defaults.global,o=a.elements.line,r=this.width,s=this.lineWidths;if(i.display){var l=this.ctx,h={x:this.left+(r-s[0])/2,y:this.top+n.padding,line:0},d=e.getValueOrDefault,u=d(n.fontColor,a.defaultFontColor),c=d(n.fontSize,a.defaultFontSize),f=d(n.fontStyle,a.defaultFontStyle),g=d(n.fontFamily,a.defaultFontFamily),m=e.fontString(c,f,g);if(this.isHorizontal()){l.textAlign="left",l.textBaseline="top",l.lineWidth=.5,l.strokeStyle=u,l.fillStyle=u,l.font=m;var p=n.boxWidth,b=this.legendHitBoxes;e.each(this.legendItems,function(t,e){var i=l.measureText(t.text).width,u=p+c/2+i,f=h.x,g=h.y;f+u>=r&&(g=h.y+=c+n.padding,h.line++,f=h.x=this.left+(r-s[h.line])/2),l.save(),l.fillStyle=d(t.fillStyle,a.defaultColor),l.lineCap=d(t.lineCap,o.borderCapStyle),l.lineDashOffset=d(t.lineDashOffset,o.borderDashOffset),l.lineJoin=d(t.lineJoin,o.borderJoinStyle),l.lineWidth=d(t.lineWidth,o.borderWidth),l.strokeStyle=d(t.strokeStyle,a.defaultColor),l.setLineDash&&l.setLineDash(d(t.lineDash,o.borderDash)),l.strokeRect(f,g,p,c),l.fillRect(f,g,p,c),l.restore(),b[e].left=f,b[e].top=g,l.fillText(t.text,p+c/2+f,g),t.hidden&&(l.beginPath(),l.lineWidth=2,l.moveTo(p+c/2+f,g+c/2),l.lineTo(p+c/2+f+i,g+c/2),l.stroke()),h.x+=u+n.padding},this)}}},handleEvent:function(t){var i=e.getRelativePosition(t,this.chart.chart),n=i.x,a=i.y,o=this.options;if(n>=this.left&&n<=this.right&&a>=this.top&&a<=this.bottom)for(var r=this.legendHitBoxes,s=0;s<r.length;++s){var l=r[s];if(n>=l.left&&n<=l.left+l.width&&a>=l.top&&a<=l.top+l.height){o.onClick&&o.onClick.call(this,t,this.legendItems[s]);break}}}})}},{}],29:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.plugins=[],t.pluginService={register:function(e){var i=t.plugins;-1===i.indexOf(e)&&i.push(e)},remove:function(e){var i=t.plugins,n=i.indexOf(e);-1!==n&&i.splice(n,1)},notifyPlugins:function(i,n,a){e.each(t.plugins,function(t){t[i]&&"function"==typeof t[i]&&t[i].apply(a,n)},a)}};var i=e.noop;t.PluginBase=t.Element.extend({beforeInit:i,afterInit:i,beforeUpdate:i,afterUpdate:i,beforeDraw:i,afterDraw:i,destroy:i})}},{}],30:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:function(t){return""+t}}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,i,n){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this.margins=e.extend({left:0,right:0,top:0,bottom:0},n),this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this.beforeBuildTicks(),this.buildTicks(),this.afterBuildTicks(),this.beforeTickToLabelConversion(),this.convertTicksToLabels(),this.afterTickToLabelConversion(),this.beforeCalculateTickRotation(),this.calculateTickRotation(),this.afterCalculateTickRotation(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){this.ticks=this.ticks.map(function(t,e,i){return this.options.ticks.userCallback?this.options.ticks.userCallback(t,e,i):this.options.ticks.callback(t,e,i)},this)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var i=this.ctx,n=t.defaults.global,a=this.options.ticks,o=e.getValueOrDefault(a.fontSize,n.defaultFontSize),r=e.getValueOrDefault(a.fontStyle,n.defaultFontStyle),s=e.getValueOrDefault(a.fontFamily,n.defaultFontFamily),l=e.fontString(o,r,s);i.font=l;var h,d=i.measureText(this.ticks[0]).width,u=i.measureText(this.ticks[this.ticks.length-1]).width;if(this.labelRotation=a.minRotation||0,this.paddingRight=0,this.paddingLeft=0,this.options.display&&this.isHorizontal()){this.paddingRight=u/2+3,this.paddingLeft=d/2+3,this.longestTextCache||(this.longestTextCache={});for(var c,f,g=e.longestText(i,l,this.ticks,this.longestTextCache),m=g,p=this.getPixelForTick(1)-this.getPixelForTick(0)-6;m>p&&this.labelRotation<a.maxRotation;){if(c=Math.cos(e.toRadians(this.labelRotation)),f=Math.sin(e.toRadians(this.labelRotation)),h=c*d,h+o/2>this.yLabelWidth&&(this.paddingLeft=h+o/2),this.paddingRight=o/2,f*g>this.maxHeight){this.labelRotation--;break}this.labelRotation++,m=c*g}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var i=this.minSize={width:0,height:0},n=this.options,a=t.defaults.global,o=n.ticks,r=n.scaleLabel,s=n.display,l=this.isHorizontal(),h=e.getValueOrDefault(o.fontSize,a.defaultFontSize),d=e.getValueOrDefault(o.fontStyle,a.defaultFontStyle),u=e.getValueOrDefault(o.fontFamily,a.defaultFontFamily),c=e.fontString(h,d,u),f=e.getValueOrDefault(r.fontSize,a.defaultFontSize),g=e.getValueOrDefault(r.fontStyle,a.defaultFontStyle),m=e.getValueOrDefault(r.fontFamily,a.defaultFontFamily),p=(e.fontString(f,g,m),n.gridLines.tickMarkLength);if(l?i.width=this.isFullWidth()?this.maxWidth-this.margins.left-this.margins.right:this.maxWidth:i.width=s?p:0,l?i.height=s?p:0:i.height=this.maxHeight,r.display&&s&&(l?i.height+=1.5*f:i.width+=1.5*f),o.display&&s){this.longestTextCache||(this.longestTextCache={});var b=e.longestText(this.ctx,c,this.ticks,this.longestTextCache);if(l){this.longestLabelWidth=b;var v=Math.sin(e.toRadians(this.labelRotation))*this.longestLabelWidth+1.5*h;i.height=Math.min(this.maxHeight,i.height+v),this.ctx.font=c;var y=this.ctx.measureText(this.ticks[0]).width,x=this.ctx.measureText(this.ticks[this.ticks.length-1]).width,k=Math.cos(e.toRadians(this.labelRotation)),_=Math.sin(e.toRadians(this.labelRotation));this.paddingLeft=0!==this.labelRotation?k*y+3:y/2+3,this.paddingRight=0!==this.labelRotation?_*(h/2)+3:x/2+3}else{var S=this.maxWidth-i.width,w=o.mirror;w?b=0:b+=this.options.ticks.padding,S>b?i.width+=b:i.width=this.maxWidth,this.paddingTop=h/2,this.paddingBottom=h/2}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingTop=Math.max(this.paddingTop-this.margins.top,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0),this.paddingBottom=Math.max(this.paddingBottom-this.margins.bottom,0)),this.width=i.width,this.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function i(t){return null===t||"undefined"==typeof t?NaN:"number"==typeof t&&isNaN(t)?NaN:"object"==typeof t?t instanceof Date||t.isValid?t:i(this.isHorizontal()?t.x:t.y):t},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){if(this.isHorizontal()){var i=this.width-(this.paddingLeft+this.paddingRight),n=i/Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),a=n*t+this.paddingLeft;e&&(a+=n/2);var o=this.left+Math.round(a);return o+=this.isFullWidth()?this.margins.left:0}var r=this.height-(this.paddingTop+this.paddingBottom);return this.top+t*(r/(this.ticks.length-1))},getPixelForDecimal:function(t){if(this.isHorizontal()){var e=this.width-(this.paddingLeft+this.paddingRight),i=e*t+this.paddingLeft,n=this.left+Math.round(i);return n+=this.isFullWidth()?this.margins.left:0}return this.top+t*this.height},getBasePixel:function(){var t=this,e=t.min,i=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>i?i:e>0&&i>0?e:0)},draw:function(i){var n=this.options;if(n.display){var a,o,r,s,l,h=this.ctx,d=t.defaults.global,u=n.ticks,c=n.gridLines,f=n.scaleLabel,g=0!==this.labelRotation,m=u.autoSkip;u.maxTicksLimit&&(l=u.maxTicksLimit);var p=e.getValueOrDefault(u.fontColor,d.defaultFontColor),b=e.getValueOrDefault(u.fontSize,d.defaultFontSize),v=e.getValueOrDefault(u.fontStyle,d.defaultFontStyle),y=e.getValueOrDefault(u.fontFamily,d.defaultFontFamily),x=e.fontString(b,v,y),k=c.tickMarkLength,_=e.getValueOrDefault(f.fontColor,d.defaultFontColor),S=e.getValueOrDefault(f.fontSize,d.defaultFontSize),w=e.getValueOrDefault(f.fontStyle,d.defaultFontStyle),M=e.getValueOrDefault(f.fontFamily,d.defaultFontFamily),C=e.fontString(S,w,M),D=e.toRadians(this.labelRotation),T=Math.cos(D),P=(Math.sin(D),this.longestLabelWidth*T);if(h.fillStyle=p,this.isHorizontal()){a=!0;var A="bottom"===n.position?this.top:this.bottom-k,F="bottom"===n.position?this.top+k:this.bottom;if(o=!1,g&&(P/=2),(P+u.autoSkipPadding)*this.ticks.length>this.width-(this.paddingLeft+this.paddingRight)&&(o=1+Math.floor((P+u.autoSkipPadding)*this.ticks.length/(this.width-(this.paddingLeft+this.paddingRight)))),l&&this.ticks.length>l)for(;!o||this.ticks.length/(o||1)>l;)o||(o=1),o+=1;m||(o=!1),e.each(this.ticks,function(t,r){var s=this.ticks.length===r+1,l=o>1&&r%o>0||r%o===0&&r+o>=this.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var d=this.getPixelForTick(r),f=this.getPixelForTick(r,c.offsetGridLines);c.display&&(r===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(h.lineWidth=c.zeroLineWidth,h.strokeStyle=c.zeroLineColor,a=!0):a&&(h.lineWidth=c.lineWidth,h.strokeStyle=c.color,a=!1),d+=e.aliasPixel(h.lineWidth),h.beginPath(),c.drawTicks&&(h.moveTo(d,A),h.lineTo(d,F)),c.drawOnChartArea&&(h.moveTo(d,i.top),h.lineTo(d,i.bottom)),h.stroke()),u.display&&(h.save(),h.translate(f+u.labelOffset,g?this.top+12:"top"===n.position?this.bottom-k:this.top+k),h.rotate(-1*D),h.font=x,h.textAlign=g?"right":"center",h.textBaseline=g?"middle":"top"===n.position?"bottom":"top",h.fillText(t,0,0),h.restore())}},this),f.display&&(h.textAlign="center",h.textBaseline="middle",h.fillStyle=_,h.font=C,r=this.left+(this.right-this.left)/2,s="bottom"===n.position?this.bottom-S/2:this.top+S/2,h.fillText(f.labelString,r,s))}else{a=!0;var I="right"===n.position?this.left:this.right-5,O="right"===n.position?this.left+5:this.right;if(e.each(this.ticks,function(t,o){if(void 0!==t&&null!==t){var r=this.getPixelForTick(o);if(c.display&&(o===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(h.lineWidth=c.zeroLineWidth,h.strokeStyle=c.zeroLineColor,a=!0):a&&(h.lineWidth=c.lineWidth,h.strokeStyle=c.color,a=!1),r+=e.aliasPixel(h.lineWidth),h.beginPath(),c.drawTicks&&(h.moveTo(I,r),h.lineTo(O,r)),c.drawOnChartArea&&(h.moveTo(i.left,r),h.lineTo(i.right,r)),h.stroke()),u.display){var s,l=this.getPixelForTick(o,c.offsetGridLines);h.save(),"left"===n.position?u.mirror?(s=this.right+u.padding,h.textAlign="left"):(s=this.right-u.padding,h.textAlign="right"):u.mirror?(s=this.left-u.padding,h.textAlign="right"):(s=this.left+u.padding,h.textAlign="left"),h.translate(s,l+u.labelOffset),h.rotate(-1*D),h.font=x,h.textBaseline="middle",h.fillText(t,0,0),h.restore()}}},this),f.display){r="left"===n.position?this.left+S/2:this.right-S/2,s=this.top+(this.bottom-this.top)/2;var R="left"===n.position?-.5*Math.PI:.5*Math.PI;h.save(),h.translate(r,s),h.rotate(R),h.textAlign="center",h.fillStyle=_,h.font=C,h.textBaseline="middle",h.fillText(f.labelString,0,0),h.restore()}}if(c.drawBorder){h.lineWidth=c.lineWidth,h.strokeStyle=c.color;var W=this.left,V=this.right,L=this.top,B=this.bottom,z=e.aliasPixel(h.lineWidth);this.isHorizontal()?(L=B="top"===n.position?this.bottom:this.top,L+=z,B+=z):(W=V="left"===n.position?this.right:this.left,W+=z,V+=z),h.beginPath(),h.moveTo(W,L),h.lineTo(V,B),h.stroke()}}}})}},{}],31:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,i,n){this.constructors[t]=i,this.defaults[t]=e.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(i){return this.defaults.hasOwnProperty(i)?e.scaleMerge(t.defaults.scale,this.defaults[i]):{}},updateScaleDefaults:function(t,i){var n=this.defaults;n.hasOwnProperty(t)&&(n[t]=e.extend(n[t],i))},addScalesToLayout:function(i){e.each(i.scales,function(e){t.layoutService.addBox(i,e)})}}}},{}],32:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var i=e.noop;t.Title=t.Element.extend({initialize:function(i){e.extend(this,i),this.options=e.configMerge(t.defaults.global.title,i.options),this.legendHitBoxes=[]},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:i,afterBuildLabels:i,beforeFit:i,fit:function(){var i=this,n=(i.ctx,e.getValueOrDefault),a=i.options,o=t.defaults.global,r=a.display,s=n(a.fontSize,o.defaultFontSize),l=i.minSize;i.isHorizontal()?(l.width=i.maxWidth,l.height=r?s+2*a.padding:0):(l.width=r?s+2*a.padding:0,l.height=i.maxHeight),i.width=l.width,i.height=l.height},afterFit:i,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var i=this,n=i.ctx,a=e.getValueOrDefault,o=i.options,r=t.defaults.global;if(o.display){var s,l,h=a(o.fontSize,r.defaultFontSize),d=a(o.fontStyle,r.defaultFontStyle),u=a(o.fontFamily,r.defaultFontFamily),c=e.fontString(h,d,u),f=0,g=i.top,m=i.left,p=i.bottom,b=i.right;n.fillStyle=a(o.fontColor,r.defaultFontColor),n.font=c,i.isHorizontal()?(s=m+(b-m)/2,l=g+(p-g)/2):(s="left"===o.position?m+h/2:b-h/2,l=g+(p-g)/2,f=Math.PI*("left"===o.position?-.5:.5)),n.save(),n.translate(s,l),n.rotate(f),n.textAlign="center",n.textBaseline="middle",n.fillText(o.text,0,0),n.restore()}}})}},{}],33:[function(t,e,i){"use strict";e.exports=function(t){function e(t,e){return e&&(i.isArray(e)?t=t.concat(e):t.push(e)),t}var i=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"single",backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleColor:"#fff",titleAlign:"left",bodySpacing:2,bodyColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,yAlign:"center",xAlign:"center",caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",callbacks:{beforeTitle:i.noop,title:function(t,e){var i="";return t.length>0&&(t[0].xLabel?i=t[0].xLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},afterTitle:i.noop,beforeBody:i.noop,beforeLabel:i.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i+": "+t.yLabel},afterLabel:i.noop,afterBody:i.noop,beforeFooter:i.noop,footer:i.noop,afterFooter:i.noop}},t.Tooltip=t.Element.extend({initialize:function(){var e=t.defaults.global,n=this._options,a=n.tooltips;i.extend(this,{_model:{xPadding:a.xPadding,yPadding:a.yPadding,xAlign:a.yAlign,yAlign:a.xAlign,bodyColor:a.bodyColor,_bodyFontFamily:i.getValueOrDefault(a.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i.getValueOrDefault(a.bodyFontStyle,e.defaultFontStyle),_bodyAlign:a.bodyAlign,bodyFontSize:i.getValueOrDefault(a.bodyFontSize,e.defaultFontSize),bodySpacing:a.bodySpacing,titleColor:a.titleColor,_titleFontFamily:i.getValueOrDefault(a.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i.getValueOrDefault(a.titleFontStyle,e.defaultFontStyle),titleFontSize:i.getValueOrDefault(a.titleFontSize,e.defaultFontSize),_titleAlign:a.titleAlign,titleSpacing:a.titleSpacing,titleMarginBottom:a.titleMarginBottom,footerColor:a.footerColor,_footerFontFamily:i.getValueOrDefault(a.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i.getValueOrDefault(a.footerFontStyle,e.defaultFontStyle),footerFontSize:i.getValueOrDefault(a.footerFontSize,e.defaultFontSize),_footerAlign:a.footerAlign,footerSpacing:a.footerSpacing,footerMarginTop:a.footerMarginTop,caretSize:a.caretSize,cornerRadius:a.cornerRadius,backgroundColor:a.backgroundColor,opacity:0,legendColorBackground:a.multiKeyBackground}})},getTitle:function(){var t=this._options.tooltips.callbacks.beforeTitle.apply(this,arguments),i=this._options.tooltips.callbacks.title.apply(this,arguments),n=this._options.tooltips.callbacks.afterTitle.apply(this,arguments),a=[];return a=e(a,t),a=e(a,i),a=e(a,n)},getBeforeBody:function(){var t=this._options.tooltips.callbacks.beforeBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var n=[];return i.each(t,function(t){i.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this,t,e),n),i.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this,t,e),n),i.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this,t,e),n)},this),n},getAfterBody:function(){var t=this._options.tooltips.callbacks.afterBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.tooltips.callbacks.beforeFooter.apply(this,arguments),i=this._options.tooltips.callbacks.footer.apply(this,arguments),n=this._options.tooltips.callbacks.afterFooter.apply(this,arguments),a=[];return a=e(a,t),a=e(a,i),a=e(a,n)},getAveragePosition:function(t){if(!t.length)return!1;var e=[],n=[];i.each(t,function(t){if(t&&t.hasValue()){var i=t.tooltipPosition();e.push(i.x),n.push(i.y)}});for(var a=0,o=0,r=0;r<e.length;r++)a+=e[r],o+=n[r];return{x:Math.round(a/e.length),y:Math.round(o/e.length)}},update:function(t){if(this._active.length){this._model.opacity=1;var e,n=this._active[0],a=[],o=[];if("single"===this._options.tooltips.mode){var r=n._yScale||n._scale;o.push({xLabel:n._xScale?n._xScale.getLabelForIndex(n._index,n._datasetIndex):"",yLabel:r?r.getLabelForIndex(n._index,n._datasetIndex):"",index:n._index,datasetIndex:n._datasetIndex}),e=this.getAveragePosition(this._active)}else i.each(this._data.datasets,function(t,e){if(this._chartInstance.isDatasetVisible(e)){var i=this._chartInstance.getDatasetMeta(e),a=i.data[n._index];if(a){var r=n._yScale||n._scale;o.push({xLabel:a._xScale?a._xScale.getLabelForIndex(a._index,a._datasetIndex):"",yLabel:r?r.getLabelForIndex(a._index,a._datasetIndex):"",index:n._index,datasetIndex:e})}}},this),i.each(this._active,function(t){t&&a.push({borderColor:t._view.borderColor,backgroundColor:t._view.backgroundColor})},null),e=this.getAveragePosition(this._active);i.extend(this._model,{title:this.getTitle(o,this._data),beforeBody:this.getBeforeBody(o,this._data),body:this.getBody(o,this._data),afterBody:this.getAfterBody(o,this._data),footer:this.getFooter(o,this._data)}),i.extend(this._model,{x:Math.round(e.x),y:Math.round(e.y),caretPadding:i.getValueOrDefault(e.padding,2),labelColors:a});var s=this.getTooltipSize(this._model);this.determineAlignment(s),i.extend(this._model,this.getBackgroundPoint(this._model,s))}else this._model.opacity=0;return t&&this._options.tooltips.custom&&this._options.tooltips.custom.call(this,this._model),this},getTooltipSize:function(t){var e=this._chart.ctx,n={height:2*t.yPadding,width:0},a=t.body.length+t.beforeBody.length+t.afterBody.length;return n.height+=t.title.length*t.titleFontSize,n.height+=(t.title.length-1)*t.titleSpacing,n.height+=t.title.length?t.titleMarginBottom:0,n.height+=a*t.bodyFontSize,n.height+=a?(a-1)*t.bodySpacing:0,n.height+=t.footer.length?t.footerMarginTop:0,n.height+=t.footer.length*t.footerFontSize,n.height+=t.footer.length?(t.footer.length-1)*t.footerSpacing:0,e.font=i.fontString(t.titleFontSize,t._titleFontStyle,t._titleFontFamily),i.each(t.title,function(t){n.width=Math.max(n.width,e.measureText(t).width)}),e.font=i.fontString(t.bodyFontSize,t._bodyFontStyle,t._bodyFontFamily),i.each(t.beforeBody.concat(t.afterBody),function(t){n.width=Math.max(n.width,e.measureText(t).width)}),i.each(t.body,function(i){n.width=Math.max(n.width,e.measureText(i).width+("single"!==this._options.tooltips.mode?t.bodyFontSize+2:0))},this),e.font=i.fontString(t.footerFontSize,t._footerFontStyle,t._footerFontFamily),i.each(t.footer,function(t){n.width=Math.max(n.width,e.measureText(t).width)}),n.width+=2*t.xPadding,n},determineAlignment:function(t){this._model.y<t.height?this._model.yAlign="top":this._model.y>this._chart.height-t.height&&(this._model.yAlign="bottom");var e,i,n,a,o,r=this,s=(this._chartInstance.chartArea.left+this._chartInstance.chartArea.right)/2,l=(this._chartInstance.chartArea.top+this._chartInstance.chartArea.bottom)/2;"center"===this._model.yAlign?(e=function(t){return s>=t},i=function(t){return t>s}):(e=function(e){return e<=t.width/2},i=function(e){return e>=r._chart.width-t.width/2}),n=function(e){return e+t.width>r._chart.width},a=function(e){return e-t.width<0},o=function(t){return l>=t?"top":"bottom"},e(this._model.x)?(this._model.xAlign="left",n(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=o(this._model.y))):i(this._model.x)&&(this._model.xAlign="right",a(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=o(this._model.y)))},getBackgroundPoint:function(t,e){var i={
x:t.x,y:t.y};return"right"===t.xAlign?i.x-=e.width:"center"===t.xAlign&&(i.x-=e.width/2),"top"===t.yAlign?i.y+=t.caretPadding+t.caretSize:"bottom"===t.yAlign?i.y-=e.height+t.caretPadding+t.caretSize:i.y-=e.height/2,"center"===t.yAlign?"left"===t.xAlign?i.x+=t.caretPadding+t.caretSize:"right"===t.xAlign&&(i.x-=t.caretPadding+t.caretSize):"left"===t.xAlign?i.x-=t.cornerRadius+t.caretPadding:"right"===t.xAlign&&(i.x+=t.cornerRadius+t.caretPadding),i},drawCaret:function(t,e,n,a){var o,r,s,l,h,d,u=this._view,c=this._chart.ctx;"center"===u.yAlign?("left"===u.xAlign?(o=t.x,r=o-u.caretSize,s=o):(o=t.x+e.width,r=o+u.caretSize,s=o),h=t.y+e.height/2,l=h-u.caretSize,d=h+u.caretSize):("left"===u.xAlign?(o=t.x+u.cornerRadius,r=o+u.caretSize,s=r+u.caretSize):"right"===u.xAlign?(o=t.x+e.width-u.cornerRadius,r=o-u.caretSize,s=r-u.caretSize):(r=t.x+e.width/2,o=r-u.caretSize,s=r+u.caretSize),"top"===u.yAlign?(l=t.y,h=l-u.caretSize,d=l):(l=t.y+e.height,h=l+u.caretSize,d=l));var f=i.color(u.backgroundColor);c.fillStyle=f.alpha(n*f.alpha()).rgbString(),c.beginPath(),c.moveTo(o,l),c.lineTo(r,h),c.lineTo(s,d),c.closePath(),c.fill()},drawTitle:function(t,e,n,a){if(e.title.length){n.textAlign=e._titleAlign,n.textBaseline="top";var o=i.color(e.titleColor);n.fillStyle=o.alpha(a*o.alpha()).rgbString(),n.font=i.fontString(e.titleFontSize,e._titleFontStyle,e._titleFontFamily),i.each(e.title,function(i,a){n.fillText(i,t.x,t.y),t.y+=e.titleFontSize+e.titleSpacing,a+1===e.title.length&&(t.y+=e.titleMarginBottom-e.titleSpacing)})}},drawBody:function(t,e,n,a){n.textAlign=e._bodyAlign,n.textBaseline="top";var o=i.color(e.bodyColor);n.fillStyle=o.alpha(a*o.alpha()).rgbString(),n.font=i.fontString(e.bodyFontSize,e._bodyFontStyle,e._bodyFontFamily),i.each(e.beforeBody,function(i){n.fillText(i,t.x,t.y),t.y+=e.bodyFontSize+e.bodySpacing}),i.each(e.body,function(o,r){"single"!==this._options.tooltips.mode&&(n.fillStyle=i.color(e.legendColorBackground).alpha(a).rgbaString(),n.fillRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),n.strokeStyle=i.color(e.labelColors[r].borderColor).alpha(a).rgbaString(),n.strokeRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),n.fillStyle=i.color(e.labelColors[r].backgroundColor).alpha(a).rgbaString(),n.fillRect(t.x+1,t.y+1,e.bodyFontSize-2,e.bodyFontSize-2),n.fillStyle=i.color(e.bodyColor).alpha(a).rgbaString()),n.fillText(o,t.x+("single"!==this._options.tooltips.mode?e.bodyFontSize+2:0),t.y),t.y+=e.bodyFontSize+e.bodySpacing},this),i.each(e.afterBody,function(i){n.fillText(i,t.x,t.y),t.y+=e.bodyFontSize}),t.y-=e.bodySpacing},drawFooter:function(t,e,n,a){if(e.footer.length){t.y+=e.footerMarginTop,n.textAlign=e._footerAlign,n.textBaseline="top";var o=i.color(e.footerColor);n.fillStyle=o.alpha(a*o.alpha()).rgbString(),n.font=i.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),i.each(e.footer,function(i){n.fillText(i,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})}},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n=e.caretPadding,a=this.getTooltipSize(e),o={x:e.x,y:e.y},r=Math.abs(e.opacity<.001)?0:e.opacity;if(this._options.tooltips.enabled){var s=i.color(e.backgroundColor);t.fillStyle=s.alpha(r*s.alpha()).rgbString(),i.drawRoundedRectangle(t,o.x,o.y,a.width,a.height,e.cornerRadius),t.fill(),this.drawCaret(o,a,r,n),o.x+=e.xPadding,o.y+=e.yPadding,this.drawTitle(o,e,t,r),this.drawBody(o,e,t,r),this.drawFooter(o,e,t,r)}}}})}},{}],34:[function(t,e,i){"use strict";e.exports=function(t,e){var i=t.helpers,n=t.defaults.global;n.elements.arc={backgroundColor:n.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,e){var n=this._view;if(n){for(var a=i.getAngleFromPoint(n,{x:t,y:e}),o=a.angle,r=a.distance,s=n.startAngle,l=n.endAngle;s>l;)l+=2*Math.PI;for(;o>l;)o-=2*Math.PI;for(;s>o;)o+=2*Math.PI;var h=o>=s&&l>=o,d=r>=n.innerRadius&&r<=n.outerRadius;return h&&d}return!1},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,n=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,n),t.arc(e.x,e.y,e.innerRadius,n,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],35:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:i.defaultColor,borderWidth:3,borderColor:i.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",fill:!0},t.elements.Line=t.Element.extend({lineToNextPoint:function(t,e,i,n,a){var o=this._chart.ctx;e._view.skip?n.call(this,t,e,i):t._view.skip?a.call(this,t,e,i):0===e._view.tension?o.lineTo(e._view.x,e._view.y):o.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,e._view.controlPointPreviousX,e._view.controlPointPreviousY,e._view.x,e._view.y)},draw:function(){function t(t){r._view.skip||s._view.skip?t&&o.lineTo(n._view.scaleZero.x,n._view.scaleZero.y):o.bezierCurveTo(s._view.controlPointNextX,s._view.controlPointNextY,r._view.controlPointPreviousX,r._view.controlPointPreviousY,r._view.x,r._view.y)}var n=this,a=this._view,o=this._chart.ctx,r=this._children[0],s=this._children[this._children.length-1];o.save(),this._children.length>0&&a.fill&&(o.beginPath(),e.each(this._children,function(t,i){var n=e.previousItem(this._children,i),r=e.nextItem(this._children,i);0===i?(this._loop?o.moveTo(a.scaleZero.x,a.scaleZero.y):o.moveTo(t._view.x,a.scaleZero),t._view.skip?this._loop||o.moveTo(r._view.x,this._view.scaleZero):o.lineTo(t._view.x,t._view.y)):this.lineToNextPoint(n,t,r,function(t,e,i){this._loop?o.lineTo(this._view.scaleZero.x,this._view.scaleZero.y):(o.lineTo(t._view.x,this._view.scaleZero),o.moveTo(i._view.x,this._view.scaleZero))},function(t,e){o.lineTo(e._view.x,e._view.y)})},this),this._loop?t(!0):(o.lineTo(this._children[this._children.length-1]._view.x,a.scaleZero),o.lineTo(this._children[0]._view.x,a.scaleZero)),o.fillStyle=a.backgroundColor||i.defaultColor,o.closePath(),o.fill());var l=i.elements.line;o.lineCap=a.borderCapStyle||l.borderCapStyle,o.setLineDash&&o.setLineDash(a.borderDash||l.borderDash),o.lineDashOffset=a.borderDashOffset||l.borderDashOffset,o.lineJoin=a.borderJoinStyle||l.borderJoinStyle,o.lineWidth=a.borderWidth||l.borderWidth,o.strokeStyle=a.borderColor||i.defaultColor,o.beginPath(),e.each(this._children,function(t,i){var n=e.previousItem(this._children,i),a=e.nextItem(this._children,i);0===i?o.moveTo(t._view.x,t._view.y):this.lineToNextPoint(n,t,a,function(t,e,i){o.moveTo(i._view.x,i._view.y)},function(t,e){o.moveTo(e._view.x,e._view.y)})},this),this._loop&&this._children.length>0&&t(),o.stroke(),o.restore()}})}},{}],36:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,n=i.defaultColor;i.elements.point={radius:3,pointStyle:"circle",backgroundColor:n,borderWidth:1,borderColor:n,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var i=this._view;return i?Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2):!1},inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var t,a,o,r,s,l,h=this._view,d=this._chart.ctx,u=h.pointStyle,c=h.radius,f=h.x,g=h.y;if(!h.skip){if("object"==typeof u&&(t=u.toString(),"[object HTMLImageElement]"===t||"[object HTMLCanvasElement]"===t))return void d.drawImage(u,f-u.width/2,g-u.height/2);if(!(isNaN(c)||0>=c)){switch(d.strokeStyle=h.borderColor||n,d.lineWidth=e.getValueOrDefault(h.borderWidth,i.elements.point.borderWidth),d.fillStyle=h.backgroundColor||n,u){default:d.beginPath(),d.arc(f,g,c,0,2*Math.PI),d.closePath(),d.fill();break;case"triangle":d.beginPath(),a=3*c/Math.sqrt(3),s=a*Math.sqrt(3)/2,d.moveTo(f-a/2,g+s/3),d.lineTo(f+a/2,g+s/3),d.lineTo(f,g-2*s/3),d.closePath(),d.fill();break;case"rect":l=1/Math.SQRT2*c,d.fillRect(f-l,g-l,2*l,2*l),d.strokeRect(f-l,g-l,2*l,2*l);break;case"rectRot":d.translate(f,g),d.rotate(Math.PI/4),l=1/Math.SQRT2*c,d.fillRect(-l,-l,2*l,2*l),d.strokeRect(-l,-l,2*l,2*l),d.setTransform(1,0,0,1,0,0);break;case"cross":d.beginPath(),d.moveTo(f,g+c),d.lineTo(f,g-c),d.moveTo(f-c,g),d.lineTo(f+c,g),d.closePath();break;case"crossRot":d.beginPath(),o=Math.cos(Math.PI/4)*c,r=Math.sin(Math.PI/4)*c,d.moveTo(f-o,g-r),d.lineTo(f+o,g+r),d.moveTo(f-o,g+r),d.lineTo(f+o,g-r),d.closePath();break;case"star":d.beginPath(),d.moveTo(f,g+c),d.lineTo(f,g-c),d.moveTo(f-c,g),d.lineTo(f+c,g),o=Math.cos(Math.PI/4)*c,r=Math.sin(Math.PI/4)*c,d.moveTo(f-o,g-r),d.lineTo(f+o,g+r),d.moveTo(f-o,g+r),d.lineTo(f+o,g-r),d.closePath();break;case"line":d.beginPath(),d.moveTo(f-c,g),d.lineTo(f+c,g),d.closePath();break;case"dash":d.beginPath(),d.moveTo(f,g),d.lineTo(f+c,g),d.closePath()}d.stroke()}}}})}},{}],37:[function(t,e,i){"use strict";e.exports=function(t){var e=(t.helpers,t.defaults.global);e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,i=this._view,n=i.width/2,a=i.x-n,o=i.x+n,r=i.base-(i.base-i.y),s=i.borderWidth/2;i.borderWidth&&(a+=s,o-=s,r+=s),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var l=[[a,i.base],[a,r],[o,r],[o,i.base]],h=["bottom","left","top","right"],d=h.indexOf(i.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var u=1;4>u;u++)e.lineTo.apply(e,t(u));e.fill(),i.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=this._view;return i?i.y<i.base?t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.y&&e<=i.base:t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.base&&e<=i.y:!1},inLabelRange:function(t){var e=this._view;return e?t>=e.x-e.width/2&&t<=e.x+e.width/2:!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],38:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"bottom"},n=t.Scale.extend({determineDataLimits:function(){this.minIndex=0,this.maxIndex=this.chart.data.labels.length-1;var t;void 0!==this.options.ticks.min&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.min),this.minIndex=-1!==t?t:this.minIndex),void 0!==this.options.ticks.max&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.max),this.maxIndex=-1!==t?t:this.maxIndex),this.min=this.chart.data.labels[this.minIndex],this.max=this.chart.data.labels[this.maxIndex]},buildTicks:function(t){this.ticks=0===this.minIndex&&this.maxIndex===this.chart.data.labels.length-1?this.chart.data.labels:this.chart.data.labels.slice(this.minIndex,this.maxIndex+1)},getLabelForIndex:function(t,e){return this.ticks[t]},getPixelForValue:function(t,e,i,n){var a=Math.max(this.maxIndex+1-this.minIndex-(this.options.gridLines.offsetGridLines?0:1),1);if(this.isHorizontal()){var o=this.width-(this.paddingLeft+this.paddingRight),r=o/a,s=r*(e-this.minIndex)+this.paddingLeft;return this.options.gridLines.offsetGridLines&&n&&(s+=r/2),this.left+Math.round(s)}var l=this.height-(this.paddingTop+this.paddingBottom),h=l/a,d=h*(e-this.minIndex)+this.paddingTop;return this.options.gridLines.offsetGridLines&&n&&(d+=h/2),this.top+Math.round(d)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,i=Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),n=this.isHorizontal(),a=n?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),o=a/i;return this.options.gridLines.offsetGridLines&&(t-=o/2),t-=n?this.paddingLeft:this.paddingTop,e=0>=t?0:Math.round(t/o)}});t.scaleService.registerScaleType("category",n,i)}},{}],39:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(t,i,n){var a=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var o=e.log10(Math.abs(a)),r="";if(0!==t){var s=-1*Math.floor(o);s=Math.max(Math.min(s,20),0),r=t.toFixed(s)}else r="0";return r}}},n=t.Scale.extend({determineDataLimits:function(){function t(t){return l?t.xAxisID===i.id:t.yAxisID===i.id}var i=this,n=i.options,a=n.ticks,o=i.chart,r=o.data,s=r.datasets,l=i.isHorizontal();if(i.min=null,i.max=null,n.stacked){var h={},d=!1,u=!1;e.each(s,function(a,r){var s=o.getDatasetMeta(r);void 0===h[s.type]&&(h[s.type]={positiveValues:[],negativeValues:[]});var l=h[s.type].positiveValues,c=h[s.type].negativeValues;o.isDatasetVisible(r)&&t(s)&&e.each(a.data,function(t,e){var a=+i.getRightValue(t);isNaN(a)||s.data[e].hidden||(l[e]=l[e]||0,c[e]=c[e]||0,n.relativePoints?l[e]=100:0>a?(u=!0,c[e]+=a):(d=!0,l[e]+=a))})}),e.each(h,function(t){var n=t.positiveValues.concat(t.negativeValues),a=e.min(n),o=e.max(n);i.min=null===i.min?a:Math.min(i.min,a),i.max=null===i.max?o:Math.max(i.max,o)})}else e.each(s,function(n,a){var r=o.getDatasetMeta(a);o.isDatasetVisible(a)&&t(r)&&e.each(n.data,function(t,e){var n=+i.getRightValue(t);isNaN(n)||r.data[e].hidden||(null===i.min?i.min=n:n<i.min&&(i.min=n),null===i.max?i.max=n:n>i.max&&(i.max=n))})});if(a.beginAtZero){var c=e.sign(i.min),f=e.sign(i.max);0>c&&0>f?i.max=0:c>0&&f>0&&(i.min=0)}void 0!==a.min?i.min=a.min:void 0!==a.suggestedMin&&(i.min=Math.min(i.min,a.suggestedMin)),void 0!==a.max?i.max=a.max:void 0!==a.suggestedMax&&(i.max=Math.max(i.max,a.suggestedMax)),i.min===i.max&&(i.max++,a.beginAtZero||i.min--)},buildTicks:function(){var i,n=this,a=n.options,o=a.ticks,r=e.getValueOrDefault,s=n.isHorizontal(),l=n.ticks=[];if(s)i=Math.min(o.maxTicksLimit?o.maxTicksLimit:11,Math.ceil(n.width/50));else{var h=r(o.fontSize,t.defaults.global.defaultFontSize);i=Math.min(o.maxTicksLimit?o.maxTicksLimit:11,Math.ceil(n.height/(2*h)))}i=Math.max(2,i);var d,u=o.fixedStepSize&&o.fixedStepSize>0||o.stepSize&&o.stepSize>0;if(u)d=r(o.fixedStepSize,o.stepSize);else{var c=e.niceNum(n.max-n.min,!1);d=e.niceNum(c/(i-1),!0)}var f=Math.floor(n.min/d)*d,g=Math.ceil(n.max/d)*d,m=(g-f)/d;m=e.almostEquals(m,Math.round(m),d/1e3)?Math.round(m):Math.ceil(m),l.push(void 0!==o.min?o.min:f);for(var p=1;m>p;++p)l.push(f+p*d);l.push(void 0!==o.max?o.max:g),s||l.reverse(),n.max=e.max(l),n.min=e.min(l),o.reverse?(l.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)},getPixelForValue:function(t,e,i,n){var a,o,r=this,s=r.paddingLeft,l=r.paddingBottom,h=r.start,d=+r.getRightValue(t),u=r.end-h;return r.isHorizontal()?(o=r.width-(s+r.paddingRight),a=r.left+o/u*(d-h),Math.round(a+s)):(o=r.height-(r.paddingTop+l),a=r.bottom-l-o/u*(d-h),Math.round(a))},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),n=e.paddingLeft,a=e.paddingBottom,o=i?e.width-(n+e.paddingRight):e.height-(e.paddingTop+a),r=(i?t-e.left-n:e.bottom-a-t)/o;return e.start+(e.end-e.start)*r},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticksAsNumbers[t],null,null,e)}});t.scaleService.registerScaleType("linear",n,i)}},{}],40:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(t,i,n){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 1===a||2===a||5===a||0===i||i===n.length-1?t.toExponential():""}}},n=t.Scale.extend({determineDataLimits:function(){function t(t){return h?t.xAxisID===i.id:t.yAxisID===i.id}var i=this,n=i.options,a=n.ticks,o=i.chart,r=o.data,s=r.datasets,l=e.getValueOrDefault,h=i.isHorizontal();if(i.min=null,i.max=null,n.stacked){var d={};e.each(s,function(a,r){var s=o.getDatasetMeta(r);o.isDatasetVisible(r)&&t(s)&&(void 0===d[s.type]&&(d[s.type]=[]),e.each(a.data,function(t,e){var a=d[s.type],o=+i.getRightValue(t);isNaN(o)||s.data[e].hidden||(a[e]=a[e]||0,n.relativePoints?a[e]=100:a[e]+=o)}))}),e.each(d,function(t){var n=e.min(t),a=e.max(t);i.min=null===i.min?n:Math.min(i.min,n),i.max=null===i.max?a:Math.max(i.max,a)})}else e.each(s,function(n,a){var r=o.getDatasetMeta(a);o.isDatasetVisible(a)&&t(r)&&e.each(n.data,function(t,e){var n=+i.getRightValue(t);isNaN(n)||r.data[e].hidden||(null===i.min?i.min=n:n<i.min&&(i.min=n),null===i.max?i.max=n:n>i.max&&(i.max=n))})});i.min=l(a.min,i.min),i.max=l(a.max,i.max),i.min===i.max&&(0!==i.min&&null!==i.min?(i.min=Math.pow(10,Math.floor(e.log10(i.min))-1),i.max=Math.pow(10,Math.floor(e.log10(i.max))+1)):(i.min=1,i.max=10))},buildTicks:function(){for(var t=this,i=t.options,n=i.ticks,a=e.getValueOrDefault,o=t.ticks=[],r=a(n.min,Math.pow(10,Math.floor(e.log10(t.min))));r<t.max;){o.push(r);var s=Math.floor(e.log10(r)),l=Math.floor(r/Math.pow(10,s))+1;10===l&&(l=1,++s),r=l*Math.pow(10,s)}var h=a(n.max,r);o.push(h),t.isHorizontal()||o.reverse(),t.max=e.max(o),t.min=e.min(o),n.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickValues[t],null,null,e)},getPixelForValue:function(t,i,n,a){var o,r,s=this,l=s.start,h=+s.getRightValue(t),d=e.log10(s.end)-e.log10(l),u=s.paddingTop,c=s.paddingBottom,f=s.paddingLeft;return s.isHorizontal()?0===h?r=s.left+f:(o=s.width-(f+s.paddingRight),r=s.left+o/d*(e.log10(h)-e.log10(l)),r+=f):0===h?r=s.top+u:(o=s.height-(u+c),r=s.bottom-c-o/d*(e.log10(h)-e.log10(l))),r},getValueForPixel:function(t){var i,n,a=this,o=e.log10(a.end)-e.log10(a.start);return a.isHorizontal()?(n=a.width-(a.paddingLeft+a.paddingRight),i=a.start*Math.pow(10,(t-a.left-a.paddingLeft)*o/n)):(n=a.height-(a.paddingTop+a.paddingBottom),i=Math.pow(10,(a.bottom-a.paddingBottom-t)*o/n)/a.start),i}});t.scaleService.registerScaleType("logarithmic",n,i)}},{}],41:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,n={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2},pointLabels:{fontSize:10,callback:function(t){return t}}},a=t.Scale.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this.options;this.width=this.maxWidth,this.height=this.maxHeight,this.xCenter=Math.round(this.width/2),this.yCenter=Math.round(this.height/2);var n=e.min([this.height,this.width]),a=e.getValueOrDefault(t.ticks.fontSize,i.defaultFontSize);this.drawingArea=t.display?n/2-(a/2+t.ticks.backdropPaddingY):n/2},determineDataLimits:function(){if(this.min=null,this.max=null,e.each(this.chart.data.datasets,function(t,i){if(this.chart.isDatasetVisible(i)){var n=this.chart.getDatasetMeta(i);e.each(t.data,function(t,e){var i=+this.getRightValue(t);isNaN(i)||n.data[e].hidden||(null===this.min?this.min=i:i<this.min&&(this.min=i),null===this.max?this.max=i:i>this.max&&(this.max=i))},this)}},this),this.options.ticks.beginAtZero){var t=e.sign(this.min),i=e.sign(this.max);0>t&&0>i?this.max=0:t>0&&i>0&&(this.min=0)}void 0!==this.options.ticks.min?this.min=this.options.ticks.min:void 0!==this.options.ticks.suggestedMin&&(this.min=Math.min(this.min,this.options.ticks.suggestedMin)),void 0!==this.options.ticks.max?this.max=this.options.ticks.max:void 0!==this.options.ticks.suggestedMax&&(this.max=Math.max(this.max,this.options.ticks.suggestedMax)),this.min===this.max&&(this.min--,this.max++)},buildTicks:function(){this.ticks=[];var t=e.getValueOrDefault(this.options.ticks.fontSize,i.defaultFontSize),n=Math.min(this.options.ticks.maxTicksLimit?this.options.ticks.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*t)));n=Math.max(2,n);var a=e.niceNum(this.max-this.min,!1),o=e.niceNum(a/(n-1),!0),r=Math.floor(this.min/o)*o,s=Math.ceil(this.max/o)*o,l=Math.ceil((s-r)/o);this.ticks.push(void 0!==this.options.ticks.min?this.options.ticks.min:r);for(var h=1;l>h;++h)this.ticks.push(r+h*o);this.ticks.push(void 0!==this.options.ticks.max?this.options.ticks.max:s),this.max=e.max(this.ticks),this.min=e.min(this.ticks),this.options.ticks.reverse?(this.ticks.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),this.zeroLineIndex=this.ticks.indexOf(0)},convertTicksToLabels:function(){t.Scale.prototype.convertTicksToLabels.call(this),this.pointLabels=this.chart.data.labels.map(this.options.pointLabels.callback,this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,n,a,o,r,s,l,h,d,u,c,f,g=this.options.pointLabels,m=e.getValueOrDefault(g.fontSize,i.defaultFontSize),p=e.getValueOrDefault(g.fontStyle,i.defaultFontStyle),b=e.getValueOrDefault(g.fontFamily,i.defaultFontFamily),v=e.fontString(m,p,b),y=e.min([this.height/2-m-5,this.width/2]),x=this.width,k=0;for(this.ctx.font=v,n=0;n<this.getValueCount();n++)t=this.getPointPosition(n,y),a=this.ctx.measureText(this.pointLabels[n]?this.pointLabels[n]:"").width+5,0===n||n===this.getValueCount()/2?(o=a/2,t.x+o>x&&(x=t.x+o,r=n),t.x-o<k&&(k=t.x-o,l=n)):n<this.getValueCount()/2?t.x+a>x&&(x=t.x+a,r=n):n>this.getValueCount()/2&&t.x-a<k&&(k=t.x-a,l=n);d=k,u=Math.ceil(x-this.width),s=this.getIndexAngle(r),h=this.getIndexAngle(l),c=u/Math.sin(s+Math.PI/2),f=d/Math.sin(h+Math.PI/2),c=e.isNumber(c)?c:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(y-(f+c)/2),this.setCenterPoint(f,c)},setCenterPoint:function(t,e){var i=this.width-e-this.drawingArea,n=t+this.drawingArea;this.xCenter=Math.round((n+i)/2+this.left),this.yCenter=Math.round(this.height/2+this.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount();return t*e-Math.PI/2},getDistanceFromCenterForValue:function(t){if(null===t)return 0;var e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e},getPointPosition:function(t,e){var i=this.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,i=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>i?i:e>0&&i>0?e:0)},draw:function(){if(this.options.display){var t=this.ctx;if(e.each(this.ticks,function(n,a){if(a>0||this.options.reverse){var o=this.getDistanceFromCenterForValue(this.ticks[a]),r=this.yCenter-o;if(this.options.gridLines.display)if(t.strokeStyle=this.options.gridLines.color,t.lineWidth=this.options.gridLines.lineWidth,this.options.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,o,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var s=0;s<this.getValueCount();s++){var l=this.getPointPosition(s,this.getDistanceFromCenterForValue(this.ticks[a]));0===s?t.moveTo(l.x,l.y):t.lineTo(l.x,l.y)}t.closePath(),t.stroke()}if(this.options.ticks.display){var h=e.getValueOrDefault(this.options.ticks.fontColor,i.defaultFontColor),d=e.getValueOrDefault(this.options.ticks.fontSize,i.defaultFontSize),u=e.getValueOrDefault(this.options.ticks.fontStyle,i.defaultFontStyle),c=e.getValueOrDefault(this.options.ticks.fontFamily,i.defaultFontFamily),f=e.fontString(d,u,c);if(t.font=f,this.options.ticks.showLabelBackdrop){var g=t.measureText(n).width;t.fillStyle=this.options.ticks.backdropColor,t.fillRect(this.xCenter-g/2-this.options.ticks.backdropPaddingX,r-d/2-this.options.ticks.backdropPaddingY,g+2*this.options.ticks.backdropPaddingX,d+2*this.options.ticks.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=h,t.fillText(n,this.xCenter,r)}}},this),!this.options.lineArc){t.lineWidth=this.options.angleLines.lineWidth,t.strokeStyle=this.options.angleLines.color;for(var n=this.getValueCount()-1;n>=0;n--){if(this.options.angleLines.display){var a=this.getPointPosition(n,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(a.x,a.y),t.stroke(),t.closePath()}var o=this.getPointPosition(n,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max)+5),r=e.getValueOrDefault(this.options.pointLabels.fontColor,i.defaultFontColor),s=e.getValueOrDefault(this.options.pointLabels.fontSize,i.defaultFontSize),l=e.getValueOrDefault(this.options.pointLabels.fontStyle,i.defaultFontStyle),h=e.getValueOrDefault(this.options.pointLabels.fontFamily,i.defaultFontFamily),d=e.fontString(s,l,h);t.font=d,t.fillStyle=r;var u=this.pointLabels.length,c=this.pointLabels.length/2,f=c/2,g=f>n||n>u-f,m=n===f||n===u-f;0===n?t.textAlign="center":n===c?t.textAlign="center":c>n?t.textAlign="left":t.textAlign="right",m?t.textBaseline="middle":g?t.textBaseline="bottom":t.textBaseline="top",t.fillText(this.pointLabels[n]?this.pointLabels[n]:"",o.x,o.y)}}}}});t.scaleService.registerScaleType("radialLinear",a,n)}},{}],42:[function(t,e,i){"use strict";var n=t("moment");n="function"==typeof n?n:window.moment,e.exports=function(t){var e=t.helpers,i={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},a={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},o=t.Scale.extend({initialize:function(){if(!n)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return this.labelMoments[t][e]},getMomentStartOf:function(t){return"week"===this.options.time.unit&&this.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(this.options.time.isoWeekday):t.clone().startOf(this.tickUnit)},determineDataLimits:function(){this.labelMoments=[];var t=[];this.chart.data.labels&&this.chart.data.labels.length>0?(e.each(this.chart.data.labels,function(e,i){var n=this.parseTime(e);n.isValid()&&(this.options.time.round&&n.startOf(this.options.time.round),t.push(n))},this),this.firstTick=n.min.call(this,t),this.lastTick=n.max.call(this,t)):(this.firstTick=null,this.lastTick=null),e.each(this.chart.data.datasets,function(i,a){var o=[],r=this.chart.isDatasetVisible(a);"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(t,e){var i=this.parseTime(this.getRightValue(t));i.isValid()&&(this.options.time.round&&i.startOf(this.options.time.round),o.push(i),r&&(this.firstTick=null!==this.firstTick?n.min(this.firstTick,i):i,this.lastTick=null!==this.lastTick?n.max(this.lastTick,i):i))},this):o=t,this.labelMoments.push(o)},this),this.options.time.min&&(this.firstTick=this.parseTime(this.options.time.min)),this.options.time.max&&(this.lastTick=this.parseTime(this.options.time.max)),this.firstTick=(this.firstTick||n()).clone(),this.lastTick=(this.lastTick||n()).clone()},buildTicks:function(n){this.ctx.save();var a=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=e.getValueOrDefault(this.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),r=e.getValueOrDefault(this.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(a,o,r);if(this.ctx.font=s,this.ticks=[],this.unitScale=1,this.scaleSizeInUnits=0,this.options.time.unit)this.tickUnit=this.options.time.unit||"day",this.displayFormat=this.options.time.displayFormats[this.tickUnit],this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,1);else{var l=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),h=this.tickFormatFunction(this.firstTick,0,[]),d=this.ctx.measureText(h).width,u=Math.cos(e.toRadians(this.options.ticks.maxRotation)),c=Math.sin(e.toRadians(this.options.ticks.maxRotation));d=d*u+a*c;var f=l/d;this.tickUnit="millisecond",this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.displayFormat=this.options.time.displayFormats[this.tickUnit];for(var g=0,m=i.units[g];g<i.units.length;){if(this.unitScale=1,e.isArray(m.steps)&&Math.ceil(this.scaleSizeInUnits/f)<e.max(m.steps)){for(var p=0;p<m.steps.length;++p)if(m.steps[p]>=Math.ceil(this.scaleSizeInUnits/f)){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,m.steps[p]);break}break}if(m.maxStep===!1||Math.ceil(this.scaleSizeInUnits/f)<m.maxStep){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,Math.ceil(this.scaleSizeInUnits/f));break}++g,m=i.units[g],this.tickUnit=m.name;var b=this.firstTick.diff(this.getMomentStartOf(this.firstTick),this.tickUnit,!0),v=this.getMomentStartOf(this.lastTick.clone().add(1,this.tickUnit)).diff(this.lastTick,this.tickUnit,!0);this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0)+b+v,this.displayFormat=this.options.time.displayFormats[m.name]}}var y;if(this.options.time.min?y=this.getMomentStartOf(this.firstTick):(this.firstTick=this.getMomentStartOf(this.firstTick),y=this.firstTick),!this.options.time.max){var x=this.getMomentStartOf(this.lastTick);0!==x.diff(this.lastTick,this.tickUnit,!0)&&(this.lastTick=this.getMomentStartOf(this.lastTick.add(1,this.tickUnit)))}this.smallestLabelSeparation=this.width,e.each(this.chart.data.datasets,function(t,e){for(var i=1;i<this.labelMoments[e].length;i++)this.smallestLabelSeparation=Math.min(this.smallestLabelSeparation,this.labelMoments[e][i].diff(this.labelMoments[e][i-1],this.tickUnit,!0))},this),this.options.time.displayFormat&&(this.displayFormat=this.options.time.displayFormat),this.ticks.push(this.firstTick.clone());for(var k=1;k<=this.scaleSizeInUnits;++k){var _=y.clone().add(k,this.tickUnit);if(this.options.time.max&&_.diff(this.lastTick,this.tickUnit,!0)>=0)break;k%this.unitScale===0&&this.ticks.push(_)}var S=this.ticks[this.ticks.length-1].diff(this.lastTick,this.tickUnit);(0!==S||0===this.scaleSizeInUnits)&&(this.options.time.max?(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.ticks[0],this.tickUnit,!0)):(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0))),this.ctx.restore()},getLabelForIndex:function(t,e){var i=this.chart.data.labels&&t<this.chart.data.labels.length?this.chart.data.labels[t]:"";return"object"==typeof this.chart.data.datasets[e].data[0]&&(i=this.getRightValue(this.chart.data.datasets[e].data[t])),this.options.time.tooltipFormat&&(i=this.parseTime(i).format(this.options.time.tooltipFormat)),i},tickFormatFunction:function(t,i,n){var a=t.format(this.displayFormat),o=this.options.ticks,r=e.getValueOrDefault(o.callback,o.userCallback);return r?r(a,i,n):a},convertTicksToLabels:function(){this.tickMoments=this.ticks,this.ticks=this.ticks.map(this.tickFormatFunction,this)},getPixelForValue:function(t,e,i,n){var a=t&&t.isValid&&t.isValid()?t:this.getLabelMoment(i,e);if(a){var o=a.diff(this.firstTick,this.tickUnit,!0),r=o/this.scaleSizeInUnits;if(this.isHorizontal()){var s=this.width-(this.paddingLeft+this.paddingRight),l=(s/Math.max(this.ticks.length-1,1),
s*r+this.paddingLeft);return this.left+Math.round(l)}var h=this.height-(this.paddingTop+this.paddingBottom),d=(h/Math.max(this.ticks.length-1,1),h*r+this.paddingTop);return this.top+Math.round(d)}},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickMoments[t],null,null,e)},getValueForPixel:function(t){var e=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),i=(t-(this.isHorizontal()?this.left+this.paddingLeft:this.top+this.paddingTop))/e;return i*=this.scaleSizeInUnits,this.firstTick.clone().add(n.duration(i,this.tickUnit).asSeconds(),"seconds")},parseTime:function(t){return"string"==typeof this.options.time.parser?n(t,this.options.time.parser):"function"==typeof this.options.time.parser?this.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?n(t):t.isValid&&t.isValid()?t:"string"!=typeof this.options.time.format&&this.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),this.options.time.format(t)):n(t,this.options.time.format)}});t.scaleService.registerScaleType("time",o,a)}},{moment:6}]},{},[7]);

function colorAut() {
  return Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251);
}

function opcion(tituloX, tituloY) {
  return {
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: tituloX,
          fontColor: "#0A1842",
          fontSize: 22,
          fontStyle: 'bold'
        }
      }]
      // yAxes: [{
      //   scaleLabel: {
      //     display: true,
      //     labelString: tituloY,
      //     fontColor: "#0A1842",
      //     fontSize: 16,
      //     fontStyle: 'bold'
      //   }
      // }]
    }
  };
}

function cargarGraficosChi(data, error) {
  var tabla = {
    '0.01': 21.6660,
    '0.025': 19.0228,
    '0.05': 16.9190,
    '0.1': 14.6837
  }
  var vaChi = tabla[error]
  var figFinal = document.getElementById("grafico-final");
  var barChart
  var lineChart
  var daSet = []
  var datos
  var col, col2
  var fig
  var npi
  var sem = []
  var chi = []
  var chiError = []

  each(data, (el, key) => {
    fig = document.getElementById("grafico-" + key);
    col = colorAut()
    col2 = colorAut()
    npi = el.valornpi
    sem.push(el.semilla)
    chi.push(el.valorChi)
    chiError.push(vaChi)

    // daSet.push({
    //   label: "Valor de Chi" + (key + 1),
    //   data: el.frecuencia.map(x => (((x - el.valornpi) ** 2) / el.valornpi)),
    //   borderColor: 'rgba(' + col + ', 1)',
    //   borderWidth: 1.5,
    //   backgroundColor: 'rgba(' + col + ', 0.2)',
    //   hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
    // })
    datos = {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      datasets: [{
        label: "Frecuencia Esperada",
        data: [npi, npi, npi, npi, npi, npi, npi, npi, npi, npi],
        borderColor: 'rgba(' + col2 + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col2 + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
      },{
        label: "Frecuencia Observada",
        data: el.frecuencia,
        borderColor: 'rgba(' + col + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
      }]
    }

    barChart = new Chart(fig, {
      type: 'line',
      data: datos,
      options: opcion("Dígitos", "Frecuencia de dígitos")
    });
  });

  lineChart = new Chart(figFinal, {
    type: 'line',
    data: {
      labels: sem,
      datasets: [{
        label: "Valor de Chi",
        data: chi,
        borderColor: 'rgba(' + col2 + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col2 + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
      }, {
        label: "Valor de Error",
        data: chiError,
        borderColor: 'rgba(' + col + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
      }]
    },
    options: opcion("Semilla", "Valores de Chi")
  })
}

//console.log(inv.exp1[0].detalleCorrida[0].dia)
function cargarGraficosInvPar(data) {
  //var lon = Object.keys(inv).length
  i=0
  for (key in data){
    i = i + 1
    pepe(data[key], i)
  }
}

function pepe(exps, numEx){
  var figFinal = document.getElementById("grafico-" + numEx);
  var corridas = []
  var fig
  var col, col2, col3
  var barChart
  var lineChart
  var datos
  var daSet = []
  var daS = []

  each(exps, (el, key) => {
    daSet.push(el.totVenta)
    daS.push(el.totPerdida)
    corridas.push(key+1)
    var lab = []
    var y = []
    var y2 = []
    var y3 = []
    each(el.detalleCorrida, (it, clav) => {
      lab.push(it.dia)
      y.push(it.demanda)
      y2.push(it.venta)
      y3.push(it.demInsat)
    })
    fig = document.getElementById("grafico-"+ numEx + "-"+ key);
    col = colorAut()
    col2 = colorAut()
    col3 = colorAut()
    datos = {
      labels: lab,
      datasets: [{
        label: "Demanda",
        data: y,
        borderColor: 'rgba(' + col + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
      },{
        label: "Venta",
        data: y2,
        borderColor: 'rgba(' + col2 + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col2 + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
      },{
        label: "Perdidas",
        data: y3,
        borderColor: 'rgba(' + col3 + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col3 + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col3 + ', 0.5)'
      }]
    }

    lineChart = new Chart(fig, {
      type: 'line',
      data: datos,
      options: opcion("Dias", "Perdidas")
    });
  })

  barChart = new Chart(figFinal, {
    type: 'bar',
    data: {
      labels: corridas,
      datasets: [{
        label: "Ventas", //+ (key + 1),
        data: daSet,
        borderColor: 'rgba(' + col + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
      },{
          label: "Perdidas", //+ (key + 1),
          data: daS,
          borderColor: 'rgba(' + col2 + ', 1)',
          borderWidth: 1.5,
          backgroundColor: 'rgba(' + col2 + ', 0.2)',
          hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
      }]
    },
    options: opcion("Corridas", "Ventas y Perdidas")
  })
}


var req = new XMLHttpRequest()
var newInfo = document.getElementById('newInfo')
var forms = Array.prototype.slice.apply(document.getElementsByTagName('form')).map(
  x => ({
    id: x.dataset.id,
    form: x,
    inputs: Array.prototype.slice.apply(x).map(inp => inp),
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



// list-toggle


let menu = document.querySelector('.menu__content')
document.getElementById('linkIndex').addEventListener('click',e=>{e.preventDefault();window.scrollTo(0, 0);})
let tg = document.querySelector('.toggle')
tg.addEventListener('click',e=>{
  tg.classList.toggle('active')
  menu.classList.toggle('active')
})


// const modal = (head, body, foot) => {
//   if (typeof head == 'string')
//     return newComponentHTLM({
//       el: 'div',
//       attrs: [{name: 'class', val: 'modal-content'}],
//       child:[{
//         el: 'div',
//         attrs: [{name: 'class', val: 'modal'}],
//         child: [{
//           el: 'div',
//           attrs: [{name: 'class', val: 'modal-head'}],
//           child: [{el: 'h1',text: head}]
//         },{
//           el: 'div',
//           attrs: [{name: 'class', val: 'modal-body'}],
//           child: [body]
//         },{
//           el: 'div',
//           attrs: [{name: 'class', val: 'modal-foot'}],
//           child: foot
//         }]
//       }]

//     })
//   else
//     throw new Error('El nombre del modal debe ser una cadena')
// }

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

function tabs(){
  let btnTab = Array.prototype.slice.apply(document.querySelectorAll('.tab__head'))
  let arrBtnTab = btnTab.map(x=>Array.prototype.slice.apply(x.childNodes)
                    .filter(x=>x.nodeName!='#text'))
  let arrTabItems = Array.prototype.slice.apply(document.querySelectorAll('.tab'))
  .map(x=>Array.prototype.slice.apply(x.childNodes)
                    .filter(x=>(x.className!='tab__head' && x.nodeName!='#text')))
  arrBtnTab.forEach(x=>x[0].classList.add('active'))
  arrTabItems.forEach(x=>x[0].classList.add('active'))
  btnTab.forEach(el=>el.addEventListener('click',e => {
    let btn = e.target
    let i =btnTab.indexOf(btn.parentElement)
    let btns= arrBtnTab[i]
    btns.forEach(elm=>elm.classList.remove('active'))
    btn.classList.toggle('active')
    arrTabItems[i].forEach(item=>item.classList.remove('active'))
    arrTabItems[i][btns.indexOf(btn)].classList.toggle('active')
}))
}


// .tab.w-92.m-auto
//   .tab__head
//     button Caso 1
//     button Caso 2
//     button Caso 3
//   .tab__item
//     h3 Caso 1
//     p Cualquier yerba de contenido...
//   .tab__item
//     h3 Caso 2
//     p Cualquier yerba de contenido...
//   .tab__item
//     h3 Caso 3
//     p Cualquier yerba de contenido...
