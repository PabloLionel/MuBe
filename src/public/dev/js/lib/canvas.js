function colorAut() {
  return Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251);
}

function armarDataset(etiq, datos, color){
  return {
    label: etiq,
    data: datos,
    borderColor: 'rgba(' + color + ', 1)',
    borderWidth: 1.5,
    backgroundColor: 'rgba(' + color + ', 0.2)',
    hoverBackgroundColor: 'rgba(' + color + ', 0.5)'
  }
}

function opcion(tituloX, tituloY) {
  return {
    responsive: false,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: tituloX,
          fontColor: "#0A1842",
          fontSize: 16,
          fontStyle: 'bold'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: tituloY,
          fontColor: "#0A1842",
          fontSize: 16,
          fontStyle: 'bold'
        }
      }]
    }
  };
}

function graficarTodo(tipo, etiqueta, dataSet, disenio){
  return {
    type: tipo,
    data: {
      labels: etiqueta,
      datasets: dataSet
    },
    options: disenio
  }
}

function cargarGraficosChi(data, error) {
  var tabla = {
    '0.01': 21.6660,
    '0.025': 19.0228,
    '0.05': 16.9190,
    '0.1': 14.6837
  }
  var vaChi = tabla[error]
  var figChiFinal = document.getElementById("grafico-final");
  var lineChiFrec
  var lineChiFin
  //var daSet = []
  var datosChiFin = []
  var datosFrec = []
  var npi
  var sem = []
  var chi = []
  var chiError = []
  var etiquet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  each(data, (el, key) => {
    figChiFrec = document.getElementById("grafico-" + key)
    npi = el.valornpi
    sem.push(el.semilla)
    chi.push(el.valorChi)
    chiError.push(vaChi)

    datosFrec = [
      armarDataset('Frecuencia Esperada', [npi, npi, npi, npi, npi, npi, npi, npi, npi, npi], colorAut()),
      armarDataset('Frecuencia Observada', el.frecuencia, colorAut())
    ]
    //daSet.push(armarDataset('Valor de Chi '+(key+1), el.frecuencia.map(x => (((x - el.valornpi) ** 2) / el.valornpi)), colorAut()))
    //lineChiFrec = new Chart(figChiFrec, graficarTodo('line', etiquet, [armarDataset('Frecuencia Esperada', el.frecuencia, colorAut())], opcion("Dígitos", "Frecuencia de dígitos")))
    lineChiFrec = new Chart(figChiFrec, graficarTodo('line', etiquet, datosFrec, opcion("Dígitos", "Frecuencia de dígitos")))
  })
  datosChiFin = [
    armarDataset('Valor de Chi', chi, colorAut()),
    armarDataset('Valor de Error', chiError, colorAut())
  ]
  //lineChiFin = new Chart(figChiFinal, graficarTodo('line', sem, daSet, opcion("Dígitos", "Valores de Chi")))
  lineChiFin = new Chart(figChiFinal, graficarTodo('line', sem, datosChiFin, opcion("Semillas", "Valores de Chi")))
}

function cargarGraficosInvPar(data) {
  function pepe(exps, numEx){
    var figFinal = document.getElementById("grafico-" + numEx);
    var corridas = []
    var datosFin = []
    var barInvFinal
    var lineInvCorrida
    var daSet = []
    var daS = []

    each(exps, (el, key) => {
      figCorrida = document.getElementById("grafico-"+ numEx + "-"+ key)
      var datosCorrida = []
      var lab = []
      var y = []
      var y2 = []
      var y3 = []

      daSet.push(el.totVenta)
      daS.push(el.totPerdida)
      corridas.push(key+1)

      each(el.detalleCorrida, (it, clav) => {
        lab.push(it.dia)
        y.push(it.demanda)
        y2.push(it.venta)
        y3.push(it.demInsat)
      })

      datosCorrida = [
        armarDataset('Demanda', y, colorAut()),
        armarDataset('Venta', y2, colorAut()),
        armarDataset('Perdidas', y3, colorAut())
      ]

      lineInvCorrida = new Chart(figCorrida, graficarTodo('line', lab, datosCorrida, opcion("Dias", "Perdidas")))
    })
    datosFin = [armarDataset('Ventas', daSet, colorAut()), armarDataset('Perdidas', daS, colorAut())]

    barInvFinal = new Chart(figFinal, graficarTodo('bar', corridas, datosFin, opcion("Corridas", "Ventas y Perdidas")))
  }

  i=0
  for (key in data){
    i = i + 1
    pepe(data[key], i)
  }
}

function cargarGraficosTColas(data) {
  function graficarTColas(exp, nExp){
    var figExps = document.getElementById("graficoTC-"+ nExp);
    var barExps
    var datosCorridas = []
    var cors = []
    var mTC = []
    var mTE = []

    each(exp, (el, key) => {
      cors.push(el.numCorrida)
      mTC.push(el.mediaTC)
      mTE.push(el.mediaTE)
    })

    datosCorridas = [armarDataset('Media de Clientes en Cola', mTC, colorAut()), armarDataset('Media T. en la Cola', mTE, colorAut())]

    barExps = new Chart(figExps, graficarTodo('bar', cors, datosCorridas, opcion('Corridas', 'Media TC y TE')))
  }

  var figSimu = document.getElementById("graficoTC-simu")
  var barSimu
  var datos = []
  var expTodos = []
  var mExpTE = []
  var mExpTW = []

  i=0
  for (key in data){
    i = i + 1
    expTodos.push(i)
    mExpTE.push(data[key].mediaExpTE)
    mExpTW.push(data[key].mediaExpTW)
    graficarTColas(data[key].corrida, i)
  }

  datos = [armarDataset('Media T. en la Cola', mExpTE, colorAut()), armarDataset('Media T. Permanencia', mExpTW, colorAut())]

  barSimu = new Chart(figSimu, graficarTodo('bar', expTodos, datos, opcion('Experimentos', 'Media TE y TW')))
}
// function colorAut() {
//   return Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251);
// }

// function opcion(tituloX, tituloY) {
//   return {
//     scales: {
//       xAxes: [{
//         scaleLabel: {
//           display: true,
//           labelString: tituloX,
//           fontColor: "#0A1842",
//           fontSize: 22,
//           fontStyle: 'bold'
//         }
//       }]
//       // yAxes: [{
//       //   scaleLabel: {
//       //     display: true,
//       //     labelString: tituloY,
//       //     fontColor: "#0A1842",
//       //     fontSize: 16,
//       //     fontStyle: 'bold'
//       //   }
//       // }]
//     }
//   };
// }

// function cargarGraficosChi(data, error) {
//   var tabla = {
//     '0.01': 21.6660,
//     '0.025': 19.0228,
//     '0.05': 16.9190,
//     '0.1': 14.6837
//   }
//   var vaChi = tabla[error]
//   var figFinal = document.getElementById("grafico-final");
//   var barChart
//   var lineChart
//   var daSet = []
//   var datos
//   var col, col2
//   var fig
//   var npi
//   var sem = []
//   var chi = []
//   var chiError = []

//   each(data, (el, key) => {
//     fig = document.getElementById("grafico-" + key);
//     col = colorAut()
//     col2 = colorAut()
//     npi = el.valornpi
//     sem.push(el.semilla)
//     chi.push(el.valorChi)
//     chiError.push(vaChi)

//     // daSet.push({
//     //   label: "Valor de Chi" + (key + 1),
//     //   data: el.frecuencia.map(x => (((x - el.valornpi) ** 2) / el.valornpi)),
//     //   borderColor: 'rgba(' + col + ', 1)',
//     //   borderWidth: 1.5,
//     //   backgroundColor: 'rgba(' + col + ', 0.2)',
//     //   hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
//     // })
//     datos = {
//       labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       datasets: [{
//         label: "Frecuencia Esperada",
//         data: [npi, npi, npi, npi, npi, npi, npi, npi, npi, npi],
//         borderColor: 'rgba(' + col2 + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col2 + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
//       },{
//         label: "Frecuencia Observada",
//         data: el.frecuencia,
//         borderColor: 'rgba(' + col + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
//       }]
//     }

//     barChart = new Chart(fig, {
//       type: 'line',
//       data: datos,
//       options: opcion("Dígitos", "Frecuencia de dígitos")
//     });
//   });

//   lineChart = new Chart(figFinal, {
//     type: 'line',
//     data: {
//       labels: sem,
//       datasets: [{
//         label: "Valor de Chi",
//         data: chi,
//         borderColor: 'rgba(' + col2 + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col2 + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
//       }, {
//         label: "Valor de Error",
//         data: chiError,
//         borderColor: 'rgba(' + col + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
//       }]
//     },
//     options: opcion("Semilla", "Valores de Chi")
//   })
// }

// //console.log(inv.exp1[0].detalleCorrida[0].dia)
// function cargarGraficosInvPar(data) {
//   //var lon = Object.keys(inv).length
//   i=0
//   for (key in data){
//     i = i + 1
//     pepe(data[key], i)
//   }
// }

// function pepe(exps, numEx){
//   var figFinal = document.getElementById("grafico-" + numEx);
//   var corridas = []
//   var fig
//   var col, col2, col3
//   var barChart
//   var lineChart
//   var datos
//   var daSet = []
//   var daS = []

//   each(exps, (el, key) => {
//     daSet.push(el.totVenta)
//     daS.push(el.totPerdida)
//     corridas.push(key+1)
//     var lab = []
//     var y = []
//     var y2 = []
//     var y3 = []
//     each(el.detalleCorrida, (it, clav) => {
//       lab.push(it.dia)
//       y.push(it.demanda)
//       y2.push(it.venta)
//       y3.push(it.demInsat)
//     })
//     fig = document.getElementById("grafico-"+ numEx + "-"+ key);
//     col = colorAut()
//     col2 = colorAut()
//     col3 = colorAut()
//     datos = {
//       labels: lab,
//       datasets: [{
//         label: "Demanda",
//         data: y,
//         borderColor: 'rgba(' + col + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
//       },{
//         label: "Venta",
//         data: y2,
//         borderColor: 'rgba(' + col2 + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col2 + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
//       },{
//         label: "Perdidas",
//         data: y3,
//         borderColor: 'rgba(' + col3 + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col3 + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col3 + ', 0.5)'
//       }]
//     }

//     lineChart = new Chart(fig, {
//       type: 'line',
//       data: datos,
//       options: opcion("Dias", "Perdidas")
//     });
//   })

//   barChart = new Chart(figFinal, {
//     type: 'bar',
//     data: {
//       labels: corridas,
//       datasets: [{
//         label: "Ventas", //+ (key + 1),
//         data: daSet,
//         borderColor: 'rgba(' + col + ', 1)',
//         borderWidth: 1.5,
//         backgroundColor: 'rgba(' + col + ', 0.2)',
//         hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
//       },{
//           label: "Perdidas", //+ (key + 1),
//           data: daS,
//           borderColor: 'rgba(' + col2 + ', 1)',
//           borderWidth: 1.5,
//           backgroundColor: 'rgba(' + col2 + ', 0.2)',
//           hoverBackgroundColor: 'rgba(' + col2 + ', 0.5)'
//       }]
//     },
//     options: opcion("Corridas", "Ventas y Perdidas")
//   })
// }

