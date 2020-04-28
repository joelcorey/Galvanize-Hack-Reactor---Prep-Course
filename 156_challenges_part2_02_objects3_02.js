/*
isPersonOldEnoughToVote

Write a function called "isPersonOldEnoughToVote".

Given a "person" object, that contains an "age" property, 
"isPersonOldEnoughToVote" returns whether the given person is old enough to 
vote.
Notes:
The legal voting age in the United States is 18.
*/

function isPersonOldEnoughToVote(person) {
    if (person.age >= 18) return true
    return false
}

var obj = {
    age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true