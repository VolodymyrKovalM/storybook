import { argsSum } from './task_one';

describe('Functions task one', () => {
	it('should output sum of all arguments passed', () => {
		expect(argsSum(4, 5, 7, 12, 4)).toBe(32);
	});

	it('should output sum of all elements in the array, passed as an argument', () => {
		expect(argsSum([4, 5, 7, 12, 4])).toBe(32);
	});
});
