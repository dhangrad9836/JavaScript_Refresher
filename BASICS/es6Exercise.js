/*//change to new syntax
let a = 'test';
let b = true;
const c = 789;
a = test;*/


//destructuring

/*const person = {
	firstName : "John",
	lastName  : "Doe",
	age		  : 50,
	eyeColor  : "blue"
};

//old way
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;

//new way
const {firstname, lastName, age, eyeColor} = person;
*/

//object properties

/*const a = 'test';
const b = true;
const c = 789;

const okObj = {
	a, b, c
};*/

//template strings using backticks

const message = `Hello ${firstName} have I met you before? i think
we met in ${city} last summer no???`;

//arrow functions
const wherAmI = (userName, location) => {
	if (userName && location){
		return "I am not lost";
	} else {
		return "I am totally lost";
	}
}
