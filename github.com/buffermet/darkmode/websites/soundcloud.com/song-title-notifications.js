/*
 * Shows a notification with the title of audio that is currently playing.
 */

let lastNotificationTitle = "";

globalThis.addEventListener("load", ()=>{
  setInterval(()=>{
    const titleNode = document
      .querySelector("a.playbackSoundBadge__titleLink.sc-truncate");
    if (titleNode) {
      const currentTitle = titleNode.title;
      if (lastNotificationTitle != currentTitle) {
        new Notification(currentTitle);
      }
      lastNotificationTitle = currentTitle;
    }
  }, 1000);
});
