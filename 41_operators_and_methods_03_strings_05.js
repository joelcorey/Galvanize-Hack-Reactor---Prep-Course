/*
String Interpolation

Complete a function that takes in two parameters, both will be strings 
(activity, dayOfTheWeek), and returns a message based on the inputs. 
Your function should create a new variable, assign it to an expression 
which will interpolate the parameters into a message (described below), 
then return that variable.
*/

function interpolateAString(activity, dayOfTheWeek) {
    // create a result variable
    // assign it to an expression which interpolates the input parameters into the described message
    // return the result variable

    return `We will go ${activity} on ${dayOfTheWeek}.`;
}

var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2);