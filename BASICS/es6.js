/*const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90){
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);


const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}*/


//important ========================================================


//destructuring objects
//we have an object named obj
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

//old way of accessing object from above
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//new and shorter way to access object
//1. you declare if it's a const or let
//2. in brackets add the name of the variable(s)
//3 have the variables = to the name of the object which here is obj
/*const { player, experience } = obj;
let { wizardLevel } = obj;

//important ====================================================
//object properties

const name = 'john snow';

const obbj = {
	['ray' + 'smith']: 'hihi',
	[name]: 'hello'

}*/



//template strings ============================================
/*const name = "Sally";
const age = 34;
const pet = "horse";
//old way of typing a string
const greeting = "Hello " + name + "you seem to be doing " + greeting

//es6 way of typing a string using backticks
const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;
*/


//default arguments ==========================================
/*const name = "Sally";
const age = 34;
const pet = "horse";

function greet(name='', age=30, pet='cat'){
	return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;
}
*/


//arrow functions ==============================================
//old way
function add(a,b){
	return a + b;
}

//new way es6 version
// this with arrow function you can place the return statement 
//all on one line, so here it returns after the arrow symbol =>
// it returns a + b
const add = (a, b) => a + b;




















