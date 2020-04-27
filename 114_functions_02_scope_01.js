/*
Debugging (1)

debug a function that takes in an object, and a target value. This function will 
iterate over the object's values, and attempt to locate the target value. If the value 
is found, the function should return the name of the key where the value in question is 
located, and if not, the function should return -1.
*/

function keyOfObjectValue(object, target) {

    for (const key in object) {  
        if (object[key] === target) {
            // console.log(object[key])
            // console.log(target)
            return key;
        } 
    }
    return -1;

}

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);