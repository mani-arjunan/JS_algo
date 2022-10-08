function fizzBuzz(num) {
	if (num % 5 == 0 && num % 4 === 0) {
		console.log('fizzbuzz');
	}
	if (num % 4 === 0) {
		console.log('fizz');
	}
	if (num % 6 === 0) {
		console.log('bizz');
	}
}

fizzBuzz(20);
