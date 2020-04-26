/*
Complete a function that takes in two number parameters (base, 
multiplier), and returns the result of reassigning the base to be the 
base multiplied by the multiplier. Your function should reassign base to 
the result of multipling base by multiplier using the *= operator, then 
return base.
*/

function applyTimesEquals(base, multiplier) {
    // reassign base to result of multiplying base by multiplier
    // return base
    return base *= multiplier
}

var resultMultiplied = applyTimesEquals(3, 5);
console.log('should be 15:', resultMultiplied);