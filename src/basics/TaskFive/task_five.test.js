import { quizFive } from './task_five';

describe('Basic task five', () => {
	it('should calculate sum of the arguments, as the sum is in range between 11 and 19', () => {
		expect(quizFive(5, 7)).toBe(12);
	});

	it('should output Result is not in range between 11 and 19, as the sum is not in range between 11 and 19', () => {
		expect(quizFive(15, 17)).toBe('Result is not in range between 11 and 19');
	});
});
