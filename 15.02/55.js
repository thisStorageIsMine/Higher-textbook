const s = Symbol();
const obj = {
    a: 15,
    b: 14,
    [s]: () => console.log(new Date())
}

for (const key in obj) {
    console.log(obj[key]);
}
obj[s]()