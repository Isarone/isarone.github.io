function session() {
  console.log("EMBEDDED-APP-SESSION-EXPIRED");
}

document.getElementById("btnTest").addEventListener("click", session);

session();
