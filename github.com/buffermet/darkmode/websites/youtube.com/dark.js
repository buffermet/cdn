const enableDarkMode = () => {
	document.documentElement.setAttribute("dark", "true");
}

document.addEventListener("DOMContentLoaded", enableDarkMode);
self.addEventListener("load", enableDarkMode);
setInterval(enableDarkMode, 4000);
enableDarkMode();
