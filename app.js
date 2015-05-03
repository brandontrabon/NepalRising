var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/')));

console.log('Got here');
app.get('*', function (request, response) {
    response.sendFile(path.resolve('index.html'));
});

app.listen(8021);
console.log('Api listening on port 8021');

module.exports = app;