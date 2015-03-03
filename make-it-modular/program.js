var mymodule = require('./mymodule.js')
var extension = process.argv[2];
var directory = process.argv[3];

function printToConsole (error, data) {
    if (error) return console.error(error)

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

mymodule(extension, directory, printToConsole)
