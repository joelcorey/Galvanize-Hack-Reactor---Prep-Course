/*
Admissions Challenge Redux

A Quick Note
The next lesson provides a solution to these coding challenge steps.

The Instructions

First, declare a variable named myArray and assign it to an empty array.
Great! Now populate myArray with two strings. Put your full name in the first string, and your Skype handle in the second.
Next, declare a function named cutName. It should expect a parameter name.
cutName should return an array by breaking up the input string into individual words.
Example: cutName("Douglas Calhoun") should return ["Douglas", "Calhoun"]
Example: cutName("John B. Smith") should return ["John", "B.", "Smith"]

Declare a new variable named myInfo and assign it to an empty object literal.
Add the following three key-value pairs to myInfo:
Key: fullName, Value: The result of calling cutName on the name string within myArray.
Key: skype, Value: The Skype handle within myArray.
Key: github, Value: If you have a github handle, enter it here as a string. If not, set this to null instead.
*/

/*
---------------------------------------------------------------------------------
Instruction (1)
First, declare a variable named myArray and assign it to an empty array.
(Hint: You do not need to write anything other than the described statement.)
*/

let myArray = [];
// myArray.push('Joel Corey', 'JoelSkypes');

// function cutName(name) {
// 	return name.split(' ');
// }

// let myInfo = {};

// myInfo.fullName = cutName(myArray[0]);
// myInfo.skype = myArray[1];
// myInfo.github = 'joelcorey';

// console.log(myInfo);

/*
---------------------------------------------------------------------------------
Instruction (2)
Great! Now populate myArray with two strings. Put your full name in the first string, and your Skype handle in the second.
*/

// assume that myArray already exists as an empty array
// either add in the strings using a method
// or simply reassign myArray to an array containing the strings

//let myArray = [];
myArray.push('Joel Corey', 'JoelSkypes');

// function cutName(name) {
// 	return name.split(' ');
// }

// let myInfo = {};

// myInfo.fullName = cutName(myArray[0]);
// myInfo.skype = myArray[1];
// myInfo.github = 'joelcorey';

// console.log(myInfo);

/*
---------------------------------------------------------------------------------
Instruction (3)
Next, declare a function named cutName. It should expect a parameter name.
*/

// you need to declare a function
// the function should be named cutName
// it should take one parameter, called name
// the function body should remain empty for this step

let myArray = [];
myArray.push('Joel Corey', 'JoelSkypes');

function cutName(name) {
	//return name.split(' ');
}

// let myInfo = {};

// myInfo.fullName = cutName(myArray[0]);
// myInfo.skype = myArray[1];
// myInfo.github = 'joelcorey';

// console.log(myInfo);

/*
---------------------------------------------------------------------------------
Instruction (4)
cutName should return an array by breaking up the input string into individual words.
Example: cutName("Douglas Calhoun") should return ["Douglas", "Calhoun"]
Example: cutName("John B. Smith") should return ["John", "B.", "Smith"]
*/

function cutName(name) {
	return name.split(' ');
}

// let myArray = [];
// myArray.push('Joel Corey', 'JoelSkypes');

// let myInfo = {};

// myInfo.fullName = cutName(myArray[0]);
// myInfo.skype = myArray[1];
// myInfo.github = 'joelcorey';

// console.log(myInfo);

/*
---------------------------------------------------------------------------------
Instruction (5)
Declare a new variable named myInfo and assign it to an empty object literal.
*/

// Declare a new variable named myInfo and assign it to an empty object literal.

// function cutName(name) {
// 	return name.split(' ');
// }

// let myArray = [];
// myArray.push('Joel Corey', 'JoelSkypes');

let myInfo = {};

// myInfo.fullName = cutName(myArray[0]);
// myInfo.skype = myArray[1];
// myInfo.github = 'joelcorey';

// console.log(myInfo);

/*
---------------------------------------------------------------------------------
Instruction (6)
Add the following three key-value pairs to myInfo:
Key: fullName, Value: The result of calling cutName on the name string within myArray.
Key: skype, Value: The Skype handle within myArray.
Key: github, Value: If you have a github handle, enter it here as a string. If not, set this to null instead.
*/

// assume that myArray, cutName, and myInfo all already exist
// simply add the properties to the existing myInfo object

// function cutName(name) {
// 	return name.split(' ');
// }

// let myArray = [];
// myArray.push('Joel Corey', 'JoelSkypes');

// let myInfo = {};

myInfo.fullName = cutName(myArray[0]);
myInfo.skype = myArray[1];
myInfo.github = 'joelcorey';

// console.log(myInfo);