function make(callback) {
    setTimeout(() => {
        const res = [463,12,5];
        callback(res)
    }, 2000)
}

make((res) => {
    console.log(res.reduce((s, i) => s+=i));
})