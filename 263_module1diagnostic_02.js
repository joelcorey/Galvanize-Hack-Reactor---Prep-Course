/*
Convert Array To Object 2

Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:

var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

Function's return value (output):

{
  make : 'Ford',
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.
*/

function transformArrayToObject(array) {
    let object = {};
    
    for (let i = 0; i < array.length; i++) {
        //if (array[i][0] === 'make') {
            object[array[i][0]] = array[i][1];
        //}
        //if (array[i][0] === 'model') {
            object[array[i][0]] = array[i][1];
        //}
        //if (array[i][0] === 'year') {
            object[array[i][0]] = array[i][1];
        //}
    }
    return object;
}

let input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(transformArrayToObject(input))