/*
getElementsAfter

Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all 
the elements after (but not including) the given index.
Notes:
In order to do this you should be familiar with the 'slice' method.
*/

function getElementsAfter(array, n) {
    return array.slice(n + 1, array.length);
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']