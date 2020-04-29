//emitter sample

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('a',function(){
    console.log('**** Enter in event *******');
    emitter.emit('a');
})

emitter.on('error',(err)=>{
console.log('error occr '+ err);
})
emitter.emit('a');
