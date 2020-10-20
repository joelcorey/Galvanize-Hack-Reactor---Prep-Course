/*
Determine if a value is an Object

Complete a function that takes in one parameter, possibly an object, and returns 
whether the input in an object or not. Your function should create several 
variables (isObject, isNotAnArray, and isObjectAndNotAnArray). Assign isObject 
to an application of the typeof operator to the input. Assign isNotAnArray to a 
call to the Array.isArray() method with the ! operator applied as well. Assign 
isObjectAndNotAnArray to the two previous variabes combined with the && 
operator, and return the isObjectAndNotAnArray variable. 
*/

function isAnObject(input) {
    // create an isObject variable
    // assign it to whether the input is an object type
    // create an isNotAnArray variable
    // assign it to whether the input is not an array
    // create an isObjectAndNotAnArray variable
    // assign it to a combination of isObject AND isNotAnArray
    // return the isObjectAndNotAnArray variable
    
    let isObject = typeof input;
    let isNotAnArray = !Array.isArray(input);
    let isObjectAndNotAnArray = isObject && isNotAnArray;
    return isObjectAndNotAnArray;
}

var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);