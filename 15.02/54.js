let obj = {a: 1, b: 2, c: 3};
const s = Symbol("text");
obj[s] = "Hi"

for(let i in obj) {
    console.log(i)
}