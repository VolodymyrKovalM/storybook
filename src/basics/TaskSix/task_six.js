/*
	Напишите функцию с двумя аргументами.
	Если один из них делится без остатка на другой. выведите true, если нет false.
*/

/*
	eslint-disable no-console
*/

import React from 'react';

export function quizSix(a, b) {
	return a % b === 0 || b % a === 0;
}

const BasicsTaskSix = () => (
	<div>
		<div className="task-info">Arguments are 12 and 4</div>
		<button onClick={() => { console.log(quizSix(12, 4)); }}>Check numbers</button>
		<div className="task-info">Arguments are 11 and 4</div>
		<button onClick={() => { console.log(quizSix(11, 4)); }}>Check numbers</button>
	</div>
);

export default BasicsTaskSix;
