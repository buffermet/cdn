let highestSeconds = 0

const rxStripDecimals = /\..*/

const loop = setInterval(() => {
    const video = document.querySelector("#shorts-player > div.html5-video-container > video")
    const seconds = parseInt(video.currentTime.toString().replace(rxStripDecimals, ""))
    if (seconds > highestSeconds) {
        highestSeconds = seconds
    } else if (seconds < highestSeconds) {
        highestSeconds = seconds
        video.click()
        document.querySelector("button[aria-label='Next video']").click()
    }
}, 1000)
