//function that returns first and last name 
//concat function

function introduction(firstName, lastName){
	const introduction = 'Hi, my name is ' .concat(firstName, " ", lastName, ".");

	return introduction;
}

//using ES6 template literal
function intro(firstName, lastName){
	const intro = `Hi, my name is ${firstName} ${lastName}.`;

	return intro;
}

console.log(introduction('Darren', 'Dhanpat'));
console.log(intro('Darren', 'Dhanpat')); //using ES6 template literals