//File reader async using async/await sample
const fetch = require('node-fetch');
const fs = require('fs');
//define promise for file operation.
//read file content
const Producer = (path)=>{
    return new Promise((resolve, reject)=>{
        //file operations
        if(!path) 
          reject('not a valid path');
          fs.readFile(path,(err,data)=>{
            if(err)
             reject(err)

             resolve(data);
          })
    })
}
//consumer
const caller = async()=> {
const result = await Producer('txt1.txt')
console.log(result.toString());
process.kill(process.pid,'SIGTERM');
};
caller(); 
process.on('SIGTERM', ()=>{
    console.log('terminated');
})
