/*
getSumOfAllElementsAtProperty

Write a function called "getSumOfAllElementsAtProperty".

Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all 
the elements in the array located at the given key.

Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the key, it should return 0.

*/

function getSumOfAllElementsAtProperty(obj, key) {
    if (!(obj.hasOwnProperty(key))) {
        return 0;
    }
    // if (index > obj[key].length) {
    //     return 0;
    // }
    if (!(Array.isArray(obj[key]))) {
        return 0;
    }
    if (obj[key].length === 0) {
        return 0;
    }

    let sum = 0;

    obj[key].map(el => sum += el);
    return sum;
}

var obj = {
    key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13