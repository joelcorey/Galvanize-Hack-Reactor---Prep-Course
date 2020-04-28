/*
equalsTen

Write a function called "equalsTen". Given a number, "equalsTen" returns 
whether or not the given number is 10.
*/

function equalsTen(num) {
    if (num === 10) return true;
    return false;
}

var output = equalsTen(9);
console.log(output); // --> false