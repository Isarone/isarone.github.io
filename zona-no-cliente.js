window.localStorage.setItem("app-embedded", "on");

const urlBase = "https://b58xfhbh-3001.brs.devtunnels.ms";
const page = "/bienestar-en-vivo";
const input = document.getElementById("txtInput").value;
const token = input
  ? `/?token=${input}`
  : "/?token=aFdDaWNjL0pITER6dnBVdnhvRFUreVRKR1RUM3lSYWlXQWE1VktGRktEbjl0VlZvdXpqRVo2TVhnT0pheTZTRFJBSyt1Z09UaFAvOUU1ai9kdjZQNE53VFFrNjNnOWZ2V21wWCs4Z2VGTTF6aCtXd25ZZUgrdXJSSmJuV0VOb09UUXhtM0FIVUdob1ZVQ2JOSFlrak9BPT05MTg0MzBiYzI4NDkzNDVjMGZkNmQyODkyZTIzMTZjOGFiY2RjNjg3MjE2YWYzMWE0MGQzNDlkODBmNGRjMzhid";
const url = `${urlBase}${page}${token}`;

const btn = document.getElementById("btnTest");
btn.addEventListener("click", function () {
  window.location.href = url;
});
