const str = ""

console.log("Задание 1: " + str.match(/1e[^x]2/g));
console.log("Задание 2: " + str.match(/x[^2-7]z/g));
console.log("Задание 3: " + str.match(/x[^A-Z]+z/g));
console.log("Задание 4: " + str.match(/x[^a-zA-Z1-5]+z/g));