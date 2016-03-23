var count, fizzer, buzzer, fizzbuzzer; 
count = function(start, end) {
	var output = start;
	for (var i = start; i < end; i += 1) {
		output = output + " " + fizzer(i + 1), 
		output = output + " " + buzzer(i + 1),
		output = output + " " + fizzbuzzer(i +1);
	}

	return output;
};
	
 


fizzer = function(num) {
	//if (0 === num % 3) {
	//	return "fizz"; 
	//} else {
	//	return num;
	//}
	return 0 === num % 3 ? "fizz" : num; 
}; 

buzzer = function(num) {
	return 0 === num % 5 ? "buzz" : num; 
}; 

fizzbuzzer = function(num) {
	return 0 === num % 15 ? "fizzbuzz" : num; 
};

module.exports = {
	count: count, 
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer
};

