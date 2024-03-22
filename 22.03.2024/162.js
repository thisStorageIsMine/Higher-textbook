const oleg = new Promise((resolve) => {
    setTimeout(() => resolve('какой-нибудь текст'), 5000)
})


oleg.then((text) => console.log(text));