const fs = require("fs");
const path = require("path");

module.exports = function myModule(directory, extension, callback) {
    extension = '.' + extension;
  fs.readdir(directory, function (err, files) {
    if (err) return callback(err);
    const filtered_list = files.filter((files) => {
      if (path.extname(files) === extension) {
        return files;
      }
    });
    callback(null, filtered_list)
  });
};

