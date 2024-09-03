let OSName = "Unknown OS";

if (navigator.userAgentData) {
  // userAgentData es la opción más moderna y precisa
  const platform =
    navigator.userAgentData.platform || navigator.userAgentData.ua;
  if (platform.includes("Win")) OSName = "Windows";
  if (platform.includes("Mac")) OSName = "MacOS";
  if (platform.includes("Linux")) OSName = "Linux";
  if (platform.includes("iPhone")) OSName = "iOS";
  if (platform.includes("Android")) OSName = "Android";
  if (platform.includes("X11")) OSName = "UNIX";
} else {
  // Fallback para navegadores que no soportan userAgentData
  const platform = navigator.userAgent;
  if (platform.includes("Win")) OSName = "Windows";
  if (platform.includes("Mac")) OSName = "MacOS";
  if (platform.includes("Linux")) OSName = "Linux";
  if (platform.includes("iPhone")) OSName = "iOS";
  if (platform.includes("Android")) OSName = "Android";
  if (platform.includes("X11")) OSName = "UNIX";
}

const isIOS = () => OSName === "iOS" || OSName === "MacOS";
