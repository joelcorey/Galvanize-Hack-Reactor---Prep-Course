/*
isOldEnoughToDrive

Write a function called "isOldEnoughToDrive". Given a number, in this case an 
age, "isOldEnoughToDrive" returns whether a person of this given age is old 
enough to legally drive in the United States. 
Notes:
The legal driving age in the United States is 16.
*/

function isOldEnoughToDrive(age) {
    if (age >= 16) {
        return true;
    }
    return false;
}

var output = isOldEnoughToDrive(22);
console.log(output); // --> true