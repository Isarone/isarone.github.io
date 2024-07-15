window.localStorage.setItem("app-embedded", "on");

const cboOptions = document.getElementById("cboOptions");
const txtInput = document.getElementById("txtInput");

const getOptionsEmbedded = (value = "") => {
  const options = {
    1: "/bienestar-play",
    2: "/bienestar-en-vivo/?type=workshop",
    3: "/bienestar-en-vivo/?type=live-program",
    4: "/rutas",
    5: "/lista-rutas",
    6: "event:session-expire",
    7: "event:deep-link",
  };

  return options[value] || "";
};

const getUrl = () => {
  const option = cboOptions.value;
  let parametersToken = txtInput.value.trim();
  const pathBase = "https://web-test.estarbien.com.pe";
  const optionEmbedded = getOptionsEmbedded(option);
  const enlace = optionEmbedded.includes("?") ? "&" : "/?";

  if (!pathBase || !optionEmbedded || !parametersToken) {
    return "";
  }

  parametersToken = parametersToken.replace("/?", "").replace("token=", "");

  return `${pathBase}${optionEmbedded}${enlace}token=${parametersToken}`;
};

const getUrlBuildDev = () => {
  const option = cboOptions.value;
  let pathSecundaryWithParametersToken = txtInput.value.trim();
  const pathBase = "https://vkw5nj19-3000.brs.devtunnels.ms";

  return `${pathBase}${pathSecundaryWithParametersToken}`;
};

const events = (option) => {
  if (option === 6) {
    console.log("EMBEDDED-APP-SESSION-EXPIRED");
  } else if (option === 7) {
    const url = getUrlBuildDev();
    console.log(url);
    window.location.href = url;
  }
};

const isEvent = (option) => {
  const containtEvent =
    option.includes("Validation") || option.includes("DeepLink");
  return containtEvent;
};

const btn = document.getElementById("btnTest");
btn.addEventListener("click", function () {
  const option = cboOptions.value;
  const textOption = cboOptions.options[cboOptions.selectedIndex].text;
  if (isEvent(textOption)) return events(+option);

  const url = getUrl();
  if (!url) {
    alert("Seleccione una opción válida");
    return;
  }
  window.location.href = url;
});
