/*
assertObjectsEqual

Write a function called assertObjectsEqual. It will be a function that takes three 
parameters: actual will be an object with scalar values, and should ideally be the 
result of calling a function that you are testing. (presumably the function being 
tested should return an object with scalar values); expected, also an object 
with scalar values, should be the theoretical result of calling your function 
(or, what you "expect" the function to return). Finally, testName will be a 
string, and should describe what a call to assertObjectsEqual is verifying about 
the function being tested.

Please use JSON.stringify() on both objects, then compare them.

Mentioned previously, but worth noting again: In general, these assertion functions 
will need some kind of code or separate functions to test. For the first four Testing 
problems, we will provide examples that include functions like updateObject. It is not 
necessary for you to create these functions. Rather, they are presented to aid your 
understanding of how assertObjectsEqual should behave once you have built it.

Please pay close attention to the exact punctuation and contents of the success and 
failure messages.

Examples:

SUCCESS CASE:

var person = {
  firstName: 'Cassidy',
  lastName: 'Jacobs'
};
updateObject(person, 'firstName', 'Jack');

var expected = {
  firstName: 'Jack',
  lastName: 'Jacobs'
};

assertObjectsEqual(person, expected, "updates person's existing first name field");
// console output:
// passed

*/

// FAILURE CASE (We will assume that updateObject does NOT work):

function updateObject(obj) {
    return obj;
}

function assertObjectsEqual(actual, expected, testName) {
    let failureMessage = `FAILED [${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`

    if (Object.keys(actual).length !== Object.keys(expected).length) {
        console.log(failureMessage);
        return;
    }

    for (const key in actual) {
        if (actual[key] !== expected[key]) {
            console.log(failureMessage);
            return
        }
    }
    console.log('passed');
    return;
}

var person = {
    firstName: 'Joe',
    lastName: 'Blow'
};
updateObject(person, 'age', 35);
  
var expected = {
firstName: 'Joe',
lastName: 'Blow',
age: 35
};
assertObjectsEqual(person, expected, "adds person's non-existing age field");
// console output:
// FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}