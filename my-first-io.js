// const fs = require('fs');


// const files = fs.readFileSync(process.argv[2])
// for(var i = 2; i < files.length; i++) {
//     var count = 0;
//     if(files[i] == '/n') {
//         count+ 1;
//     }
// }
// console.log(count);

const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);

const str = buffer.toString();

const count = str.split('\n');

console.log(count.length -1);