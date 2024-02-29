const div = document.querySelector("#divNavegador");
let navegador = navigator.userAgent;
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  console.log("Estás usando un dispositivo móvil!!");
  div.innerHTML = "Es movil";
} else {
  console.log("No estás usando un móvil");
  div.innerHTML = "NO es movil";
}
