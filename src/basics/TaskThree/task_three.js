/*
	Напишите функцию, которая принимает один аргумент.
	Проверяет число ли это и выводит в консоль данное число в квадрате,
	если его можно поделить на 2 без остатка.
*/

/*
	eslint-disable no-console
*/

import React from 'react';

const n1 = 4;
const n2 = 9;
const s = 'str';

export function sqruareNumber(num) {
	if (typeof num !== 'number') {
		throw new Error('It is not a number');
	}

	return num % 2 === 0 ? num * num : 'The entered number can not be devided by 2 without a remainder';
}

const BasicsTaskThree = () => (
	<div>
		<button onClick={() => { console.log(sqruareNumber(n1)); }}>Argument is 4</button>
		<button onClick={() => { console.log(sqruareNumber(n2)); }}>Argument is 9</button>
		<button onClick={() => { console.log(sqruareNumber(s)); }}>Argument is a string - str</button>
	</div>
);

export default BasicsTaskThree;
