var fs = require('fs');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function(error, data) {
        if (error) return callback(error);

        var filteredData = data.filter(function(file) {
            return file.indexOf('.' + extension) > -1;
        });

        return callback(null, filteredData);
    });
}
