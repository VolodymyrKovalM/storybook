import { celsiusToFahrenheit, fahrenheitToCelsius } from './task_three';

describe('Functions task three', () => {
	it('should convert celsius to fahrenheit', () => {
		expect(celsiusToFahrenheit(22)).toMatch('22&ordm;C is 72&ordm;F');
	});

	it('should convert fahrenheit to celsius', () => {
		expect(fahrenheitToCelsius(75)).toMatch('75&ordm;F is 24&ordm;C');
	});
});
