const array = [1, 2, 10, 16];

const double = []; //here we had to create this double array in order to
				  //return values when they are multiplied. the map function
				  //works different and better

const newArray = array.forEach((num) => {
	double.push(num * 2);
})

//console.log(newArray);
console.log('forEach', double);

//map, filter, reduce

//here we have the map function. it's purpose is to return values
//back into an array which is the same variable created
// without having to create another 
//array like we did in the forEach from above
//we just used the array from the very above to input values
const mapArray = array.map((num) =>{
	return num * 2;
})

console.log('map', mapArray);



//filter array function
//filter array has a condition and need a return statment like map function
const filterArray = array.filter(num => {
	return num > 5
})

console.log('filter', filterArray);


//reduce function
//you have what is called an accumulator and it stores the value
//for every iteration
const reduceArray = array.reduce((accumulator, num) =>{
	return accumulator + num;
}, 0); //the zero here is the second part of the reduce function
		//it has two params and this is what you want the 
		//accumulator to start off with
		//this answer will be 29
		//if we put 5 the the accumulator will start with 5 and the
		//return value will be 34
console.log('reduce', reduceArray);