import { findLongestWord } from './task_four';

describe('Functions task four', () => {
	it('should output the longest word in a given string', () => {
		const str = 'You can check strings against regular expressions with';
		expect(findLongestWord(str)).toBe('expressions');
	});
});
