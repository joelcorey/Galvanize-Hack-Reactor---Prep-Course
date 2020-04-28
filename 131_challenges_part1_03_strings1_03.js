/*
getLengthOfTwoWords

Write a function called "getLengthOfTwoWords". Given 2 words, 
"getLengthOfTwoWords" returns the sum of their lengths.
*/

function getLengthOfTwoWords(word1, word2) {
    return word1.concat(word2).length
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9