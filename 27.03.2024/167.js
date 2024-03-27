const promt = new Promise((res, rej) => {
    setTimeout(() => rej(new Error('Ты чаво наделал')), 1234)
});

setInterval(() => console.log(promt), 214)