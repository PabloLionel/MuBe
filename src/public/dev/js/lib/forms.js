var resetFormTablero = document.getElementsByClassName('resetFormTablero')
var forms = Array.prototype.slice.apply(document.getElementsByTagName('form'))
var formsArr = Array.prototype.slice.apply(document.getElementsByTagName('form')).map(el=>Array.prototype.slice.apply(el).map(x=>x))
var nsem = document.getElementById('semillas');//numero de semillas
var inputsNSem = document.getElementById('nsemillas');//nuevos imputs
var tableroCalcalRanking = document.getElementById('calRanking')
var cajaDeInputs = addInputs(1,'semilla',inputsNSem);
var deTablero = formsArr[0]
var obserMod = document.getElementById('obserMod')
var obserCant = document.getElementById('obserCant')
var obserB = document.getElementById('obserB')
var obserErr = document.getElementById('obserErr')
var obserSem = document.getElementById('obserSem')
var newRan = document.getElementById('newRanking')

// console.log(deTablero, cajaDeInputs.map(x=>x.lenght>0?parseInt(x.value):0))
nsem.addEventListener('click', e=>{
  cajaDeInputs = addInputs(e.target.value,'semilla',inputsNSem)
});
nsem.addEventListener('keyup', e=>{
  cajaDeInputs = addInputs(e.target.value,'semilla',inputsNSem)
});
newRan.appendChild(newRanking(resultadoRancking.chicuadrado))//habilitar para front-end
tableroCalcalRanking.addEventListener('click',e=>{
  e.preventDefault()
  removeChilds(newRan)
  req.open('POST', '/testChi', true );
  req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  req.onload = ()=>{
    if (req.status >= 200 && req.status < 400){
      var request = JSON.parse(req.response)
      newRan.appendChild(newRanking(request.chicuadrado))
    }else{console.error('Error en la conexion! estado: ' + req.status)}
  }
  req.send( JSON.stringify({modulo: $modulo,cant: $cant,a: $a,semillas: $semillas,error: $error}) );
})
forms[0].onfocus = setInterval(()=>{
    obserMod.innerHTML = deTablero[0].value
    obserCant.innerHTML = deTablero[1].value
    obserB.innerHTML = deTablero[2].value
    obserErr.innerHTML = deTablero[3].value
    obserSem.innerHTML = cajaDeInputs.map(x=>!Number.isNaN(parseInt(x.value))?parseInt(x.value):0)
  },5000)
Array.prototype.forEach.call(resetFormTablero, function(el){
  el.addEventListener('click',e=>{
    e.preventDefault();
    addInputs(1,'semilla',inputsNSem);
    e.target.parentElement.reset();
  })
});
