//advanced objects concepts
// reference types; context/ instantiation

/*objects are reference types; the others bool, var are primitive types
//reference types are created by the programmer as for primitive types
//are created by the language itself
examples:
var number1 = 1; //this is a primitive type; it's always the same thing (immutable)
var number1 = 2; //this is a primitive type; it's always the same thing (immutable)
note that the object below is creating a new object like :
Student student = new Student(); but written instead with var NameOfObject = Object
var object1 = { value: 10}; this is representing creating a new object
and it will reference the address of the object created
var object2 = object1; //here in this object it is asking for the informatoin
of what is stored in object1 which is the reference of value 10 or the address
So it's still pulling information from the same object or the address
var object3 = { value: 10}; here Object3 is created and storing the address of 
value 10 inside a new box different from the objects from above


*/
//reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};


//context vs scope
/*
context tell you where we are in the scope; ie using the 'this' keyword

*/
//this function represents the window object
function b(){
	let a = 4;
}

//this object represents the object4 b/c the function is created
//inside the object4
const object4 = {
	a: function(){
		console.log(this);
	}
}


//instantiation

//instantiation where you make a copy of the object
//and reuse the code by making instance or multiple copies of the object

//here we have the class with the constructor function which is always
//ran first when we make a copy of the class and creates the object's properties 
//from the constructor 
class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}

	//we can create methods and accessing the properties using 'this' keyword
	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

//create a wizard class and using the player class
//you will use the extends keyword
//so this is saying I want wizard to use whatever player class has 
//so you have to 'extend' the player class or add on top what player class has
//1. you have to create a constructor to list what the wizard will accept
//in this case it's name and type
//2. anytime we extend something from another class we have to use the 
//super() keyword which calls the properties from the extending class
//and by inserting inside the super() the properties you want to extend
//ie: super(name, type)
class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this);
	}
	play(){
		console.log(`WEEEEEE I'm a ${this.type}1`);
	}
}

//create a wizard by using the wizard class
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic'); 



