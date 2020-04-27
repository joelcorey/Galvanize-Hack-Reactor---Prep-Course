/*
Using 'delete' to remove a property again

Complete a function that takes in three parameters, an array, an index, and an 
key, removes the property specified by the input key, located within an object, 
located at the given index within the input array, and returns the input array. 
Your function should use the delete operator to remove the property specified 
by the input key, located within an object, located at the given index within 
the input array, and returns the input array.
*/

function removeAPropertyAgain(arrayOfObjects, index, key) {
    // remove the property at the given key from the object at the given index
    // return the input array of objects

    delete arrayOfObjects[index][key];
    return arrayOfObjects;
}

var resultObject1 = removeAPropertyAgain([{q: 9, r: 10, text: 'bad entry'}, {a: 1, b: 2}], 0, 'text');
console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);

var resultObject2 = removeAPropertyAgain([{key: 'value'}, {first: 'one', second: 'two', why: 452, third: 'three'}], 1, 'why');
console.log('should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:', resultObject2);