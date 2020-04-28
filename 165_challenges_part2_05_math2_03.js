/*
computePerimeterOfATriangle

Write a function called "computePerimeterOfATriangle".

Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns 
its perimeter.
*/

function computePerimeterOfATriangle(side1, side2, side3) {
    return side1 + side2 + side3;
}

var output = computePerimeterOfATriangle(6, 7, 10);
console.log(output); // --> 23