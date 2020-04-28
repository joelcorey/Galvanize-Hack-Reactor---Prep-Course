/*
isGreaterThan

Write a function called "isGreaterThan". Given 2 numbers, "isGreaterThan" 
returns whether num2 is greater than num1.
*/

function isGreaterThan(num1, num2) {
    if (num2 > num1) return true;
    return false;
}

var output = isGreaterThan(11, 10);
console.log(output); // --> false