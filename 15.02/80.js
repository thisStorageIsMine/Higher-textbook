//1
// let json = ['user1', 'user2', 'user3', 'user4', 'user5'];

// const trueJson = JSON.stringify(json);
// console.log(trueJson);

//2
/* <ul>
	<li>city1</li>
	<li>city2</li>
	<li>city3</li>
	<li>city4</li>
</ul> */

// const ul=document.querySelector("ul");
// const arr = [];

// for(let i =0; i < ul.childNodes.length; i++) {
//     arr.push(ul.childNodes[i].textContent);
// }
// const json = JSON.stringify(arr);

//3
/* <table>
	<tr>
		<th>Фамилия</th>
		<th>Имя</th>
		<th>Отчество</th>
	</tr>
	<tr>
		<td>Иванов</td>
		<td>Иван</td>
		<td>Иванович</td>
	</tr>
	<tr>
		<td>Петров</td>
		<td>Петр</td>
		<td>Петрович</td>
	</tr>
	<tr>
		<td>Сидоров</td>
		<td>Сидор</td>
		<td>Сидорович</td>
	</tr>
</table> */

// const trs = document.querySelectorAll("tr");
// const arr = [];

// trs.forEach(tr => {
//     const obj = {};

//     obj["surname"] = tr.childNodes[0].textContent;
//     obj["name"] = tr.childNodes[1].textContent;
//     obj["patronymic"] = tr.childNodes[2].textContent;

//     arr.push(obj);
// });

// const json = JSON.stringify(arr);