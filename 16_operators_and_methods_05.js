/*
complete a function that takes in two scalar (boolean, number, or 
string) parameters. Your function should create a variable and assign 
it to the result of comparing the two input parameters 
using the === operator, then return that variable.
*/

function areEqual(param_1, param_2) {
    // create a result variable
    // assign it to a comparison between param_1 and param_2 using "equal to" operator
    // return the result variable
    let result = param_1 === param_2
    return result
}

var outputTrue = areEqual("happiness", "happiness");
console.log('should be true:', outputTrue);

var outputFalse = areEqual(0, false);
console.log('should be false:', outputFalse);
