/*
Using .unshift() again

Complete a function that takes in three parameters, a nested array of arrays, 
an index, and an element, then adds the element to the front of the inner 
array located at the index within the input array of arrays, and returns the 
array of arrays. Your function should use the .unshift() method to add the 
input element to the front of the inner array located at the given index of 
the array of arrays, then return that array of arrays.
*/

function applyUnshiftAgain(arrayOfArrays, index, element) {
    // add the element to the front of the inner array within the array of arrays 
    // located at the index
    // return the array of arrays

    arrayOfArrays[index].unshift(element);
    return arrayOfArrays;
}

var resultArray1 = applyUnshiftAgain([ [1, 3], [10, 11], [9, 4] ], 1, 5);
console.log('should log [ [1, 3], [5, 10, 11], [9, 4] ]:', resultArray1);
  
var resultArray2 = applyUnshiftAgain([ ['ag', 'bc'], ['ef', 'hi'] ], 0, 'iq');
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);