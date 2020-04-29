/*
computeSumOfAllElements

Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all 
the elements in the given array.
*/

function computeSumOfAllElements(arr) {
    let sum = 0;
    arr.map(el => sum += el);
    return sum;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6