import { checkArray } from './task_two';

describe('Basic task two', () => {
	const a = [12, 15, 4, 9, 45, 27];

	it('should output the greatest number from the array, if second argument is true', () => {
		expect(checkArray(a, true)).toBe(45);
	});

	it('should output the smallest number from the array, if second argument is false', () => {
		expect(checkArray(a, false)).toBe(4);
	});
});
