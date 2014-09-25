var fs = require('fs');
var ext = new RegExp('.' + process.argv[3] + "$");
var dir = process.argv[2];


fs.readdir(dir, function (err, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].match(ext)) {
      console.log(list[i]);
    }
  }
});
