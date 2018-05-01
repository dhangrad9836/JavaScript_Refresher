//use



function reverseString(word){
	//let reverseWord = word.split('').reverse().join('');
	//note that the above code combines three methods into one line
	//you might not be comfortable yet doing this way but it works
	//note that the split function splits a string into and array
	let reverseWord = word.split(''); //splits the string 
	console.log(reverseWord); ['c', 'o', 'd', 'e', 'g', 'o', 'd' ]
	reverseWord = reverseWord.reverse(); //reverse the string
	reverseWord = reverseWord.join(''); //joins the word together

	return reverseWord;

}

console.log(reverseString('codegod'));

//part 2 to reverse a string
function reverseString2(word){
	let reverseWord = '';

	for(let i = word.length - 1; i >= 0; i--){
		reverseWord += word[i];
	}

	return reverseWord;
}

console.log(reverseString2('codegod'));





