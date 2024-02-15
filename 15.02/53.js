let obj = {a: 1, b: 2, c: 3};
const s = Symbol("text");
obj[s] = "Hi"

console.log(obj)