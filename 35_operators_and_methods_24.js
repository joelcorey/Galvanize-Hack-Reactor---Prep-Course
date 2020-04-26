/*
Complete a function that takes in two number parameters (num1, num2), 
and returns whether num1 is less than or equal to num2. Your function 
should create a variable and assign it to the result of comparing num1 
to num2 using the <= operator, then return that variable.
*/

function applyLessThanOrEqualTo(num1, num2) {
    // create a result variable
    // assign it expression comparing if num1 is less than or equal num2
    // return result
    let result = num1 <= num2
    return result
}

var trueLessThanOrEqualToResult = applyLessThanOrEqualTo(11, 110);
console.log('should be true:', trueLessThanOrEqualToResult);

var falseLessThanOrEqualToResult = applyLessThanOrEqualTo(-13, -21);
console.log('should be false:', falseLessThanOrEqualToResult);