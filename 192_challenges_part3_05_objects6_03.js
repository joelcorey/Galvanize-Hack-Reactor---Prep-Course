/*
removeStringValues

Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given 
object whose values are strings.
*/

function removeStringValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            delete obj[key];
        }
    }
}

var obj = {
    name: 'Sam',
    age: 20
};
removeStringValues(obj);
console.log(obj); // { age: 20 }