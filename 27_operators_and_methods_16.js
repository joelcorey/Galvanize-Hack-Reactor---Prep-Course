/*
Complete a function that takes in two number parameters (base, divider), 
and returns the result of reassigning the base to be the base divided by 
the divider. Your function should reassign base to the result of dividing 
base by divider using the /= operator, then return base.
*/

function applyDivideEquals(base, divider) {
    // reassign base to result of dividing base by divider
    // return base
    return base /= divider
}

var resultDivided = applyDivideEquals(56, 7);
console.log('should be 8:', resultDivided);
