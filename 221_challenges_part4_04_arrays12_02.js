/*
findShortestElement

Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the
given array.
Notes:
If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string.
*/

function findShortestElement(arr) {
    if (arr.length === 0) {
        return '';
    }

    let smallest = arr[0];

    arr.map(el => {
        if (el.length < smallest.length) {
            smallest = el;
        }
    });
    return smallest;
}


var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'