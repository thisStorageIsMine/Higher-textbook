let str = '12:37:57 15:48:58 17:59:59';
let regExp = /(\d{2}):(\d{2}):(\d{2})/g

let res;
while (res = regExp.exec(str)) {
    console.log(res);
}