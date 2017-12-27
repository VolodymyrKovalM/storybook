/*
	Выведите массив используя разные типы циклов.
*/

/*
	eslint-disable no-console, no-restricted-syntax
*/

import React from 'react';

function outPutArray() {
	const arr = [1, 2, 3, 4, 5];
	let i = 0;

	console.log('Do While Loop');

	do {
		console.log(arr[i]);
		i++;
	} while (i < arr.length);

	i = 0;

	console.log('**************************\nWhile Loop');

	while (i < arr.length) {
		console.log(arr[i]);
		i++;
	}

	console.log('**************************\nfor Loop');

	for (let k = 0, n = arr.length; k < n; k++) {
		console.log(arr[k]);
	}

	console.log('**************************\nfor in Loop');

	for (const value in arr) {
		if (Object.prototype.hasOwnProperty.call(arr, value)) {
			console.log(arr[value]);
		}
	}

	console.log('**************************\nfor each Loop');

	arr.forEach(item => {
		console.log(item);
	});
}

const BasicsTaskSeven = () => (
	<button onClick={outPutArray}>Run</button>
);

export default BasicsTaskSeven;
