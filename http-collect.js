var http = require('http');
var bl   = require('bl');
var url  = process.argv[2];

http.get(url, function(resp) {
  resp.pipe(bl(function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
