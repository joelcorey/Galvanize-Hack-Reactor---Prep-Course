/*
Debugging (2)

Debug a function that takes in an array of numbers. This function will iterate over 
the array's number elements, and return a count representing the number of elements 
whose value is greater than 40. If there are no values above 40, then the function 
should return 0.
*/

function getElementsAbove40(numbers) {
    var count = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 40) {
            count++;
        }
    }
    return count;
}

var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
console.log('should log 3:', result1);

var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
console.log('should log 0:', result2);