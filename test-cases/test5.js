//setImmediate pipe sample
console.log('This is first');
setImmediate(()=>{
    console.log('This is second');
})
console.log('This is third');