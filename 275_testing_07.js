/*
applyAssertObjectsEqual

Applying assertObjectsEqual

Write an "assertObjectsEqual" function once more, from memory. Please DO NOT simply PASTE in from 
before (If you have to go back and look at your previously-implemented code once, that is certainly 
okay, but come back here and write it from memory). Then use your assertion function in a series of 
test cases to thoroughly test the code. Use categorical reasoning to consider all the useful cases. 
The only automated test will be one to ensure that you have created a function that is named 
assertObjectsEqual. It is up to you to construct the rest of the "test suite".

Similarly to last time, the first step will be to set up some tests for the code, then correct the 
errors in the implementation. Be sure to organize tests for both functions. If you are truly stumped, 
please feel free to consult the reference answers in the last section of the module. Ideally, you 
should eventually complete the problem on your own.

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj[lastName];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
*/

// COLORS! https://blog.bitsrc.io/coloring-your-terminal-using-nodejs-eb647d4af2a2

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
    var firstName = obj.firstName;
    var lastName = obj.lastName;
  
    if (firstName && lastName) {
        obj['fullName'] = firstName + ' ' + lastName;
    }
    
    return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual (actual, expected, testName) {
    // default passing colors, bright green
    let firstColorCode = "\x1b[92m";
    let lastColorCode = "\x1b[39m";

    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    let failedMessage = `Failed [${testName}] Expected ${expected} to equal ${actual}`;

    if (actual !== expected) {
        // bright red colors for failing tests
        firstColorCode = "\x1b[91m";
        lastColorCode = "\x1b[39m";

        console.log(`${firstColorCode}${failedMessage}${lastColorCode}`);
        return;
    }

    
    console.log(`${firstColorCode}Passed [${testName}]${lastColorCode}`);
    return;

}

// TESTS CASES
// everything working
let person = {};
person.firstName = 'Jon';
person.lastName = 'Derp';
let input = addFullNameProp(person);
let expected =  { firstName: 'Jon', lastName: 'Derp', fullName: 'Jon Derp' };
assertObjectsEqual(input, expected, 'Should add full name property to input object');

// missing first name
let person2 = {};
person2.lastName = 'Derp';
let input2 = addFullNameProp(person2);
assertObjectsEqual(input2, expected, 'Should add full name property to input object with missing first name');

// missing last name
let person3 = {};
person3.firstName = 'Jon';
let input3 = addFullNameProp(person3);
assertObjectsEqual(input3, expected, 'Should add full name property to input object with missing last name');
