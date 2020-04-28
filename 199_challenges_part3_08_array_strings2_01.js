/*
convertDoubleSpaceToSingle

Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, 
with all the double spaces converted to single spaces.
*/

function convertDoubleSpaceToSingle(str) {
    arr = str.split('  ');
    return arr.join(' ');
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"