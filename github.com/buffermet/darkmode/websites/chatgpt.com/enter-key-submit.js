// Submit the prompt when pressing Enter key like every chat client in the world...
const sendBtn = document.querySelector('button[data-testid="send-button"]')
globalThis.addEventListener("keydown", e => {
    if (e.key === "Enter") sendBtn.click()
})
