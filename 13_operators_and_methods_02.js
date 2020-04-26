/*
omplete a function that takes in two boolean parameters. Your function 
should create a variable and assign it to the result of comparing the 
two input parameters using the || operator, then return that variable.
*/

function eitherAreTrue(bool_1, bool_2) {
  // create a result variable
  let result = bool_1 || bool_2;
  // assign it to bool_1 OR bool_2
  // return the result variable
  return result;
}

var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);