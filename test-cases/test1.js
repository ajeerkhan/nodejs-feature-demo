//event emitter sample

const events = require('events');
const emitter = new events.EventEmitter();

const _callback = ()=>{
console.log('a');
emitter.removeListener("newEvent", _callback);
}

const callback_ = ()=>{
    console.log('b');
    emitter.removeListener("newEvent", callback_);
}

emitter.addListener("newEvent", _callback);
emitter.addListener("newEvent", callback_);

emitter.emit("newEvent");
emitter.emit("newEvent");
emitter.emit("newEvent");