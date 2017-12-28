/*
	Напишите функцию с двумя аргументами.
	Если первый больше второго, выведите в консоль их разницу.
	Если второе больше первого, сумму.
*/

/*
	eslint-disable no-console
*/

import React from 'react';

export function checkNumbers(a, b) {
	return a > b ? a - b : a + b;
}

const BasicsTaskFour = () => (
	<div>
		<div className="task-info">Arguments are 2 and 5</div>
		<button onClick={() => { console.log(checkNumbers(2, 5)); }}>Check numbers</button>
		<div className="task-info">Arguments are 5 and 2</div>
		<button onClick={() => { console.log(checkNumbers(5, 2)); }}>Check numbers</button>
	</div>
);

export default BasicsTaskFour;
