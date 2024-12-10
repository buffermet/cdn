// Submit the prompt when pressing Enter key like every chat client in the world...
globalThis.addEventListener("keydown", e => {
    // of course it renders the button each time when typing................. *facepalm*
    if (e.key === "Enter") document.querySelector('button[data-testid="send-button"]').click()
})
