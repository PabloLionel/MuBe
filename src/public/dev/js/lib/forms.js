let resetFormTablero = document.getElementsByClassName('resetFormTablero')
let forms = Array.prototype.slice.apply(document.getElementsByTagName('form'))
let formsArr = Array.prototype.slice.apply(document.getElementsByTagName('form')).map(el=>Array.prototype.slice.apply(el).map(x=>x))
let nsem = document.getElementById('semillas');//numero de semillas
let inputsNSem = document.getElementById('nsemillas');//nuevos imputs
let tableroCalcalRanking = document.getElementById('calRanking')
let cajaDeInputs = addInputs(1,'semilla',inputsNSem);
let deTablero = formsArr[0]
let obserMod = document.getElementById('obserMod')
let obserCant = document.getElementById('obserCant')
let obserB = document.getElementById('obserB')
let obserErr = document.getElementById('obserErr')
let obserSem = document.getElementById('obserSem')
// console.log(deTablero, cajaDeInputs.map(x=>x.lenght>0?parseInt(x.value):0))
nsem.addEventListener('click', e=>{
  cajaDeInputs = addInputs(e.target.value,'semilla',inputsNSem)
});
nsem.addEventListener('keyup', e=>{
  cajaDeInputs = addInputs(e.target.value,'semilla',inputsNSem)
});

tableroCalcalRanking.addEventListener('click',e=>{
  e.preventDefault()
  newRanking(document.getElementById('newRanking'),testChi(deTablero, deTablero, deTablero,cajaDeInputs.map(x=>x.lenght>0?parseInt(x.value):0),deTablero))
})
forms[0].onfocus = setInterval(()=>{
    obserMod.innerHTML = deTablero[0].value
    obserCant.innerHTML = deTablero[1].value
    obserB.innerHTML = deTablero[2].value
    obserErr.innerHTML = deTablero[3].value
    obserSem.innerHTML = cajaDeInputs
  },5000)
Array.prototype.forEach.call(resetFormTablero, function(el){
  el.addEventListener('click',e=>{
    e.preventDefault();
    addInputs(1,'semilla',inputsNSem);
    e.target.parentElement.reset();
  })
});
