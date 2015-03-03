var http = require('http');
var bl = require('bl');
var url_input = process.argv[2];

function requestSummary(url) {
    http.get(url, function(response) {
        response.pipe(bl(function(error, data) {
            if (error) return console.error(error);

            var content = data.toString();
            console.log(content.length);
            console.log(content);
        }));
    });
}

requestSummary(url_input);
