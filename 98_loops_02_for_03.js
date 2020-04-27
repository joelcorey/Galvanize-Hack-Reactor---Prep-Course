/*
For loop over a string

Complete a function that takes one parameter, a string of characters, and logs all of 
its characters (one at a time) to the console. Your function should use a for loop to 
log each character from the beginning to the end of the string, then return nothing. 
Below is an example of the code running, assuming that you will have completed the 
described function: loopAStringAgain.

loopAStringAgain('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAStringAgain('abcd');
// console output:
  // a
  // b
  // c
  // d

*/

function loopAStringAgain(string) {
    // create a loop which iterates over the input string
    // log current string character to the console

    for(let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

loopAStringAgain('derp derp derpity derp');