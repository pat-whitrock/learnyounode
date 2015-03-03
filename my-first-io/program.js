var fs = require('fs');

function newlineCount(path) {
    var content = fs.readFileSync(path).toString();
    return content.split('\n').length - 1;
}

console.log(newlineCount(process.argv[2]));
