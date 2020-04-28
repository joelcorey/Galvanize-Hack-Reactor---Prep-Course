/*
computeTripledAreaOfARectangle

Write a function called "computeTripledAreaOfARectangle".

Given a length and width of a rectangle, "computeTripledAreaOfARectangle" 
returns the rectangle's area, multiplied by 3.
*/

function computeTripledAreaOfARectangle(length, width) {
    return (length * width) * 3;
}

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24