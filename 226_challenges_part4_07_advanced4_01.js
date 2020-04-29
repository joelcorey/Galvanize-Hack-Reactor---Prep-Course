/*
countAllCharacters

Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a 
character in the given string. The value of each key should be how many times 
each character appeared in the given string.
Notes:
If given an empty string, countAllCharacters should return an empty object.
*/

function countAllCharacters(str) {
    if (str.length === 0) {
        return {};
    }

    let count = {};

    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === undefined) {
            count[str[i]] = 1;
        }
        else{
            count[str[i]] += 1;
        }
    }
    return count;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}