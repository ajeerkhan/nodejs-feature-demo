//async.waterfall sample
const async = require('async');
async.waterfall(
    [
    function(cb){
        console.log('1');
        cb(null, true);
    },
    function(cb){
        setTimeout(()=>{
            console.log('2');
        }, 0)
        console.log('3');
        cb(null, true);
    },

],
(err, res)=>{
    console.log('4');
}
);

