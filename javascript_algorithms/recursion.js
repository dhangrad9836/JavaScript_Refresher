//starting with regular factorial expression
//5! = 1 * 2 * 3 * 4 * 5

function factorialNumber(num){
	let product = 1;

	for (let i = 1; i <= num; i++){
		product *= i;
	}

	return product;

//part two to rewrite using recursion

function factorialRecursion(num){
	if((num == 0) || (num == 1)){
		return 1;
	} else {
		return num * factorialRecursion(num - 1);
	}
}