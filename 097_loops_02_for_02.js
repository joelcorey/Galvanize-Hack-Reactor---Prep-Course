/*
For loop over an array

Complete a function that takes one parameter, an array of elements, and logs all of 
its elements (one at a time) to the console. Your function should use a for loop to log 
each element from the beginning to the end of the array, then return nothing. Below is 
an example of the code running, assuming that you will have completed the described 
function: loopAnArrayAgain.

loopAnArrayAgain(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArrayAgain([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5

*/

function loopAnArrayAgain(array) {
    // create a loop which iterates over the input array
    // log current array element to the console
    
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

loopAnArrayAgain([100, 200, 300, 1234]);