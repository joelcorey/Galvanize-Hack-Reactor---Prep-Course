/*
getLengthOfLongestElement

Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest 
string in the given array.
Notes:
It should return 0 if the array is empty.
*/

function getLengthOfLongestElement(arr) {
    if(arr.length === 0) return 0;

    let longest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length) longest = arr[i];
    }
    return longest.length;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5