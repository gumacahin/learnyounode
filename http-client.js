var http = require('http');
var uri = process.argv[2];
http.get(uri, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
});
