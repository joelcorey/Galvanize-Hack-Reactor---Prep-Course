/*
Concatenate two strings into a full name

Complete a function that takes in two parameters, both will be strings, 
representing a first name and a last name, and returns a full name 
string. Your function should create a new variable, assign it to an 
expression which will add together or concatenate the first and last 
name strings, with a space in between, then return the that variable.
*/

function createFullName(firstName, lastName) {
    // create a fullName variable
    // assign it to an expression adding first and last name with a space in between
    // return the fullName variable

    return `${firstName} ${lastName}`;
}

var resultFullName1 = createFullName("Duevyn", "Cooke");
console.log("should log Duevyn Cooke:", resultFullName1);

var resultFullName2 = createFullName("Ada", "Lovelace");
console.log("should log Ada Lovelace:", resultFullName2);