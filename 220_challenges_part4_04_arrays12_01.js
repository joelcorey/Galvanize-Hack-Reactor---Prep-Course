/*
findSmallestElement

Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number 
within the given array.
Notes:
If the given array is empty, it should return 0.
*/

function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let smallest = arr[0];

    arr.map(el => {
        if (el < smallest) {
            smallest = el;
        }
    });
    return smallest;
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
