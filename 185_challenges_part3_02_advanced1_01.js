/*
countWords

Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in 
the given string, with its value being how many times that word appeared in 
the given string.
Notes:
If given an empty string, it should return an empty object.
*/

function countWords(str) {
    if (str.length === 0) return {};
    
    let arr = str.split(' ');
    let obj = {};
    
    for (i = 0; i <= arr.length - 1; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        }
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}