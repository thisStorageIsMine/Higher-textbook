let str = '12:37 15:48 17:59';
const regExp = /\d{2}:\d{2}/g
regExp.lastIndex = 5;

const res = regExp.exec(str);
console.log(res);