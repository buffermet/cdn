(function() {
	"use strict";

	let lastTitle = "";

	const pollVideoNotification = () => {
		let title = "";

		let playlistTitleNode = document.querySelector("ytd-playlist-panel-video-renderer[selected] h4");
		let singleVideoTitleNode = document.querySelectorAll("yt-formatted-string.style-scope.style-scope.ytd-video-primary-info-renderer")[1];

		if (playlistTitleNode) {
			title = playlistTitleNode.innerText;
		} else if (singleVideoTitleNode) {
			title = singleVideoTitleNode.innerText;
		}
		if (title != lastTitle) {
			new Notification("Now playing", {body: title});
		}
		lastTitle = title;
	};

	const musicPlayer = () => {
		if (!document.documentElement.classList.contains("_musicPlayer")) {
			document.querySelectorAll("button[aria-label=Collapse]").forEach(b => b.click());
			document.querySelector("div#player") ? document.querySelector("div#player").style.display = "none" : "";
			document.querySelector("div#full-bleed-container") ? document.querySelector("div#full-bleed-container").style.visibility = "hidden" : "";
			document.querySelector("div#full-bleed-container") ? document.querySelector("div#full-bleed-container").style.height = "0" : "";
			document.querySelector("div#full-bleed-container") ? document.querySelector("div#full-bleed-container").style.minHeight = "0" : "";
			document.documentElement.classList.add("_musicPlayer");
			setInterval(pollVideoNotification, 2000);
		} else {
			document.querySelectorAll("button[aria-label=Expand]").forEach(b => b.click());
			document.querySelector("div#player") ? document.querySelector("div#player").style.display = "" : "";
			document.querySelector("div#full-bleed-container") ? document.querySelector("div#full-bleed-container").style.visibility = "" : "";
			document.querySelector("div#full-bleed-container") ? document.querySelector("div#full-bleed-container").style.height = "" : "";
			document.querySelector("div#full-bleed-container") ? document.querySelector("div#full-bleed-container").style.minHeight = "" : "";
			document.documentElement.classList.remove("_musicPlayer");
			clearInterval(pollVideoNotification);
		}
	};

	globalThis.addEventListener("keydown", function(e) {
		if (e.shiftKey && e.altKey && e.key === "M") {
			musicPlayer();
		}
		if (e.key === "L" && e.shiftKey && e.altKey) {
			document.querySelector("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button").click();
		}
		if (e.key === "R" && e.shiftKey && e.altKey) {
			const video = document.querySelector("video");
			if (video.loop) {
				video.loop = false;
			} else {
				video.loop = true;
			}
		}
	});
})();
