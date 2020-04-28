/*
removeNumbersLargerThan

Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties 
whose values are numbers greater than the given number.
*/

function removeNumbersLargerThan(num, obj) {
    for (let key in obj) {
        if (obj[key] > num) {
            delete obj[key];
        }
    }
}

var obj = {
    a: 8,
    b: 2,
    c: 'montana'
};
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }