// Submit the prompt when pressing Enter key like every chat client in the world...
globalThis.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) document.querySelector('button[data-testid="send-button"]').click()
})
