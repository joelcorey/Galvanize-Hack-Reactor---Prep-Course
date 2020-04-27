/*
Using the `Math.random()` method

Complete a function that takes in two number parameters, representing 
the lower and upper bounds for a random number to be generated, and 
returns a randomly generated number within the described bounds. Your 
function should create a variable and assign it to the result of 
generating a random number using the Math.random() method, along with 
the formula described above, then return that variable.
*/

function generateRandomNumber(min, max) {
    // create a result variable
    // assign it to formula for random number between min and max
    // return result

    return Math.random() * (max - min) + min;
}

var randomNumber = generateRandomNumber(1, 10);
console.log('should be between 1 and 10:', randomNumber);