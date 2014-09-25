var net = require('net');
var server = net.createServer(function(socket){
  var date = new Date();
  var Y = date.getFullYear();
  var m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth + 1;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var i = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  socket.end(Y + '-' + m + '-' + d + ' ' + H + ':' + i + "\n");
});
server.listen(process.argv[2]);
