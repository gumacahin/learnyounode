/*jshint loopfunc: true */
var http = require('http');

var url = process.argv.splice(2, 3);
var end = [false, false, false];
var data = ['', '', ''];

http.get(url[0], function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    data[0] += chunk;
  });
  res.on('end', function(){
    end[0] = true;
    if (end.every(function(e) { return e;})) {
      console.log(data.join("\n"));
    }
  });
});

http.get(url[1], function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    data[1] += chunk;
  });
  res.on('end', function(){
    end[1] = true;
    if (end.every(function(e) { return e;})) {
      console.log(data.join("\n"));
    }
  });
});

http.get(url[2], function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    data[2] += chunk;
  });
  res.on('end', function(){
    end[2] = true;
    if (end.every(function(e) { return e;})) {
      console.log(data.join("\n"));
    }
  });
});

