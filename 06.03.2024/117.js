const str = "https://google.com/index.html";
const str2 = "11122233444" // 6
const str3 = "12:22:53" //9
//1
console.log(/^http:\/\//.test(str))


//1
console.log(/^https?:\/\//.test(str))

//3
console.log(/.(txt|html|php)$/g.test(str))

//4
console.log(/.(jpg|jpeg)$/g.test(str))


//5
console.log(/.(jpg|jpeg|png)$/g.test(str))

//6
console.log(/^\d{12}$/g.test(str2))

//7
console.log(/^(([0-2][1-9])|(3[0-1]))\-((0[0-9])|(1[1-2]))\-\d$/g.test(str))

//8
console.log(/^(([0-2][1-9])|(3[0-1]))\.((0[0-9])|(1[1-2]))\.\d$/g.test(str))

//9
console.log(/(([0-1][0-9])|(2[0-4]))(:([0-5][0-9])){2}/.test(str3));

//10
console.log(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/.test(str))

//11
console.log(/^.[a-z]+$/.test(str))