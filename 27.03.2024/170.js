// 1
function makeThisShit()  {
    const delay = Math.floor(Math.random() * 11) * 1000,
          promise = new Promise((res, rej) => {
            res(delay)
          });

    return promise;
}

const arr = [];

for (let index = 0; index < 10; index++) {
    arr.push(makeThisShit());    
}

console.log( arr)

// 2
Promise.race(arr).then((res) => {
    console.log(res)
})


// 3
Promise.all(arr).then((res) => {
    console.log(res.reduce((sum, i) => sum += i, 0));
})