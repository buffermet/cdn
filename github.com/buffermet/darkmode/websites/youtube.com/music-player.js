/*

  YouTube music player with song title notifications.

*/

document.querySelector("#primary-inner #player").style.display = "none";

let lastTitle = "";

setInterval(async()=>{
  const title = document.querySelector("ytd-playlist-panel-video-renderer[selected] h4").innerText;

  if (title != lastTitle) {
    new Notification(title);
  }

  lastTitle = title;
}, 4000);
