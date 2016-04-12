
/*var http  = require('http');

http.createServer(function(request,response) {

response.writeHead(200);
request.on('readable',function(){
var chunk = null;
while (null !== (chunk = request.read())){
	response.write(chunk);
}
});

request.on('end', function(){
console.log('end of request');
response.end();

});

}).listen(8080);
console.log('Listening on port 8080');

// can also use request.pipe(response);
~
/*
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('error', function(message){
console.log('ERR: ' + message);
});

logger.emit('error', 'Codes broke');
*/

//Streams. This will happily overwrite whatever filename is specified in writeStream

var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
var newFile = fs.createWriteStream("readme_copy.md");
var fileBytes = request.headers['content-length'];
var uploadedBytes =0;

request.on('readable',function(){
var chunk = null;
// this while loop looks wierd, why are we comparing null to something and not something to null, does it matter
while(null !== (chunk=request.read())) {
	uploadedBytes +=chunk.length;
	var progress = (uploadedBytes / fileBytes)*100;
	response.write("progress: " + parseInt(progress,10) + "%\n");
}

});
request.pipe(newFile);
request.on('end', function(){
response.end('uploaded!');
});
}).listen(8080);