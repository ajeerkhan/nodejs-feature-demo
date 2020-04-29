//Timers sample
//setInterval

let counter = 0;
const handle = setInterval(()=>{
    //process.stdout.write(new Date().getTime().toString())
    //process.stdout.end()
    console.log(++counter);
    if(counter>5)
        clearInterval(handle);
}, 100)



setTimeout(()=>{
        console.log('timeout')
        setTimeout(add,1000,0,1);
}, 1000)


const add = (a, b) =>{

    console.log(`sum us ${parseInt(a) + parseInt(b)}`) ;
}

setImmediate(add,10,20);





