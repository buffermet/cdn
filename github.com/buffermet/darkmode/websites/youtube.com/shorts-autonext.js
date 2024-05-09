let highestSeconds = 0

const nextButton = document.querySelector("button[aria-label='Next video']")
const prevButton = document.querySelector("button[aria-label='Previous video']")

const loop = () => {
	const video = document.querySelector("#shorts-player > div.html5-video-container > video")
	const seconds = parseInt(video.currentTime)
	if (seconds > highestSeconds) {
		highestSeconds = seconds
	} else if (seconds < highestSeconds) {
		highestSeconds = seconds
		video.click()
		nextButton.click()
	}
}

let loopId = setInterval(loop, 200)

const resetLoop = () => {
	clearInterval(loopId)
	highestSeconds = 0
	setTimeout(() => loopId = setInterval(loop, 200), 1000)
}

nextButton.addEventListener("click", resetLoop)
prevButton.addEventListener("click", resetLoop)

globalThis.addEventListener(
	"keydown",
	event => (event.key === "ArrowDown" || event.key === "ArrowUp") ? resetLoop() : "")
