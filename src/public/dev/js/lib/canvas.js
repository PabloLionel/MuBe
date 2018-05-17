function colorAut() {
  return Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251) + ', ' + Math.floor(Math.random() * 251);
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

function cargarGraficosChi(data) {
  var figFinal = document.getElementById("grafico-final");
  var barChart
  var lineChart
  var daSet = []
  var datos
  var col
  var fig

  each(data, (el, key) => {
    fig = document.getElementById("grafico-" + key);
    col = colorAut()
    daSet.push({
      label: "Valor de Chi" + (key + 1),
      data: el.frecuencia.map(x => (((x - el.valornpi) ** 2) / el.valornpi)),
      borderColor: 'rgba(' + col + ', 1)',
      borderWidth: 1.5,
      backgroundColor: 'rgba(' + col + ', 0.2)',
      hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
    })
    datos = {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      datasets: [{
        label: "Frecuencias",
        data: el.frecuencia,
        borderColor: 'rgba(' + col + ', 1)',
        borderWidth: 1.5,
        backgroundColor: 'rgba(' + col + ', 0.2)',
        hoverBackgroundColor: 'rgba(' + col + ', 0.5)'
      }]
    }

    barChart = new Chart(fig, {
      type: 'bar',
      data: datos,
      options: opcion("Dígitos", "Frecuencia de dígitos")
    });
  });

  lineChart = new Chart(figFinal, {
    type: 'line',
    data: {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      datasets: daSet
    },
    options: opcion("Dígitos", "Valores de Chi")
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
