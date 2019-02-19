const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(folder, (err, files) => {
  if (err) {
    throw Error(err);
  }

  // Stores files with matching extension
  const selectedFiles = []

  // loop through current directory's files, compare file extension with passed
  // in extension
  files.forEach((file, index) => {
    if (path.extname(file) === extension)
      selectedFiles.push(file)
  });

  // list out files with matching extension
  selectedFiles.forEach((file, index) => {
    console.log(file);
  });
});
