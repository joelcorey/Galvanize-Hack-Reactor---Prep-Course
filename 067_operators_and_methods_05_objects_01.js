/*
Creating an Object

Complete a function that takes no parameters, and returns a newly created 
object. Your function should create a variable and assign it to a new object, 
then return that variable.
*/

function createObject() {
    // create a result variable,
    // assign it to a new object
    // return the result variable

    return {};
}

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));