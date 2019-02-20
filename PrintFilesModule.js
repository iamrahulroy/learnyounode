const fs = require('fs');
const path = require('path');

// The module must export a single function that takes three arguments: the directory name,
// the filename extension string and a callback function, in that order.

function PrintFilesModule(folder, extension, callback) {
  extension = '.' + extension;
  // Stores files with matching extension
  fs.readdir(folder, (err, files) => {
    const selectedFiles = [];
    if (err)
      return callback(err)

    // loop through current directory's files, compare file extension with passed
    // in extension
    files.forEach((file, index) => {
      if (path.extname(file) === extension)
        selectedFiles.push(file)
    });
    callback(null, selectedFiles);
  });
};

module.exports = PrintFilesModule;
