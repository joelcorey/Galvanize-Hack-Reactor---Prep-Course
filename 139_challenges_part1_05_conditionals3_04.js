/*
isEven

Write a function called "isEven". Given a number, "isEven" returns whether it 
is even.
*/

function isEven(num) {
    if (num % 2 === 0) return true;
    return false;
}

var output = isEven(11);
console.log(output); // --> false