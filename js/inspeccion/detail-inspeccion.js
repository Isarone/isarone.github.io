
document.querySelector("#btnNuevo").addEventListener("click", showModal);
const photo = document.querySelector('#photo');
const camera = document.querySelector('#camera');
camera.addEventListener('change', function (e) {
    photo.src = URL.createObjectURL(e.target.files[0]);
});

function showModal ()  {
    console.log("entro")
    const tabActive = document.querySelector(".nav .nav-link.active")?.dataset.text;
    if (!tabActive) return;

    if (tabActive === "observacion") {
        document.querySelector("#btnNuevaObservacion").click();
    }

}