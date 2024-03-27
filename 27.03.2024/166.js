const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('erd');
    }, 4500)
});

setInterval(() => {
    console.log(promise);
}, 500)