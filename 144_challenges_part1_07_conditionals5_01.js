/*
isOddLength

Write a function called "isOddLength".

Given a word, "isOddLength" returns whether the length of the given word is 
odd.
*/

function isOddLength(word) {
    if (word.length % 2 !== 0) return true;
    return false;
}

var output = isOddLength('special');
console.log(output); // --> true