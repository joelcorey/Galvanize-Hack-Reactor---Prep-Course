/*
isOdd

Write a function called "isOdd". Given a number, "isOdd" returns whether the 
given number is odd.
*/

function isOdd(num) {
    if (num % 2 !== 0) return true;
    return false;
}

var output = isOdd(9);
console.log(output); // --> true