const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (response) => {
  let output = new bl();

  response.on('data', (data) => {
    output.append(data);
  });

  response.on('end', () => {
    console.log(output.toString().length)
    console.log(output.toString())
  });
});
