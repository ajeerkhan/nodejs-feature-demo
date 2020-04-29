//File rename/delete sample
const fs = require('fs');
fs.rename("txt1.txt","txt2.txt",(err)=>{
    if(err){
        console.log('err1');
        throw err;
    }

    fs.unlink("txt2.txt", (err)=>{
        
        if (err){
            console.log('err2');
            throw err;
        }
    })

})
