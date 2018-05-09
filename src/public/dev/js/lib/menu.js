let menu = document.querySelector('.menu__content')
let tg = document.querySelector('.toggle')
tg.addEventListener('click',e=>{
  tg.classList.toggle('active')
  menu.classList.toggle('active')
})
