//http node server sample
const http = require('http');
const fetch = require('node-fetch');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    readContent().then(data=>{
        res.write('res from server->'+ data);
        res.end();
    }).catch(e=>{
        res.write('res from server->'+ e);
        stopServer();
        res.end();
    });    
    
  
});

stopServer = ()=>setTimeout(()=>{
    process.kill(process.pid,"SIGTERM");//server.close();
},200);  
server.listen(3000,()=>{
    console.log('server started');
});


const readContent = async ()=>await Producer('txt1.txt');



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

process.on('SIGTERM', ()=>{
    server.close();
    console.log('terminated');
})
