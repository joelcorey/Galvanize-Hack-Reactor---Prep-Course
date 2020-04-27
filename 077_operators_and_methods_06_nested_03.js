/*
Using Object.keys() again

Complete a function that takes in two parameters, an object and a key. Your 
function should create a keys variable, and assign it to an expression which 
generates an array of all of the keys in the nested object located within the 
input object, by calling Object.keys(), then return that keys variable.
*/

function getAllKeysAgain(obj, key) {
    // create a keys variable
    // assign it to an expression which will generate an array of all of the keys located within obj at key
    // return to the keys variable

    let keys = Object.keys(obj[key]);
    return keys;
}

var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys);