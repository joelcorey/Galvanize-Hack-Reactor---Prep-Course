/*
getLargestElement

Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given 
array.
Notes:
It should return 0 if the array is empty.
*/

function getLargestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let largest = arr[0];

    arr.map(el => {
        if (el > largest) {
            largest = el;
        }
    })
    return largest;
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;