/*
getLongestWordOfMixedElements

Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest 
string in the given array.

Notes:
If the array is empty, it should return an empty string ("").
If the array contains no strings; it should return an empty string.
*/

function getLongestWordOfMixedElements(arr) {
    if (arr.length === 0) {
        return '';
    }

    let longest = arr.find(el => typeof el === 'string')
    if (longest === undefined) {
        longest = '';
    }

    arr.map(el => {
        if (typeof el ==='string' && el.length > longest.length) {
            longest = el;
        }
    })

    return longest;    
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'