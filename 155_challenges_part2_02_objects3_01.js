/*
isPersonOldEnoughToDrive

Write a function called "isPersonOldEnoughToDrive".

Given a "person" object, that contains an "age" property, 
"isPersonOldEnoughToDrive" returns whether the given person is old enough to 
drive.
Notes:
The legal driving age in the United States is 16.
*/

function isPersonOldEnoughToDrive(person) {
    if (person.age >= 16) return true;
    return false;
}

var obj = {
    age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true