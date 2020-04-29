/*
getEvenElementsAtProperty

Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array 
containing all the even elements of the array located at the given key.

Notes:
If the array is empty, it should return an empty array.
If the array contains no even elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
*/

function getEvenElementsAtProperty(obj, key) {
    if (!(obj.hasOwnProperty(key))) {
        return [];
    }
    if (!(Array.isArray(obj[key]))) {
        return [];
    }
    if (obj[key].length === 0) {
        return [];
    }

    let evens = [];

    obj[key].map(el => {
        if (el % 2 === 0) {
            evens.push(el);
        }
    });
    return evens;
}

var obj = {
    key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
