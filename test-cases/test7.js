//callback sample

function isUserActive(type, cb) {
    if(type==1)
        cb(true)
    else 
        cb(false)
}

isUserActive(0, (err, res)=>{
    console.log(err, res);
})