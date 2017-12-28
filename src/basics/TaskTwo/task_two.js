/*
	Напишите функцию, которая принимает массив и булево значение в качестве аргументов.
	Если булево значение true, выведите в консоль наибольшее число, если false наименьшее.
*/

/*
	eslint-disable no-console
*/

import React from 'react';

const a = [12, 15, 4, 9, 45, 27];

export function checkArray(arr, b) {
	return b ? Math.max(...a) : Math.min(...a);
}

const BasicsTaskTwo = () => (
	<div>
		<div className="task-info">Array is: [12, 15, 4, 9, 45, 27]</div>
		<button onClick={() => { console.log(checkArray(a, true)); }}>The greatest</button>
		<button onClick={() => { console.log(checkArray(a, false)); }}>The smallest</button>
	</div>
);

export default BasicsTaskTwo;
