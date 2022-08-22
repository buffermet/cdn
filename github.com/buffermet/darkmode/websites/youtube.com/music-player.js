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
    const html = document.querySelector("html");
    if (!html.classList.contains("_musicPlayer")) {
      html.classList.add("_musicPlayer");
      if (document.querySelector("ytd-playlist-panel-renderer")) {
        document.querySelector("ytd-playlist-panel-renderer").style.maxHeight = "80vh";
        document.querySelector("ytd-playlist-panel-renderer div#container").style.maxHeight = "80vh";
      }
      document.querySelector("#primary-inner #player").style.display = "none";
      document.querySelectorAll(
        "ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy,\
         ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy"
      ).forEach(node=>{
        node.style.paddingTop = "0pt";
      });
      setInterval(pollVideoNotification, 2000);
    } else {
      html.classList.remove("_musicPlayer");
      if (document.querySelector("ytd-playlist-panel-renderer")) {
        document.querySelector("ytd-playlist-panel-renderer").style.maxHeight = "initial";
        document.querySelector("ytd-playlist-panel-renderer div#container").style.maxHeight = "initial";
      }
      document.querySelector("#primary-inner #player").style.display = "initial";
      document.querySelectorAll(
        "ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy,\
         ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy"
      ).forEach(node=>{
        node.style.paddingTop = "initial";
      });
      removeInterval(pollVideoNotification);
    }
  };

  globalThis.addEventListener("keydown", function(e){
    if (e.shiftKey && e.altKey && e.key === "M") {
      musicPlayer();
    }
  });
})();
