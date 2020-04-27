/*
Loop over an object of arrays

Complete a function that takes one parameter, a object of arrays, and logs all of its 
values (log each value in first inner array, one at a time, then second inner array, 
and so on...) to the console. Your function should use a for loop nested inside of a 
for-in loop to log each value from all inner arrays, then return nothing. Below is an 
example of the code running, assuming that you will have completed the described 
function: loopAnObjectOfArrays.

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z

*/

function loopAnObjectOfArrays(objectOfArrays) {
    for(key in objectOfArrays) {
        for(let i = 0; i < objectOfArrays[key].length; i++) {
            console.log(objectOfArrays[key][i]);
        }
    }
}

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });