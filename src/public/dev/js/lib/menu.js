let menu = document.querySelector('.menu__content')
document.getElementById('linkIndex').addEventListener('click',e=>{e.preventDefault();window.scrollTo(0, 0);})
let tg = document.querySelector('.toggle')
tg.addEventListener('click',e=>{
  tg.classList.toggle('active')
  menu.classList.toggle('active')
})
