/*
getSmallestElementAtProperty

Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest 
element in the array located at the given key.
Notes:
If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getSmallestElementAtProperty(obj, key) {
    if (!(obj.hasOwnProperty(key))) {
        return undefined;
    }
    if (!(Array.isArray(obj[key]))) {
        return undefined;
    }
    if (obj[key].length === 0) {
        return undefined;
    }

    smallest = obj[key][0];

    obj[key].map(el => {
        if (el < smallest) smallest = el;
    })
    return smallest;
}

var obj = {
    key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1