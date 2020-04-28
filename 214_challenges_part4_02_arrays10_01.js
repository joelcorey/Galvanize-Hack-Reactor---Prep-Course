/*
squareElements

Write a function called "squareElements". Given an array of numbers, 
"squareElements" should return a new array where each element is the square of 
the element of the given array.
*/

function squareElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]