/*
getProperty

Write a function called "getProperty". Given an object and a key, "getProperty" 
returns the value of the property at the given key. 
Notes:
If there is no property at the given key, it should return undefined.
*/

function getProperty(obj, key) {
    return obj[key];
}
  
var obj = {
    key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'