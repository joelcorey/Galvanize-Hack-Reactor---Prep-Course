/*
getAverageOfElementsAtProperty

Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the 
average of all the elements in the array located at the given key.
Notes:
If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/

function getAverageOfElementsAtProperty(obj, key) {
    if (!(obj.hasOwnProperty(key))) {
        return 0;
    }
    if (!(Array.isArray(obj[key]))) {
        return 0;
    }
    if (obj[key].length === 0) {
        return 0;
    }

    let sum = 0;

    obj[key].map(el => sum += el);
    return sum / obj[key].length;
}

var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2