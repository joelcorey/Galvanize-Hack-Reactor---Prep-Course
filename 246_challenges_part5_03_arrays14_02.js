/*
joinArraysOfArrays

Write a function called "joinArrayOfArrays".

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the 
elements of the nested arrays.
*/

function joinArrayOfArrays(arr1) {
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let q = 0; q < arr1[i].length; q++) {
            arr2.push(arr1[i][q]);
        }
    }
    return arr2;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']