/*
Complete a function that takes in one number parameter, and returns the 
absolute value of said parameter. Your function should create a variable 
and assign it to the result of applying the Math.abs() method to the 
input parameter, then return that variable.
*/

function getAbsoluteValue(num) {
    // create a result variable
    // assign it to absolutely value of input num
    // return result
    let variable = Math.abs(num)
    return variable
}

var result1 = getAbsoluteValue(-56);
console.log('should be 56:', result1);

var result2 = getAbsoluteValue(127);
console.log('should be 127:', result2);