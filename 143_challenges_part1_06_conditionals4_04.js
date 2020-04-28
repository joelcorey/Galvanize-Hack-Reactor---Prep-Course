/*
isEitherEven

Write a function called "isEitherEven".

Given two numbers, "isEitherEven" returns whether or not either one of the 
given numbers is even.
*/

function isEitherEven(num1, num2) {
    if (num1 % 2 !== 0 && num2 % 2 !== 0) return false;
    if (num1 % 2 !== 0 || num2 % 2 !== 0) return true;
    if (num1 % 2 === 0 && num2 % 2 === 0) return true;
}
  
var output = isEitherEven(1, 4);
console.log(output); // --> true