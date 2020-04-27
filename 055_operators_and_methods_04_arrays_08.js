/*
Using .unshift()

Complete a function that takes in two parameters, an array and an 
element, adds the element to the front of the array, and returns the 
array. Your function should use the .unshift() method to add the input 
element to the front of the input array, then return that array.
*/

function applyUnshift(array, element) {
    // add the element to the front of the array
    // return the array

    array.unshift(element);
    return array;
}

var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);
