/*
getLongestOfThreeWords

Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:
If there is a tie, it should return the first word in the tie.
*/

function getLongestOfThreeWords(word1, word2, word3) {
    let words = [word1, word2, word3];
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i] 
        }
    }
    return longest;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'