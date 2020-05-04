/*
isEvenWithoutModulo

Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even.

Notes:
It does so without using the modulo operator (%).
It should work for negative numbers and zero.
*/

function isEvenWithoutModulo(num) {
    if (num === 0) {
        return true;
    }

    num = Math.abs(num);

    while (num >= 2) {
        num -= 2;
    }

    if (num === 0) {
        return true;
    }
    else{
        return false;
    }
}

var output = isEvenWithoutModulo(8);
console.log(output); // --> true