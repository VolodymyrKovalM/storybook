import { firstQuiz } from './task_one';

describe('Basic task one', () => {
	const er1 = new Error('It is not a number');
	const er2 = new Error('Enter a number from 0 to 24');

	it('should throw an error if argument is not a number', () => {
		const n = 'some string';
		expect(() => { firstQuiz(n); }).toThrow(er1);
	});

	it('should throw an error if number is less than 0 or greater than 24', () => {
		const n1 = -1;
		const n2 = 25;
		expect(() => { firstQuiz(n1); }).toThrow(er2);
		expect(() => { firstQuiz(n2); }).toThrow(er2);
	});

	it('should output Hello if number is between 8 and 24', () => {
		const n = 9;
		expect(firstQuiz(n)).toBe('Hello');
	});
});
