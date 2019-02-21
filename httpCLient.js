const http = require('http');

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => console.log(data));
});

// Offical solution - Compare notes later
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
