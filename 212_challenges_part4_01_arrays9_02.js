/*
filterEvenLengthWords

Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing 
only the elements of the given array whose length is an even number.
*/

function filterEvenLengthWords(words) {
    let newArray = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 0) newArray.push(words[i]); 
    }
    return newArray;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']