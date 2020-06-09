/*
Average

Use the skeleton provided to write a working implementation of a sum and an average function. The solution 
will require that you use your sum function within your average function. While you should create your own 
test suite to get the most out of this exercise, there are automated tests provided as well.
*/

// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
    // uses sum function
    // returns the average of an array of numbers
    return sum(numbers) / numbers.length;
}
  
function sum(numbers) {
    // returns the sum of an array of numbers
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
    }
    return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArrayAverage(actual, expected, testName) {
    if (average(actual) !== expected) return console.log(`Failed [${testName}], expected: ${expected}, but got ${average(actual)}`);
    return console.log(`Passed!`);
}

function assertArraySum(actual, expected, testName) {
    if (sum(actual) !== expected) return console.log(`Failed [${testName}], expected: ${expected}, but got ${sum(actual)}`);
    return console.log(`Passed!`);
}

// TESTS CASES
var actual = [1, 2, 3];
var expected = 2
assertArrayAverage(actual, expected, 'should return correct average')

var actual = [1, 2, 3, 4];
var expected = 2
assertArrayAverage(actual, expected, 'should return incorrect average')

var actual = [1, 2, 3];
var expected = 6
assertArraySum(actual, expected, 'should be equal')

var actual = [1, 2, 4];
var expected = 6
assertArraySum(actual, expected, 'should not be equal')