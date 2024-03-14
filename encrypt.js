document.getElementById("btnTest").addEventListener("click", test);

function test() {
  var cadena = document.querySelector("#txtInput").value;
  document.querySelector("#output").innerHTML = cadena;
  console.log(cadena);
}
