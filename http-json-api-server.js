var server = require('http').createServer(function(req, res){
  var info = require('url').parse(req.url, true);
  var date = new Date(info.query.iso);
  res.writeHead(200, {'Content-Type': 'application/json'});
  if ('/api/parsetime' == info.pathname) {
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }));
  } else if ('/api/unixtime' == info.pathname) {
    res.end(JSON.stringify({
      unixtime: date.getTime()
    }));
  }
  
});
server.listen(process.argv[2]);
