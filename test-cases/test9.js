//emitter chain sample

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('a',function(){
    console.log('**** Enter in event *******');
    emitter.emit('a');
}).
on('b',()=>{
console.log('b event');
})

//emitter.emit('a');
emitter.emit('b');
