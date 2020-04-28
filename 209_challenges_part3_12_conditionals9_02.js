/*
findShortestOfThreeWords

Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the 
given strings.
Notes:
If there are ties, it should return the first word in the parameters list.
*/

function findShortestOfThreeWords(word1, word2, word3) {
    let words = [word1, word2, word3];
    let shortest = word1;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'