const s = Symbol("sum");

function objSum() {
    let sum = 0;
    for(let i in this){
        sum += this[i]
    }
    return sum;
}

const obj1 = {
    a:1,
    [s]: objSum
}
const obj2 = {
    a:2,
    b:125,
    [s]: objSum
}

console.log(obj1[s]());
console.log(obj2[s]());
