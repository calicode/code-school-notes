
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
/*
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

*/

// Chap 4 - modules

// export/import basics just like reg js. 
//custom_hello.js
/*
var hello = function() {
	console.log('hello');
};

	module.exports = hello;

//custom_goodbye.js

exports.goodbye = function(){
	console.log("bye");
};

//app.js
var hello = require('./custom_hello');
hello();
var gb = require('./custom_goodbye');
gb.goodbye();

/* require without ./ checks, in order -
/app/node_modules
~/node_modules/ 
/home/node_modules/
then /node_modules/




package.json
needs to be created to define name, dependancies etc. Used  in my crud app to setup nodaemon also

semantic versioning
"connect": 1.8.7
1 major version probably will change api
8 minor might change api
7 patch = wont change api


can use ranges e.x "connect"
:"~1" will fetch anything between 1.0.0 and 2.0.0 can also do ~1.8 etc
*/


//Chapter 5 - express

var express = require('express');
var app = express();
var request= require('request');
var url = require('url');


//: indicates that username is dynamic
app.get('/wiki/:searchString', function(req,response) {
	var searchString= req.params.searchString;
	options = {
		protocol:"http:",
		host: 'en.wikipedia.org',
		pathname:'/w/api.php',
		query:{format:"json",
			action:"query",
			generator:"search",
			gsrnamespace:0,
			gsrlimit:5,
			gsrsearch:searchString,
			prop:"extracts",
			exintro:"",
			explaintext:"",
			exsentences:3,
			
			exlimit:"max"}
	};
	var wikiUrl = url.format(options);
	console.log(wikiUrl);
	request(wikiUrl,function(err,res,body){
var wikiResults = JSON.parse(body);
console.log(wikiResults.query.pages);
response.locals = {title:searchString,pages:wikiResults.query.pages};
response.render('wikiResults.ejs');


	});
});
app.listen(8080);

// not working due to twitter api changes since video    was produced. will modify . 1.1 api requires 
// authentication i get the jist and this looks nicer than doing a json request with a huge url
/* didn't want to l  ink mobile phone with twitter account so i just  used what I know of wiki api to 
continue the course */

