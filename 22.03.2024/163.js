const oleg = new Promise((resolve, reject) => {
    setTimeout(() => {
        const n = Math.floor(Math.random() * 5);
        (n) ? resolve(1/n) : reject('Выпал 0');
    }, 2141)
})

oleg.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})