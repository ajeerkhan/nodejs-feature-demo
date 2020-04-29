//Process sample

const express = require('express');

const app = express();

const server = app.listen(3000, ()=>{
    console.log('server is stared at '+ new Date().toString());
    process.nextTick(()=>{
        console.log('next ticket getting caalled immediately at the end of the current event loop, before picking next event')
    })
    setTimeout(()=>{
        console.log('server is stared terminate at '+ new Date().toString());
        //process.kill(process.pid, 'SIGTERM');
        process.emit('SIGTERM');
    },60000)
})

app.get("/",(req,res,next)=>{
    res.send('response from server');
    res.end();
    //next();
})

app.get("/env",(req,res,next)=>{
    res.send(process.env);
    res.end();
})

process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log('server closed at '+ new Date().toString())
    })
})

