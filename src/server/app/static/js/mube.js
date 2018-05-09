var request = new XMLHttpRequest();
document.getElementById('ajax').addEventListener('click', ajax)

function ajax(){
  request.open('POST', 'http://192.168.0.19:5555/test', true)
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      document.getElementById('resultado').innerHTML = request.responseText//stringify(request.responseText)
    } else {
      // We reached our target server, but it returned an error

    }
  };
  request.send({'pepe': 125});
}

// request.onerror = function() {
//   // There was a connection error of some sort
// };
