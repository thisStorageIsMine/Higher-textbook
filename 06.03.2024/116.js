let str = 'a aa aaa aaaa aaaa';
const regExp = /a+/g
let res = str.replace(regExp, '!');
console.log(res)