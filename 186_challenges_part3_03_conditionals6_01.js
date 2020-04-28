/*
or

Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to 
the '||' operator. 
Notes:
Do not use the || operator.
Use ! and && operators instead.
*/

function or(expression1, expression2) {
    if (expression2) return true;
    if (expression1) return true;
    if (!expression2) return false;
    if (!expression1) return false;
}

var output = or(true, false);
console.log(output); // --> true;