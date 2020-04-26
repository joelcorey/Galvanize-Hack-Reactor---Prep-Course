/*
Complete a function that takes in two number parameters (num1, num2), 
and returns the remainder after dividing num1 by num2. Your function 
should create a variable and assign it to the remainder after dividing 
num1 by num2 using the % operator, then return that variable.
*/

function getRemainder(num1, num2) {
    // create a result variable,
    // assign it to remainder after dividing num1 by num2
    // return the result variable
    let result = num1 % num2
    return result
}

var resultRemainder = getRemainder(21, 6);
console.log('should be 3:', resultRemainder);