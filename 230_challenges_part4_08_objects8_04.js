/*
getLastElementOfProperty

Write a function called "getLastElementOfProperty".

Given an object and a key, "getLastElementOfProperty" returns the last element 
of an array located at the given key.
Notes:
If the array is empty, it should return undefined.
if the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getLastElementOfProperty(obj, key) {
    if (!(key in obj)) {
        return undefined;
    }
    if (obj[key].length === 0) {
        return undefined;
    }
    if (!(Array.isArray(obj[key]))) {
        return undefined;
    }

    let index = obj[key].length - 1;
    return obj[key][index];
}

var obj = {
    key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'kes');
console.log(output); // --> 5