/*

  YouTube music player with song title notifications.

*/

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
    new Notification(title);
  }

  lastTitle = title;
};

const musicPlayer = () => {
  document.querySelector("#primary-inner #player").style.display = "none";
  document.querySelectorAll(
    "ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy,\
     ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy"
  ).forEach(node=>{
    node.style.paddingTop = "0pt";
  });
  setInterval(pollVideoNotification, 2500);
};
