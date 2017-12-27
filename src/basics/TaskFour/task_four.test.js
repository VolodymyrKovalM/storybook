import { checkNumbers } from './task_four';

describe('Basic task four', () => {
	it('should calculate sum of the arguments, as the second argument is greater than first', () => {
		expect(checkNumbers(2, 5)).toBe(7);
	});

	it('should calculate substraction of the arguments, as the second argument is less than first', () => {
		expect(checkNumbers(5, 2)).toBe(3);
	});
});
