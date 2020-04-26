/*
Complete a function that takes in two number parameters (base, 
decrementer), and returns the result of decrementing the base by the 
decrementer. Your function should reassign base to the result of 
decrementing base by decrementer using the -= operator, then return base.
*/

function decrement(base, decrementer) {
    // reassign base to result of decrementing base by decrementer
    // return base
    return base -= decrementer
}

var resultDecremented = decrement(17, 5);
console.log('should be 12:', resultDecremented);