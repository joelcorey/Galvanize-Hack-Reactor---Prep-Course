/*
isEvenAndGreaterThan10

Write a function called "isEvenAndGreaterThanTen".

Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and 
greater than 10.
*/

function isEvenAndGreaterThanTen(num) {
    if (num % 2 === 0 && num > 10) return true;
    return false;
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false