/*
getAllElementsButNth

Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all 
the elements but the nth.
*/

function getAllElementsButNth(array, n) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i !== n) newArray.push(array[i]); 
    }
    return newArray;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']