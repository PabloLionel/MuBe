document.getElementById('resetFormTablero').addEventListener('click',e=>{
  e.preventDefault();
  document.getElementById('frm_prueba').reset();
})
var nsem = document.getElementById('semillas');//numero de semillas
var inputsNSem = document.getElementById('nsemillas');//nuevos imputs
nsem.addEventListener('click', e=>{
  addInputs(e.target.value,'semilla',inputsNSem)
});
nsem.addEventListener('keyup', e=>{
  addInputs(e.target.value,'semilla',inputsNSem)
});
addInputs(1,'semilla',inputsNSem);
