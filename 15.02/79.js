//1
// let json = '[1,2,3,4,5]';
// const arrSum = JSON.parse(json).reduce((sum, item) => sum+= item);

// console.log(arrSum);

//2
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;

// const obj = JSON.parse(json);
// let sum = 0;

// for (let i in obj) {
//     sum += obj[i].reduce((sum, item) => sum+= item);
// }
// console.log(sum);

//3
// let json = '["user1","user2","user3","user4","user5"]';

// const ul = document.createElement("ul");

// for (let i of JSON.parse(json)) {
//     const li = `<li>${i}</li>`;
//     ul.innerHTML += li;
// }

//4

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;

// const table = document.createElement(table);

// for (let i in JSON.parse(json)) {
//     const tr = `
//         <tr>
//             <td>${i.name}</td>
//             <td>${i.age}</td>
//             <td>${i.salary}</td>
//         </tr>
//     `
// }