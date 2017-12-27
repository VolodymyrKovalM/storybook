/*
	Напишите функцию с одним аргументом. Аргумент должен быть числом от 0 до 24.
	Если аргумент число от 8 до 21, выведите в консоль ‘Hello’.
	В другом случае выведите в консоль ‘It is not good time for that’.
	Если аргумент не число, выведите в консоль ‘It is not a number’.
*/

/*
	eslint-disable import/no-extraneous-dependencies,
	import/extensions, no-console, no-alert, no-restricted-globals,
	no-else-return, consistent-return
*/

import React from 'react';

export function firstQuiz(hour) {
	if (typeof hour !== 'number') {
		throw new Error('It is not a number');
	}

	if (hour < 0 || hour > 24) {
		throw new Error('Enter a number from 0 to 24');
	}

	if (hour > 8 && hour < 24) {
		const s = 'Hello';
		console.log(s);
		return s;
	} else {
		const s = 'It is not good time for that';
		console.log(s);
	}
}

const BasicsTaskOne = () => (
	<button onClick={() => {
		let h = prompt('Enter time');
		h = isNaN(+h) ? h : +h;
		firstQuiz(h);
	}}
	>
		Enter time
	</button>
);

export default BasicsTaskOne;
