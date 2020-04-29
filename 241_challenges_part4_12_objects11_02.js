/*
getLargestElementAtProperty

Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest 
element in the array located at the given key.

Notes:
If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getLargestElementAtProperty(obj, key) {
    if (!(obj.hasOwnProperty(key))) {
        return undefined;
    }
    if (!(Array.isArray(obj[key]))) {
        return undefined;
    }
    if (obj[key].length === 0) {
        return undefined;
    }

    largest = obj[key][0];

    obj[key].map(el => {
        if (el > largest) largest = el;
    })
    return largest;
}

var obj = {
    key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4