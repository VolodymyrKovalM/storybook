import { sqruareNumber } from './task_three';

describe('Basic task three', () => {
	const n1 = 4;
	const s = 'str';

	it('should throw an error if argument is not a number', () => {
		expect(() => { sqruareNumber(s); }).toThrow(new Error('It is not a number'));
	});

	it('should output the square of entered number', () => {
		expect(sqruareNumber(n1)).toBe(16);
	});
});
