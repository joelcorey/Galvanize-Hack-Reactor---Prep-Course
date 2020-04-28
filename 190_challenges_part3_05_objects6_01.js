/*
removeArrayValues

Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values 
are arrays.
*/

function removeArrayValues(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key]) === true) {
            delete obj[key];
        }
    }
}

var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
};

removeArrayValues(obj);
console.log(obj); // --> { b: 2 }