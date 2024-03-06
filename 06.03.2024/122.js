// 1
// let str = 'site.ru sss site.com zzz site.net';
// console.log(str.match(/(\w+)\.(\w+)/g))


// 2
let str = 'a1b c34d x567z';
const res = str.match(/\d+/g);
const sum = res.reduce((acum,x)=>  acum += +x, 0 )
console.log(sum)