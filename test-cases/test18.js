//Promise sample

//1st way
//rule : n>0
//n<=0, throw error

const add = (a, b) => {
    return new Promise((resolve,reject) =>{
        if(a>0 && b>0)
            resolve(parseInt(a)+parseInt(b));

        reject("only non-zero is accepted")    
    })
};

//2nd way of promise definition

let active = true;

const isActive = new Promise((resolve,reject)=>{
    if(active)
        resolve(true)
     else
     reject(false)   
});



//calling

add(10,20)
.then(res=>{
    console.log(`sum is ${res}`)
})
.catch((err)=>{
    console.log(err);
})


add(0,20)
.then(res=>{
    console.log(`sum is ${res}`)
})
.catch((err)=>{
    console.log(err);
})



isActive.then((status)=>{
    console.log(status)
})
.catch((status)=>{
    console.log(status)
})
;




