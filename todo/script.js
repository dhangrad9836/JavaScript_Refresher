/*//get reference to button by storing in a variable
var button = document.getElementsByTagName("button")[0];

//addEventListener takes two parameters
button.addEventListener("mouseenter", function(){
	console.log("Click!!!!");
})*/

//task 1 Select user input 
//task 2 select button
//part 1
var button = document.getElementById("enter");
var input = document.getElementById("userinput");

//part 2 append the li item to the end of list
var ul = document.querySelector("ul");

//part 3 this is to create the delete button
//note that we use the querySelectorAll in order to gather information from all the list items
var li = document.querySelectorAll("li");

//EXTRACTED OUT CODE
function inputLength(){
	//this return the value of the length from being entered as text
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//create a delete button
	var deleteButton = document.createElement("button");
	//create a textNode called delete
	var deleteText = document.createTextNode("delete");
	//append the textNode onto the button
	deleteButton.appendChild(deleteText);

	//now append the delete button onto the list item to display the button next to the list items
	li.appendChild(deleteButton); 
	//now create eventListener to remove the child elements to delete
	deleteButton.addEventListener("click", function(){
		ul.removeChild(li);
	});
	
}

//refactoring function after click 
function addListAfterClick(){
	//function(){
	//this if statement prevents input box from displaying empty text
	//also refactored below code to list as inputLength() from input.value.length
	if(inputLength() > 0){

		createListElement();
	}
}

function addListAfterKeypress(event){
	 //function(event){ 		this event from this function will be passed from above
	//console.log(event); to test to view whick key is pressed
	//this if statement prevents input box from displaying empty text
	//also refactored below code to list as inputLength() from input.value.length
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

//add event listener 
//still from part 1
button.addEventListener("click", addListAfterClick);
	//this if statement prevents input box from displaying empty text
	//also refactored below code to list as inputLength() from input.value.length
	//if(inputLength() > 0){

		//createListElement();


	//for testing
	//console.log("Click is working");
	//more testing by displaying the value from the text box
	//console.log(input.value);
	//console.log(input.value);
	//part 2
	//create li element in order to place item at bottom of list using createElement and appendChild
		//var li = document.createElement("li");
	//add from appendChild the createTextNode from DOM tree in order to place li item at bottom of list
	//li.appendChild(document.createTextNode("Testing")); this is before
	//this is after and it takes the value from the textbox that we grabbed from userinput and placed
	//in the variable input and use dot notation with .value to store the value
		//li.appendChild(document.createTextNode(input.value));

	//this takes the li element from above and will appen it to the ul as a li element at the bottom
		//ul.appendChild(li); 

	//clear text box after inputing string text
		//input.value = "";
		//}


//this allows for keypress enter rather than clicking the enter button
//changed from button to input and click to keypress
input.addEventListener("keypress", addListAfterKeypress);
	//console.log(event); to test to view whick key is pressed
	//this if statement prevents input box from displaying empty text
	//also refactored below code to list as inputLength() from input.value.length
	//if(inputLength() > 0 && event.keyCode === 13){
	//	createListElement();

	//for testing
	//console.log("Click is working");
	//more testing by displaying the value from the text box
	//console.log(input.value);
	//console.log(input.value);
	//part 2
	//create li element in order to place item at bottom of list using createElement and appendChild
		//var li = document.createElement("li");
	//add from appendChild the createTextNode from DOM tree in order to place li item at bottom of list
	//li.appendChild(document.createTextNode("Testing")); this is before
	//this is after and it takes the value from the textbox that we grabbed from userinput and placed
	//in the variable input and use dot notation with .value to store the value
		//li.appendChild(document.createTextNode(input.value));

	//this takes the li element from above and will appen it to the ul as a li element at the bottom
		//ul.appendChild(li); 

	//clear text box after inputing string text
		//input.value = "";
		//}
	