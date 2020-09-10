const myModule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

myModule(directory, extension, (err, files) => {
    if (err) return console.log(err);
    files.map(file => {
        console.log(file)
    })
})