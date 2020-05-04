/*
Convert Object To Array 2

Write a function called "listAllValues" which returns an array of all the 
input object's values. Example input:

var input = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};

Function's return value (output):

['Krysten', 33, false]

Do not use "Object.values" to solve this prompt.

Note that the input may have a different number of keys and values than the 
given sample. E.g. it should also handle an input like:

var alternativeInput = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};

Function's return value (output):

['a', 11, true, 1]
*/

function listAllValues(object) {
    let keys = [];
    for (const key in object) {
        //keys.push(key)
        keys.push(object[key]);
    }
    return keys;
}

var input = {
    name : 'Krysten',
    age : 33,
    hasPets : false
};
console.log(listAllValues(input));

var alternativeInput = {
    a : 'a',
    number : 11,
    hungry : true,
    grammyWins : 1
};
console.log(listAllValues(alternativeInput));
  