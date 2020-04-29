//File reader async using Promise sample
const fetch = require('node-fetch');
const fs = require('fs');
//prompt from console.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

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


//read data from external api

const GetTodoItem = (itemNo)=>{
    return(
        new Promise((resolve,reject)=>{
                fetch(`https://jsonplaceholder.typicode.com/todos/${itemNo}`)
                .then((res)=>{
                    resolve(res.json())
                })
                .then((data)=>{
                    resolve(data)
                })
                .catch((err)=>reject(err))
        })
    )
}




//consumer


readline.question("give me file name to read?", (fname)=>{
    readline.pause();
    Producer(fname).then((data)=>{
        console.log(`file content is ${data}`);
    }).catch((err)=>{
        console.log(err)
    });

    readline.resume()
    readline.question('can execute getTodo', (acceptance)=>{
        if(acceptance)
            {
                GetTodoItem(1).then((data)=>{
                    console.log(`todo is ${JSON.stringify(data)}`);
                }).catch((err)=>{
                    console.log(err)
                });
                
            }
        readline.close();
    })
});


Promise.all([GetTodoItem(2), GetTodoItem(3)]).then(res=>{
    console.log(res);
})

Promise.race([GetTodoItem(4), GetTodoItem(5)]).then(res=>{
    console.log(res);
})
            

