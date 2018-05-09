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
