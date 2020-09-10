const fs = require('fs');

fs.readFile(process.argv[2], function(err, buffer) {
    const str = buffer.toString();
    const count = str.split('\n');
    console.log(count.length -1);
    if(err) {
        console.log(err);
    }
});

// const str = buffer.toString();

// const count = str.split('\n');

// console.log(count.length -1);