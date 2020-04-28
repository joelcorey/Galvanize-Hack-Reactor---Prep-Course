/*
findMinLengthOfThreeWords

Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the 
shortest word.
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
    shortest = word1.length;
    if (word2.length < shortest) {
      shortest = word2.length;
    } else if (word3.length < shortest) {
      shortest = word3.length;
    }
    return shortest;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1