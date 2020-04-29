//stream pipe sample
const fs = require('fs');

const rs = fs.createReadStream("txt1.txt");
const ws = fs.createWriteStream("output.txt");
rs.pipe(ws);

ws.on('finish', ()=>{

    console.log('data copied');
})



console.log('program ended');

