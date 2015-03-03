var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);
var results = [];
var count = 0;

function printResults () {
    for (var i = 0; i < urls.length; i++) {
        console.log(results[i])
    }
}

function httpGet (index) {
    http.get(urls[index], function (response) {
        response.pipe(bl(function (error, data) {
            if (error) return console.error(error);

            results[index] = data.toString();
            count++;

            if (count == urls.length) printResults();
        }));
    });
}

function getAllResponses(requestedUrls) {
    for (var i = 0; i < requestedUrls.length; i++) {
        httpGet(i);
    }
}

getAllResponses(urls)
