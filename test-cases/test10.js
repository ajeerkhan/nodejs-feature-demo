//file system sample

const fs = require('fs');
fs.readFile("txt12.txt", (err, data)=>{
    if(err){
        return console.error(err);
    }   

    console.log(data.toString());
})

console.log('terminate program');