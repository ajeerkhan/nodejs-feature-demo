//Buffer sample

const b1 = new Buffer("This is a buffer example");
const b2 = new Buffer(5);
b1.copy(b2);
console.log(b2.toString());
