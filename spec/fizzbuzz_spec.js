var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 15 and do fizzbuzz replacements", function() {
		expect(fb.count(1, 15)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz");
	});

	it("can change Multiples of 3 to return 'Fizz'", function() {
		expect(fb.fizzer(3)).toBe("fizz")
		expect(fb.fizzer(6)).toBe("fizz")
		expect(fb.fizzer(9)).toBe("fizz")
		expect(fb.fizzer(12)).toBe("fizz")
		expect(fb.fizzer(17)).toBe(17)
	});

	it("can changes Multiples of 5 to return 'Buzz'", function() {
		expect(fb.buzzer(5)).toBe("buzz")
		expect(fb.buzzer(10)).toBe("buzz")
		expect(fb.buzzer(17)).toBe(17)
	});

	it("can make Multiples of 3 and 5 Fizzbuzz", function() {
		expect(fb.fizzbuzzer(15)).toBe("fizzbuzz")
		expect(fb.fizzbuzzer(13)).toBe(13)
	});

});