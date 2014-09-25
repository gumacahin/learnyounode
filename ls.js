var fs = require('fs');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    }
    var files = [];
    var pattern = new RegExp("." + ext + "$");
    for (var i = 0; i < list.length; i++) {
      if (list[i].match(pattern)) {
        files.push(list[i]);
      }
    }
    return callback(null, files);
  });
};
