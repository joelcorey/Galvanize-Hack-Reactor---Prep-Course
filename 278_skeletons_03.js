/*
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a 
function that determines whether a string is an isogram, following the format of the previous problems. It should return true if 
the input string is an isogram, and should return false otherwise.

While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

Notes:
Assume your input is only letters.
Assume the empty string is an isogram.
Ignore case.
Follow the pseudocode exactly!

// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
*/

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    const setLetters = new Set()
    // add each char to a set
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // note: a set drops dup values
    for (let i = 0; i < text.length; i++) {
        setLetters.add(text[i])
    }
   
    // thus, to see if all the chars were unique,
    // check length of text and the size of the set
    if(text.length !== setLetters.size) return false
    return true
}

// ASSERTION FUNCTION(S) TO BE USED

function assertIsIsogram(actual, expected, testName) {
    if(!isIsogram(actual)) return console.log(`Failed [${testName}] ${actual} is not an isogram, function isIsogram is expected to return ${expected}`)
    return console.log(`Passed [${testName}]!`);
}

// TESTS CASES

var actual = 'hi'
var expected = true
assertIsIsogram(actual, true, 'isIsogram succesfully tests an isogram');

var actual = 'hello'
var expected = true
assertIsIsogram(actual, true, 'isIsogram succesfully tests an isogram');