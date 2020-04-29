//eventEmitter sample

const events = require('events').EventEmitter;
const emitter = new events();

emitter.on('a',()=>{
    console.log('**enter in a');
})

emitter.on('b',()=>{
    console.log('**enter in b');
})

emitter.on('c',()=>{
    setTimeout(()=>{
        console.log('**enter in c');
    }, 0)
})


emitter.emit('a');
emitter.emit('c');
emitter.emit('b');
