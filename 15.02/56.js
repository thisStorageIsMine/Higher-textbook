//1
const reduce = arr => {
    return arr.reduce((sum, item) => sum += item)
}

//2
let arr = [1, 2, 3];
console.log(reduce(arr));

//3
arr.push(100);
console.log(reduce(arr));
