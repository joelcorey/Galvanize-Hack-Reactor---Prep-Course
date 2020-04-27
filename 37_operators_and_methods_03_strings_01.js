/*
Accessing a Character in a String

Complete a function that takes two parameters, a string and a numerical 
index, and returns the character in the string located at the numerical 
index. Your function should create a variable and assign it to an 
expression which accesses the character located at the numerical index, 
then return that variable.
*/

function accessACharacter(string, index) {
    // create a result variable,
    // assign it to an expression that accesses the character within string at the index
    // return the result variable

    return string[index];
}

var resultCharacter = accessACharacter('Computer', 3);
console.log('should be "p":', resultCharacter);