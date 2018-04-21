//write functions for classic fizz buzz
//multiples of three print "Fizz"
//multiples of five print "Buzz"
//numbers that are multiples of both three and five print "FizzBuzz"

//solution: write a loop that checks each number for multiples of 3 and 5
//print the number to the console

//print 1 - 100

for (var i = 1; i <= 100; i++) {

	 if((i % 3 == 0) && (i % 5 == 0)){
	console.log(i + "FizzBuzz");
	}
	else if( i % 3 == 0){
		console.log( i + "Fizz");
	}
	else if (i % 5 == 0){
		console.log(i + "Buzz")
	}
	else
		console.log(i);
}