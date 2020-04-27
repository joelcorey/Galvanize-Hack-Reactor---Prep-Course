/*
Use an object to count letters in a word

Write a function called "countAllCharacters".

Given a string of characters, "countAllCharacters" returns an object where each key is 
a character in the given string, with its value being how many times that character 
appeared in the given string. If given an empty string, your function should return an 
empty object.
*/

function countAllCharacters(string) {
    if (string === '') {
        return {};
    }
    
    let array = string.split('');
    let count = {};

    for (let i = 0; i < array.length; i++) {
        if (count[array[i]] === undefined) {
            count[array[i]] = 1;
        }
        else
        {
            count[array[i]] += 1;
        }
        
    }
    return count;
}

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);