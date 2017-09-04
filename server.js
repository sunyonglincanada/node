var http = require('http');
var app = require('./app');

// Create Server through different request function
http.createServer(app.handleRequest).listen(3000);