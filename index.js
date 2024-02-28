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

function isWebView() {
  const htmlEl = document.getElementsByTagName("html")[0];
  const bodyEl = document.getElementsByTagName("body")[0];

  const oldHtmlHeight = htmlEl.style.height;
  const oldBodyHeight = bodyEl.style.height;

  htmlEl.style.height = "100vh";
  bodyEl.style.height = "100%";

  const webViewMode =
    document.documentElement.clientHeight ===
    document.documentElement.scrollHeight;

  // restore height
  htmlEl.style.height = oldHtmlHeight;
  bodyEl.style.height = oldBodyHeight;

  return webViewMode;
}
const divWebView = document.querySelector("#divNWebView");
if (isWebView()) {
  console.log("Estás dentro de un webview");
  divWebView.innerHTML = "Estas dentro de un webview";
} else {
  console.log("NO Estás dentro de un webview");
  divWebView.innerHTML = "NO es Webview";
}
