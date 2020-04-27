/*
Using .splice() to add an element

Complete a function that takes in three parameters, an array, an index, 
and an element, adds the element to the index of the array, without 
replacing any of the existing elements, and returns the array. Your 
function should use the .splice() method to add the input element to the 
input array, at the given index, and without replacing any of the 
existing elements, then returns the array.
*/

function addAnElementInGeneral(array, index, element) {
    // add the element to the array at the index given
    // (be sure not to replace any existing elements)
    // return the array

    array.splice(index, 0, element);
    return array;
}

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);