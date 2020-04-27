/*
filterOddElements

Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" returns an array containing only the 
odd numbers of the given array. If the input array contains no odd numbered elements, 
your function should return an empty array.
*/

function filterOddElements(array) {
    let newArray = []

    for(let j = 0; j < array.length; j++) {
        if(array[j] % 2 !== 0) {
            newArray.push(array[j])
        }
    }

    return newArray
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]