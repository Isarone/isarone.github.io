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

const btn = document.getElementById("btnTest");
btn.addEventListener("click", function () {
  const url = getUrl();
  if (!url) {
    alert("Seleccione una opción válida");
    return;
  }
  window.location.href = url;
});
