//command line arguments sample
const minimist = require('minimist');
const addNumber = (a,b)=>parseInt(a) + parseInt(b);

const args = process.argv.slice(2);

const custArgs = minimist(args);
console.log(custArgs);

console.log(`${args[0]} + ${args[1]} = ${addNumber(args[0],args[1])}`);


