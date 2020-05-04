/*
Convert Array To Object 3

Write a function called "transformEmployeeData" that transforms some employee 
data from one format to another.

The argument will look like this:

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

Given that input, the return value should look like this:

[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than 
the given sample.

For example, let's say the HR department adds a "tshirtSize" field to each 
employee record. Your code should flexibly accommodate that.
*/

function transformEmployeeData(employeeData) {
    let output = [];

    for (let i = 0; i < employeeData.length; i++) {
        let employee = {};

        for (let q = 0; q < employeeData[i].length; q++) {
            key = employeeData[i][q][0]
            value = employeeData[i][q][1];
            employee[key] = value;
        }
        output.push(employee)
    }
    return output;
}

let input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

console.log(transformEmployeeData(input));