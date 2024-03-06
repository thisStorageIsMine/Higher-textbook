// let str = '12:37 15:48 17:59';
// const res = str.matchAll(/(\d{2}):(\d{2})/g)
// for (let match of res) {
// 	console.log(match); 
// }


let str = 'site.ru sss site.com zzz site.net';
const res = str.matchAll(/(\w+).(\w+)/g)
for (let match of res) {
	console.log(match); 
}