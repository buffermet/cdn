self.addEventListener("keydown", event=>{
  if (event.shiftKey && event.altKey && event.metaKey && event.key == "1") {
    // set 144p
  } else if (event.shiftKey && event.altKey && event.metaKey && event.key == "2") {
    // set 240p
  } else if (event.shiftKey && event.altKey && event.metaKey && event.key == "3") {
    // set 360p
  } else if (event.shiftKey && event.altKey && event.metaKey && event.key == "4") {
    // set 480p
  } else if (event.shiftKey && event.altKey && event.metaKey && event.key == "7") {
    // set 720p
  } else if (event.shiftKey && event.altKey && event.metaKey && event.key == "0") {
    // set max
  }
});
