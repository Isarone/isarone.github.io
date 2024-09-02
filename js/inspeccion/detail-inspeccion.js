﻿const photo = document.querySelector("#photo");
const camera = document.querySelector("#camera");
const btnNuevo = document.querySelector("#btnNuevo");
btnNuevo.addEventListener("click", showModal);
camera.addEventListener("change", function (e) {
  photo.src = URL.createObjectURL(e.target.files[0]);
});

function showModal() {
  camera.click();
  const tabActive = document.querySelector(".nav .nav-link.active")?.dataset
    .text;
  if (!tabActive) return;

  if (tabActive === "observacion") {
    document.querySelector("#btnNuevaObservacion").click();
  }
}