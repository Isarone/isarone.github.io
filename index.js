function isMovil() {
  if ("maxTouchPoints" in window.navigator)
    return window.navigator.maxTouchPoints > 0;

  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") return !!mQ.matches;

  if ("orientation" in window) return true;

  return (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(
      window.navigator.userAgent
    ) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(window.navigator.userAgent)
  );
}

function detectWebView() {
  // Method #1
  if (window?.webkit?.messageHandlers) {
    return true;
  }
  // Method #2
  const webViewMode =
    window.document?.documentElement?.clientHeight ===
    window.document?.documentElement?.scrollHeight;
  return webViewMode;
}

const propertiesNavigator = () => {
  const uaParser = new UAParser(window.navigator.userAgent);
  const resultOS = uaParser.getOS();
  const result = uaParser.getResult();
  const device = result.device.vendor + " - " + result.device.model;
  const so = result.os.name;
  const navigator = result.browser.name;

  return {
    device,
    so,
    navigator,
  };
};

const isIOSAndroid = () => {
  const { so } = propertiesNavigator();
  return ["iOS", "Android"].includes(so);
};

// (function evaluateWebView() {
//   let osEl = document.querySelector("#os-text");
//   let deviceEl = document.querySelector("#device-text");
//   let webViewEl = document.querySelector("#web-view-text");
//   let navigatorEl = document.querySelector("#navigator-text");
//   const { device, so, navigator } = propertiesNavigator();

//   osEl.textContent = so;
//   deviceEl.textContent = device;
//   navigatorEl.textContent = navigator;
//   webViewEl.textContent = isMovil() && detectWebView() ? "Yes" : "No";
// })();

(function evaluateWebViewRedirect() {
  const parameter =
    isMovil() && isIOSAndroid() && detectWebView() ? "?webview=on" : "";
  const page = "page.html";
  const url = `${window.location.origin}/${page}${parameter}`;
  window.location.replace(`${url}`);
  
})();
