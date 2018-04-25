//starting with regular factorial expression
//5! = 1 * 2 * 3 * 4 * 5

function factorialNumber(num){
	let product = 1;

	for (let i = 1; i <= num; i++){
		product *= i;
	}

	return product;
