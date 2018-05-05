//string padding
//padStart
'Turtle'.padStart(10);

//padEnd
'Turtle'.padEnd(10);


//trailing commas parentheses etc
const fun = (a,b,c,d) => {
	console.log(a);
}

fun(1,2,3,4);
//rewritten now as
const fun = (a,
			 b,
			 c,
			 d, 	//note the trailing comma is acceptable now
			 ) => {
	console.log(a);
}
fun(1,2,3,4);


//next object 
//Object.values //this gives the value of each object or the contents
//ie like in obj the values are 'Santa', 'Rudolf', 'Mr. Grinch'

//Object.entries //this gives you the (property/or key) and the value

//Object.keys .......this takes two params using the forEach(i, index) 
//this will give you the contents of the object

//this is an ugly object and not an array, but you still want to 
//treat it like an array and be able to loop through it like an array
//how to do it? use the Object.keys(obj) with this you can 
//iterate through the object like an array

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr. Grinch'

}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

//object.values()
Object.values(obj).forEach(value =>{
	console.log(value);
})

//object.entries
Object.entries(obj).forEach(value =>{
	console.log(value);
})


//now display the name with the username number but remove the username string
//also the value[1] is looking at the objec now like an array wheras,
//username0 is like the [0] entry of an array and
//Santa is the [1] of an array and all this will be returned back into an
//array since we are using the map function which automatically 
//returns back into an array
//the other part with the .replace('enter string to remove','')
//this .replace function is taking the array value[0] and removing username
//and replacing it with and emptystring and keeping the number at the end of it
//and this way by taking value[1] + value[0] minus the username string
//you get a new username
Object.entries(obj).map(value =>{
	return.value[1] + value[0].replace('username', '')
})








