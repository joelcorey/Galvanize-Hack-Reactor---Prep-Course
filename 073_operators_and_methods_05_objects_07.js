/*
Using Object.keys()

Complete a function that takes in one parameter, an object. Your function 
should create a keys variable, and assign it to an expression which generates 
an array of all of the keys in said object by calling Object.keys(), then 
return that keys variable.
*/

function getAllKeys(obj) {
    // create a keys variable
    // assign it to an expression which will generate an array of all of the keys in obj
    // return to the keys variable

    let keys = Object.keys(obj);
    return keys;
}

var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);