const fs = require('fs');

fileContent = fs.readFileSync(process.argv[2], 'utf8');

const newLinesCount = fileContent.split('\n').length - 1;

console.log(newLinesCount);
