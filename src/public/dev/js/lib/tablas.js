function newTableChi(frecuencia,valornpi){//tabla para el ranquing
  let newTable = newElement('table')
  //cabecera de la tabla
  let thead = newElement('thead');
  thead.innerHTML += '<tr> <th> </th> <th>f<sub>i</sub></th> <th>np<sub>i</sub></th> <th>f<sub>i</sub>-np<sub>i</sub></th> <th>(&phi;<sub>i</sub>)&sup2;</th> <th>(&phi;<sub>i</sub>)&sup2;/np<sub>i</sub></th> </tr>';
  newTable.appendChild(thead)
  //cuerpo de la tabla
  let tbody = newElement('tbody');
  //contador para la primera fila:
  let j = 0;
  //configuracion de decimales:
  let decimales = 10000;
  //verificamos que sea un iterable
  if(!Array.isArray(frecuencia))
    frecuencia = Array.prototype.slice.apply(frecuencia);//de no serlo lo convertimos a array
  frecuencia.forEach(el=>{
    // 3.3. cargo el cuerpo de la tabla con los datos de la frecuencia.
    tbody.innerHTML += `
      <tr>
        <td>${j++}</td>
        <td>${el}</td>
        <td>${valornpi}</td>
        <td>${Math.round((el-valornpi)*decimales)/decimales}</td>
        <td>${Math.round(((el-valornpi)**2)*decimales)/decimales}</td>
        <td>${Math.round((((el-valornpi)**2)/valornpi)*decimales)/decimales}</td>
      </tr>
      `;
  })
  newTable.appendChild(tbody);
  let ctxTabre = newElement('div',[{
      name: 'class',
      val: 'table-container'
    }
  ]);
  ctxTabre.appendChild(newTable);
  return ctxTabre;
}
function newRanking(render, json){
  // removemos los hijos antes de actualizar
  removeChilds(render);
  // extraemos información de JSON
  let chi = json.chicuadrado;
  let frecuencias = chi.map(el=>el.frecuencia);
  let valornpis = chi.map(el=>el.valornpi);
  //para extraer cada elemento de chi
  let i=0;
  if(!Array.isArray(chi))
    chi = Array.prototype.slice.apply(chi);//de no serlo lo convertimos a array
  // 1. agrego informacion de todos los resultados:
  let info = newElement('div',[{name:'class',val:'ranking__info'}], 'algo');
  render.appendChild(info);
  // 2. genero la lista ordenada del ranking:
  var listado = newElement('ol', [{name: 'class', val: 'list'}])

  chi.forEach(el=>{
    // agrego controles por cada item en la lista:
    let li = newElement(
      'li',
      [{name: 'class',val: 'item'}],
      'Semilla utilizada: ' + chi.semilla + ' , Chi-Cuadrado estimado: ' + chi.valorChi + ' y fue ' + chi.aceptacion
    )
      li.appendChild(newElement('button',[{name:'class',val:'item__toggle'}],'+'))
      // 3.2. extraigo informacion de cada elemento de chi
      var frecuencia = frecuencias[i];
      var valornpi = valornpis[i];
      //e incrementamos el contador para la proxima iteracion:
      i++;
      // 3.1. con cada elemento del arreglo genero una nueva tabla.
      li.appendChild(newTableChi(frecuencia,valornpi));
      listado.appendChild(li);
  })
  render.appendChild(listado);
};
