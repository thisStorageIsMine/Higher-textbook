//1
// let str = 'sss domain.ru zzz';

// const res = str.match(/(\w+)\.(\w+)+/)
// console.log(res);

// console.log(res[0]);
// console.log(res[1]);
// console.log(res[2]);

//2
let str = '31.12.2025';
const res = str.match(/(\d{2}).(\d{2}).(\d{4})/)
console.log(res);

console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
console.log(res[3]);

