//readline package for getting input from terminal interactive sample

const readLine = require('readline');
const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question('whats age', (data)=>{
    console.log(data);
    reader.close();
})