var module1 = require('./module');
var module2 = require('./module2');

var fs = require('fs');
var url = require('url');

/**
 * Rendering HTML with Routes
 * @param path
 * @param response
 * @date 2017-09-04
 */
function renderHTML(path,response){
    fs.readFile(path, null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('File not found');
        }else{
            response.write(data);
        }
        response.end();
    });
}

/**
 * Define Request Routes
 * @type {{handleRequest: module.exports.handleRequest}}
 */
module.exports = {
    handleRequest: function(request,response){
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderHTML('./index.html',response);
                break;
            case '/login':
                renderHTML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined')
                response.end();
        }
    }
};


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
