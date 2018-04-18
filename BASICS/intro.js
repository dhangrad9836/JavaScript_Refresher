//function that returns first and last name 
//concat function

function introduction(firstName, lastName){
	const introduction = 'Hi, my name is ' .concat(firstName, " ", lastName, ".");

	return introduction;
}

console.log(introduction('Darren', 'Dhanpat'));