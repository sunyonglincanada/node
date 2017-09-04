var http = require('http');
var module1 = require('./module');
var module2 = require('./module2');
var fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module1.myString);
    response.write(module2.myVariable);
    module1.myFunction();
    module2.myFunction();
    response.end();
}

/**
 * Show HTML Content
 * @param request
 * @param response
 *
 * @date 2017-09-04
 */

function onRequestIndex(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html',null,function(error, data){
        if(error){
            response.writeHead(404);
            response.write('File Not Found!')
        }else{
            response.write(data);
        }
        response.end();
    });

}


// Create Server through different request function
http.createServer(onRequestIndex).listen(3000);