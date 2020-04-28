/*
getAllWords

Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in 
the sentence.
Notes:
If given an empty string, it should return an empty array.
You should be familiar with the 'split' method.
*/

function getAllWords(str) {
    if (str.length === 0 ) return [];
    return str.split(' ');
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']