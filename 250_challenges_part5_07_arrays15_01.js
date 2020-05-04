/*
findShortestWordAmongMixedElements

Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string
within the given array.

Notes:
If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.
*/

function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
        return '';
    }

    let shortest = arr.find(el => typeof el === 'string')
    if (shortest === undefined) {
        shortest = '';
    }

    arr.map(el => {
        if (typeof el ==='string' && el.length < shortest.length) {
            shortest = el;
        }
    })

    return shortest;    
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'