window.localStorage.setItem("app-embedded", "on");

const cboOptions = document.getElementById("cboOptions");
const txtInput = document.getElementById("txtInput");

const getOptionsEmbedded = (value = "") => {
  const options = {
    1: "/bienestar-play",
    2: "/bienestar-en-vivo",
    3: "/rutas",
    4: "/lista-rutas",
  };

  return options[value] || "";
};

const getUrl = () => {
  const option = cboOptions.value;
  let parametersToken = txtInput.value.trim();
  const pathBase = "https://web-test.estarbien.com.pe";
  const optionEmbedded = getOptionsEmbedded(option);

  if (!pathBase || !optionEmbedded || !parametersToken) {
    return "";
  }
  parametersToken = parametersToken.replace("/?", "").replace("token=", "");
  return `${pathBase}${optionEmbedded}/?token=${parametersToken}`;
};

const btn = document.getElementById("btnTest");
btn.addEventListener("click", function () {
  debugger;
  const url = getUrl();
  if (!url) {
    alert("Seleccione una opción válida");
    return;
  }
  window.location.href = url;
});
