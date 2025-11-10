// Enhances readability and enables image search in HTML-only version
(() => {
	const className = "buffermet-dark";
	document.documentElement.setAttribute(className, "true");
	const css = `
		html[buffermet-dark=true] {
			background-color: white;
			filter: invert() hue-rotate(180deg) !important;
		}
		html[buffermet-dark=true] video
		/*
		,html[buffermet-dark=true] img
		*/ {
			filter: invert() hue-rotate(180deg) !important;
		}
		html[buffermet-dark=true] div.chart-container {
			filter: invert() hue-rotate(180deg) !important;
		}
		b {
			color: black !important;
		}
		.buffermet::after {
			display: none !important;
		}
	`;
	const stylesheet = document.createElement("style");
	stylesheet.type = "text/css";
	stylesheet.innerHTML = css;
	document.documentElement.append(stylesheet);

	// https://search.brave.com/images?q=test&source=web
	// #search_form_input_homepage
	const lastButton = document.querySelectorAll("div.frm__select")[1];
	const searchField = document.querySelector("#search_form_input_homepage");
	const a = document.createElement("a");
	const clone = lastButton.cloneNode(true);
	clone.classList.add("buffermet");
	clone.innerHTML = "<p>Images</p>";
	const imgUrl = "https://search.brave.com/images?q=" + encodeURIComponent(searchField.value) + "&source=web";
	a.href = imgUrl;
	a.append(clone);
	lastButton.after(a);
})();
