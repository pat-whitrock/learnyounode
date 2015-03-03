var fs = require('fs');
var directory = process.argv[2];
var extension = '.' + process.argv[3];

function correctExtension(file) {
    return file.indexOf(extension) > -1
}

function filter(error, data) {
    if (error) return console.error(error);

    for (var i = 0; i < data.length; i++) {
        file = data[i];
        if (correctExtension(file)) console.log(file);
    }
}

fs.readdir(directory, filter);
