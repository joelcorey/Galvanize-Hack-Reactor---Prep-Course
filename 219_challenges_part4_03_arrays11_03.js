/*
getLongestElement

Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given 
array.
Notes:
If there are ties, it returns the first element to appear.
If the array is empty, it should return an empty string.
*/

function getLongestElement(arr) {
    if (arr.length === 0) {
        return '';
    }
    
    let longest = arr[0];
    
    arr.map(el => {
        if (el.length > longest.length ) {
            longest = el;
        }
    });
    return longest;
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
