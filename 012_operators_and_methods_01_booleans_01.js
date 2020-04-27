/*
Using the 'not' operator

complete a function that takes in a boolean parameter, and returns 
the opposite.
*/

function opposite(boolean) {
    // returns the opposite of the inputted boolean value
    return !boolean;
}

var outputTrue = opposite(false);
console.log('should be true:', outputTrue);

var outputFalse = opposite(true);
console.log('should be false:', outputFalse);