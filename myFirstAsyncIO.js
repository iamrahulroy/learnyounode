const fs = require('fs');

fs.readFile(process.argv[2], (error, data) => {
  const newLinesCount = data.toString().split('\n').length - 1;
  console.log(newLinesCount);
});
