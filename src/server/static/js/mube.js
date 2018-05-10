var req = new XMLHttpRequest();
var solictar = (url, send, f)=>{req.open("POST", url, true);req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");req.send(JSON.stringify(send)); req.onload = f};
var success = f=>{if (req.status >= 200 && req.status <= 400) { f(req.responseText);} else{}}
document.getElementById('enviar').addEventListener('click', ajax)
//document.getElementById('pe').addEventListener('click', pe)
// $(function() {
//   $('button').click(function() {
//     //var user = $('#txtUsername').val();
// 		//var pass = $('#txtPassword').val();
//     $.ajax({
//       url: '/test',
//       contentType: 'application/json; charset=utf-8',
//       data: JSON.stringify({
//         user: 'pepe',
//         password: 'tio'
//       }),//$('form').serialize(),
//       type: 'POST',
//       dataType: 'json',

//       success: function(response) {
//         console.log(response);
//       },
//       error: function(error) {
//         console.log(error);
//       }
//     });
//     // }), function(data) {
//     //   $("#resultado").text(data);
//     // };
//   });
// });
// function reqListener(){
//   console.log(this.responseText);
// }
// request.addEventListener('send', reqListener)

function ajax(){
  solictar('/test', {user: 'pepe', password: 'tio'}, success(data=>{
    document.getElementById('resultado')
    .innerHTML = (data).toString()
  }));
}
//   request.open('POST', 'http://192.168.0.19:5555/test', true)
//   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');// charset=UTF-8');
//   request.onload = function() {
//     if (request.status >= 200 && request.status < 400) {
//       // Success!
//       var data = JSON.parse(request.responseText);
//       document.getElementById('resultado').innerHTML = request.responseText//stringify(request.responseText)
//     } else {
//       // We reached our target server, but it returned an error

//     }
//   };
// //var data = {'pe': 25};
//   request.send()

// function pe(){
//   $.ajax({
//     type: 'POST',
//     url: '/test',
//     data: JSON.stringify({
//       mama: "erd",
//       jesu: "diosito"
//     }),
//     success: function(data){
//       console.log(data)
//     }
//   })
// //   request.open('POST', 'http://192.168.0.19:5555/test', true)
// //   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');// charset=UTF-8');
// //   //request.send(JSON.stringify({pepe: 263}));
// //   request.send("vamos");
// }
// function pe(){
//   $.ajax({
//       url: '/test',
//       data: {
//         dada: "papap"
//       },
//       type: "POST",
//       headers: {
//           'Content-type': 'application/x-www-form-urlencoded'
//       }
//   });
  //   success : function(response){
  //       alert("funciona bien");
  //   },
  //   error: function(error){
  //       alert("No funciona");
  //   },
  //   dataType: 'json'
  // });
