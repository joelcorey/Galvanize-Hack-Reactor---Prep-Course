/*
computeAverageOfNumbers

Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.
Notes:
If given an empty array, it should return 0.
*/

function computeAverageOfNumbers(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let sum = 0;

    nums.map(el => sum += el);
    return sum / nums.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3