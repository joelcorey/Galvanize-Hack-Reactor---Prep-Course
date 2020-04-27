/*
IF statement with an array

Complete a function that takes in two parameters, an array of agents in the 
field, and an agent to search for within that array, determines if the agent 
to search for is present within the array, and if it is, returns a specific 
string. Your function should use an if statement to determine if the agent to 
search for is present within the list of agents, and if it is, should return 
the string '{agentToSearchFor} is present within Agent list', where 
{agentToSearchFor} has the value of the argument the function is called on.
*/

function findAgent(agentList, agentToSearchFor) {
    // if agentToSearchFor is present within agentList
    // return '{agentToSearchFor} is present within Agent list'
    
    if (agentList.includes(agentToSearchFor)) return `${agentToSearchFor} is present within Agent list`
}

var result1 = findAgent(['001', '005', '007', '009'], '007');
console.log('should log "007 is present within Agent list":', result1);

var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
console.log('should log "teeny is present within Agent list":', result2);

var result3 = findAgent(['red', 'blue', 'green'], 'orange');
console.log('Should log undefined, because function returned nothing:', result3);