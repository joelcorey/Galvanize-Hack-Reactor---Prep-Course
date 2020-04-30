/*
sumDigits

Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
In order to use some of the methods that will be most helpful to you, you will most 
likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the "toString" method, as well as the "Number" 
function.
*/

function sumDigits(num) {
    //let num = parseInt(num);
    let numbers = num.toString();
    let add = 0;
    let start = 0;

    if (numbers[0] === '-') {
        console.log("It's a negative!")
        add = parseInt(numbers[1]) + parseInt(numbers[2]);
        console.log(add)
        start = 2;
    }
    
    for (let i = start; i < numbers.length; i++) {
        add += parseInt(numbers[i])
        //console.log(numbers[i])
    }
    return add;
}

// var output = sumDigits(1148);
// console.log(output); // --> 14

// var output = sumDigits(-316);
// console.log(output); // --> 4

console.log(sumDigits(-316));