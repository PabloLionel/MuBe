function testChi(mod, can, ban, semis, err){
  var chi = {
    modulo: mod, //1000,
    cant: can, //3,
    a: ban,//13,
    semillas: semis,//[255, 362, 124, 123],
    error: err//0.1
  }
  return consultaServer('/testChi', chi);
}

function ruleta(mod, can, ban, semis){
  var rule = {
    modulo: mod, //1000,
    cant: can, //3,
    a: ban,//13,
    semillas: semis//[255, 362, 124, 123],
  }
  return consultaServer('/ruleta', rule)
}

function indice(mod, can, ban, semis, err){
  var ind = {
    modulo: mod, //1000,
    cant: can, //3,
    a: ban,//13,
    semillas: semis,//[255, 362, 124, 123],
    error: err//0.1
  }
  return consultaServer('/indice', ind)
}

function normal(mod, can, ban, semi, x, px, mu, sigma, stockPedi, cantPedi){
  var norm = {
    modulo: mod, //1000,
    cant: can, //3,
    a: ban,//13,
    semillas: semi,//[255, 362, 124, 123],
    x: x,
    px: px,
    mu: mu,
    sigma: sigma,
    stockPedido: stockPedi,
    cantPedido: cantPedi
  }
  return consultaServer('/normal', norm)
}

function invParcial(mod, can, ban, semi, x1, px1, x2, px2, stockPedi){
  var inv = {
    modulo: mod,
    cant: can,
    a: ban,
    semillas: semi,
    x1: x1,
    px1: px1,
    x2: x2,
    px2: px2,
    dic: stockPedi
  }
  return consultaServer('/inventarioParcial', inv)
}

function invPoisson(mod, can, ban, semi, x1, px1, lamb, stockPedi, cantPedi){
  var pois = {
    modulo: mod,
    cant: can,
    a: ban,
    semillas: semi,
    x1: x1,
    px1: px1,
    lambda: lamb,
    px2: px2,
    stockPedido: stockPedi,
    cantPedido: cantPedi
  }
}
// var req = new XMLHttpRequest();
//   var solicitar = (url, send, f)=>{req.open('POST', url, true); req.setRequestHeader("Content-Type", "application/json; charset=UTF-8"); req.send(JSON.stringify(send));req.onload = f;}
//   var success = function(f){ if (req.status >= 200 && req.status <= 400) {f(console.log(req.responseText))} else {}};
//req.response.responseText
// function consultaServer(ur, sen){
//   var req = new XMLHttpRequest();
//   var solicitar = (url, send, f)=>{req.open('POST', url, true); req.setRequestHeader("Content-Type", "application/json; charset=UTF-8"); req.send(JSON.stringify(send));req.onload = f;}
//   var success = function(f){ if (req.status >= 200 && req.status <= 400) {f(req.response.responseText)} else {}};
//   var resul;
//   console.log(req);
//   //console.log(typeof resul);
//   return solicitar(ur, sen, success(function (sen){JSON.parse(sen)})); //JSON.parse(resul);
// }

function consultaServer(ur, dat){
  //var req = new XMLHttpRequest();
  var solicitar = (url, send)=>{
    var result = {};
    $.ajax({
      url: url,
      type: 'POST',
      data: JSON.stringify(send),
      success: function(response){
        result = Object.assign(result, response)
      },
      contentType: "application/json",
      dataType: 'json'
    })
    return result
  }
  //var success = function(f){ if (req.status >= 200 && req.status <= 400) {f(req.response.responseText)} else {}};
  //console.log(req);
  //console.log(typeof resul);
  return solicitar(ur, dat)
}
//document.getElementById('resultado').innerHTML = JSON.parse(consultaServer('/testChi', chi))//.toString()

// var mube = new MuBe()
// console.log(mube.testChi())
//document.getElementById('res').innerHTML = (mube.testChi()).toString()
// function aja(fu){
//   return mube.solicitar('POST', fu, mube.success(data=> ))
// }
// var solictar = (url, send, f)=>{};
// var success = f=>{if (req.status >= 200 && req.status <= 400) { f(req.responseText);} else{}}



// function ajax(){
//   solictar('/test', {user: 'pepe', password: 'tio'}, success(data=>{
//     document.getElementById('resultado')
//     .innerHTML = (data).toString()
//   }));
// }
// }
// document.getElementById('enviar').addEventListener('click', ajax)
