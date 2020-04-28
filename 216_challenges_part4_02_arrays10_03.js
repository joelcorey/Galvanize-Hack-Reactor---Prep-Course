/*
computeProductOfAllElements

Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products 
of all the elements in the given array.

Notes:
If given array is empty, it should return 0.
*/

function computeProductOfAllElements(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let product = 1;
        
    arr.map(el => { 
        product *= el;
    });
    return product;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60