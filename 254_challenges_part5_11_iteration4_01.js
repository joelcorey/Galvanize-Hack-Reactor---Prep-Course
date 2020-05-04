/*
computeFactorialOfN

Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" 
returns its factorial.
*/

function computeFactorialOfN(n) {
    let factorial = n;
    
    for (let i = n - 1; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24