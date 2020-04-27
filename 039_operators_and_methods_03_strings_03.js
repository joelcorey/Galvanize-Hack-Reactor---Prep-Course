/*
Concatenate two strings

Complete a function that takes in two parameters, both will be strings, 
and returns the two strings concatenated. Your function should create a 
new variable, assign it to an expression which will add together or 
concatenate the input strings, then return that variable.
*/

function addTogetherTwoStrings(string1, string2) {
    // create a result variable
    // assign it to an expression which adds together string1 and string2
    // return the result variable

    return string1 + string2;
}

var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);