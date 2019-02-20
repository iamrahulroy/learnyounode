// import PrintFilesModule from 'makeItModularModule.js';
var PrintFilesModule = require('./PrintFilesModule.js');

const folder = process.argv[2];
const extension = process.argv[3];

PrintFilesModule(folder, extension, (err, files) => {
  if (err)
    return console.log(err)

  files.forEach((file, index) => {
    console.log(file);
  });
});
