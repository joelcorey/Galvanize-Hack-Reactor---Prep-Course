/*
countCharacter

Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of 
occurrences of a given character in the given string.
*/

function countCharacter(str, char) {
    let count = 0;
    for (i = 0; i <= str.length; i++) {
        if (str[i] === char) count += 1;;
    }
    return count;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3