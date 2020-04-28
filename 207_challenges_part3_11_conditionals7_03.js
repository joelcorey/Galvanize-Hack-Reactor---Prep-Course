/*
findMaxLengthOfThreeWords

Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest 
word.
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
    return Math.max(word1.length, word2.length, word3.length);
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3