/*
Using the `+=` operator

Complete a function that takes in two number parameters (base, 
incrementer), and returns the result of incrementing the base by the 
incrementer. Your function should reassign base to the result of 
incrementing base by incrementer using the += operator, then return 
base.
*/

function increment(base, incrementer) {
    // reassign base to result of incrementing base by incrementer
    // return base

    return base += incrementer;
}

var resultIncremented = increment(11, 5);
console.log('should be 16:', resultIncremented);