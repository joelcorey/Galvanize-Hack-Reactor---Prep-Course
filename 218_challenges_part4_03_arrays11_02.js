/*
getLengthOfShortestElement

Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest 
string in the given array.

Notes:
It should return 0 if the array is empty.
*/

function getLengthOfShortestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let shortest = arr[0];

    arr.map(el => {
        if (el.length < shortest.length ) {
            shortest = el;
        }
    });
    return shortest.length;
}

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
