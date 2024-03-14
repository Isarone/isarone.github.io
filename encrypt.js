var cadena =
  'EMBEDDED-APP-HIPERVINCULO : {"accion": "LINK", "valor": "https://centrodemonitoreo.rimac.com/articles/comunicado-monitoreo-el-nino-costero-16-de-febrero-524146.html", "mensaje": ""}';

//  var cadena =
//   "i25Rxc3jSxV+VEJiFe+vAId08DY4hIVinCxbdNZrEiCd0B1i6zlb3HEaFvm3RN7CuH8PB8+2bU6ifH/jxV5jIoszD7eO36rKwpaRFr25ZXPQKrhfgNSUFyz2LN90KbBGWlUDe4W7pmtxx7ZZ9nbquBuaKF+kq5pb+xmBV2ojwweALW+83UI/VX7OysvK2a4UjfFMnUeKmaSQFIRCJeFrlUBv8MFI4j+C0/W6bqLU3kkJyjtkpvCSnOW9d+S1FQHdNurkugHn9PLCnAx7wZ4wbaTG79w42FdEQnVVY3rSPwlyaZguJgCzL2q8dsywxCfZWroPMdDiwcwgaeSLTWw93p0YZeh1osjOltCBWRTUnX9XF8DEF7RpRJA75Jbb2L1Qr8XDcj0SecTB2MHCbUu49PEb4Ek1gCYugImgsk59oaMIHnKrWrH+EQAKJE0+OUpkzS+YVMnG/0Wr/FZBhQ2snlFHH9fKU/8Pij+LgMZcllyYsu9Fr2N7Pw0WQkIXUX4zeIBna9tTYEm5pZldu/3b9SOS1c83bdsmCsvWI82cMJWH+8bwHirjpfKGtqLF5z3A4OAwqMBSr7Ih12IiCjNi45F6cdPWGU+4TXzSu9vAPEksQoCJntpoAKH22S5pLHunQEV2E2Vbz9OSplnvodjg3mKLAgc=";

document.getElementById("btnTest").addEventListener("click", test);

function test() {
  document.querySelector("#output").innerHTML = cadena;
  console.log(cadena);
}
