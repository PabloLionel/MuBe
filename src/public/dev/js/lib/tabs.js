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
