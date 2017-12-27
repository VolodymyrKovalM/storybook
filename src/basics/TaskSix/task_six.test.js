import { quizSix } from './task_six';

describe('Basic task six', () => {
	it('should output false', () => {
		expect(quizSix(11, 4)).toBeFalsy();
	});

	it('should output true', () => {
		expect(quizSix(12, 4)).toBeTruthy();
	});
});
