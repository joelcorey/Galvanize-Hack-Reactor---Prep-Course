/*
computeAreaOfACircle

Write a function called "computeAreaOfACircle".

Given the radius of a circle, "computeAreaOfACircle" returns its area.
Notes:
Math.PI can be used for pi.
*/

function computeAreaOfACircle(radius) {
    return (radius * radius) * Math.PI;
}

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669