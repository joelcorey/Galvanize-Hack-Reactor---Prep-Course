/*
getProductOfAllElementsAtProperty

Write a function called "getProductOfAllElementsAtProperty".

Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of 
all the elements in the array located at the given key.
Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/

function getProductOfAllElementsAtProperty(obj, key) {
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

    let product = obj[key][0];
    obj[key].map(el => product *= el);
    return product;
}

var obj = {
    key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24