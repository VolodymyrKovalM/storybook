/*
	Напишите функцию с двумя аргументами.
	Если сумма этих чисел от 11 до 19, то выведите в консоль результат.
	Если нет, то выведите “Result is not in range between 11 and 19”.
*/

/*
	eslint-disable no-console
*/

import React from 'react';

export function quizFive(a, b) {
	const sum = a + b;

	return sum >= 11 && sum <= 19 ? sum : 'Result is not in range between 11 and 19';
}

const BasicsTaskFive = () => (
	<div>
		<div className="task-info">Arguments are 5 and 7</div>
		<button onClick={() => { console.log(quizFive(5, 7)); }}>Check numbers</button>
		<div className="task-info">Arguments are 15 and 17</div>
		<button onClick={() => { console.log(quizFive(15, 17)); }}>Check numbers</button>
	</div>
);

export default BasicsTaskFive;
