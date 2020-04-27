/*
Using the `>` operator

Complete a function that takes in two number parameters (num1, num2), 
and returns whether num1 is greater than num2. Your function should 
create a variable and assign it to the result of comparing num1 to num2 
using the > operator, then return that variable.
*/

function applyGreaterThan(num1, num2) {
    // create a result variable
    // assign it expression comparing if num1 is greater than num2
    // return result

    let result = num1 > num2;
    return result;
}

var trueGreaterThanResult = applyGreaterThan(101, 10);
console.log('should be true:', trueGreaterThanResult);

var falseGreaterThanResult = applyGreaterThan(-13, 2);
console.log('should be false:', falseGreaterThanResult);