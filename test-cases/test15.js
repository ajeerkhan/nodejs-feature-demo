//progressbar sample

const ProgressBar = require('progress');

const Bar = new ProgressBar(":bar",10); 

const interval = setInterval(()=>{
    Bar.tick();
    if(Bar.complete)
       clearInterval(interval);    
},
1000);

