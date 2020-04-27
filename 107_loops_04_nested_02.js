/*
For-in loop over an object of objects

Complete a function that takes one parameter, a object of objects, and logs all of its 
values (log each value in first inner object, one at a time, then second inner object, 
and so on...) to the console. Your function should use a nested for-in loop to log 
each value from all inner objects, then return nothing. Below is an example of the 
code running, assuming that you will have completed the described 
function: loopAnObjectOfObjects.

loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c

*/

function loopAnObjectOfObjects(nestedObject) {
  // create a loop which iterates over the input object
  // create an inner loop which iterates over current inner object
  // log current value to the console

    for (key1 in nestedObject) {
        for (key2 in nestedObject[key1]) {
            console.log(nestedObject[key1][key2]);
        }
    }
}

loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });