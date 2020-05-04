/*
applyAssertArraysEqual

Applying assertArraysEqual

Write an "assertArraysEqual" function once more, from memory. Please DO NOT simply 
PASTE in from before (If you have to go back and look at your previously-implemented 
code once, that is certainly okay, but come back here and write it from memory). 
Then use your assertion function in a series of test cases to thoroughly test the code. 
Use categorical reasoning to consider all the useful cases. The only automated test 
will be one to ensure that you have created a function that is named assertArraysEqual. 
It is up to you to construct the rest of the "test suite".

This challenge will see you correcting two functions, map and cubeAll. map is another 
example of a higher order function, and should behave similarly to the built in 
method Array.prototype.map. map will take as its parameters an array and a 
callbackFunction. It should iterate over the input array, applying the 
callbackFunction to each element. It should then return a new array whose elements 
are the result of applying the callbackFunction to each element in the input array. 
For example, calling map with an input array of [1, 2 ,3] and a callbackFunction 
named addOne (will take in a number and return that number plus 1), our output would 
be [2, 3, 4].

With this in mind, you will then correct cubeAll, a function which will make a call to 
map within it. cubeAll should take in an array of numbers, and return an array of 
those numbers having been cubed. For example, calling cubeAll with an input array 
of [1, 2, 3] would yield an output of [1, 8, 27].

Similarly to last time, the first step will be to set up some tests for the code, 
then correct the errors in the implementation. Be sure to organize tests for both 
functions. If you are truly stumped, please feel free to consult the reference 
answers in the last section of the module. Ideally, you should eventually complete 
the problem on your own.

Complete and test the code below.

// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray = newArray + callbackFunction(element);
  }

  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
*/

// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      newArray = newArray + callbackFunction(element);
    }
  
    return newArray;
  }
  
  function cubeAll(numbers) {
    return map(numbers, function(n) {
      return n * n;
    });
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  
  // TESTS CASES