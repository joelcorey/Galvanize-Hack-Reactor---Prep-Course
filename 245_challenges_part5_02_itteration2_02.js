/*
getStringLength

Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.
Notes:
Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.
*/

function getStringLength(string) {
    if (string === '') {
        return 0;
    }

    let count = 1;
    
    while (string[count] !== undefined) {
        count++;
    }
    return count;
}

var output = getStringLength('hello');
console.log(output); // --> 5