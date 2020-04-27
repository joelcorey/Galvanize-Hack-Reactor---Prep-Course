/*
Using Array.isArray() again

Complete a function that takes in two parameters, one value is an object, 
possibly containing an array, as well as a key in that object, and returns 
whether the value located at the key is an array or not. Your function should 
create a variable, assign it to an expression that tells whether the input 
object's value located at the input key is an array or not, using the 
Array.isArray() method, then return that created variable.
*/

function isAnArrayAgain(inputObj, key) {
    // create a result variable
    // assign it to a call to the applicable method
    // return the result variable

    let result = Array.isArray(inputObj[key]);
    return result;
}

var resultBoolean1 = isAnArrayAgain({key1: [1, 2, 3], key2: 'gg'}, 'key1');
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArrayAgain({name: 'Tom', friend: 'Jerry'}, 'friend');
console.log('should log false:', resultBoolean2);