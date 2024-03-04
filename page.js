const showStorageEmbedded = () => {
  return localStorage.getItem("app-embedded") || "none";
};

const setStorageEmbedded = () => {
  localStorage.setItem("app-embedded", "on");
};

const load = () => {
  setStorageEmbedded();
  const storage = showStorageEmbedded();
  document.querySelector("#storage").innerText = storage;
};

load();
