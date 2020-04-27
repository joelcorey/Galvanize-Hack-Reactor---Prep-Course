/*
For loop over a series of numbers

Complete a function that takes two parameters, both will be integers (start, end), and 
logs to the console, all of the integers starting with start, and ending with end. 
Your function should use a for loop to log each integer from start, up to and 
including end, then return nothing. Below is an example of the code running, assuming 
that you will have completed the described function: loopASequenceAgain.

loopASequenceAgain(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequenceAgain(3, 7);
  // console output:
    // 3
    // 4
    // 5
    // 6
    // 7

*/

function loopASequenceAgain(start, end) {
    // create a loop which loops from start to end
    // log current value to console

    for(let i = 0; start <= end; start++) {
        console.log(start);
    }
}

loopASequenceAgain(1, 5);