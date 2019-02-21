const fs = require('fs');
const path = require('path');

function PrintFilesModule(folder, extension, callback) {
  extension = '.' + extension;

  fs.readdir(folder, (err, files) => {
    const selectedFiles = [];
    if (err)
      return callback(err)

    files.forEach((file, index) => {
      if (path.extname(file) === extension)
        selectedFiles.push(file)
    });
    callback(null, selectedFiles);
  });
};

module.exports = PrintFilesModule;
