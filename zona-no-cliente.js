window.localStorage.setItem("app-embedded", "on");

/*
• Caso 4:  Hash

	no viene hash y no es usuario EB
		    212345678||0
	
    no viene hash y es usuario EB
            212345678||1
    
*/

// const urlBase = "https://b58xfhbh-3001.brs.devtunnels.ms";
// const page = "/bienestar-en-vivo";
// const input = document.getElementById("txtInput").value;
// const token = input
//   ? `/?token=${input}`
//   : "/?token=aFdDaWNjL0pITER6dnBVdnhvRFUreVRKR1RUM3lSYWlXQWE1VktGRktEbjl0VlZvdXpqRVo2TVhnT0pheTZTRFJBSyt1Z09UaFAvOUU1ai9kdjZQNE53VFFrNjNnOWZ2V21wWCs4Z2VGTTF6aCtXd25ZZUgrdXJSSmJuV0VOb09UUXhtM0FIVUdob1ZVQ2JOSFlrak9BPT05MTg0MzBiYzI4NDkzNDVjMGZkNmQyODkyZTIzMTZjOGFiY2RjNjg3MjE2YWYzMWE0MGQzNDlkODBmNGRjMzhid";
// const url = `${urlBase}${page}${token}`;

const url = "http://localhost:3001/registro-app/";

const btn = document.getElementById("btnTest");
btn.addEventListener("click", function () {
  window.location.href = url;
});
