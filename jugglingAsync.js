const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (response1) => {
  http.get(process.argv[3], (response2) => {
    http.get(process.argv[4], (response3) => {
      response1.pipe(bl((err, data) => {
        if (err)
          return console.error(err);

        data = data.toString();
        console.log(data);
      }));

      response2.pipe(bl((err, data) => {
        if (err)
          return console.error(err);

        data = data.toString();
        console.log(data);
      }));

      response3.pipe(bl((err, data) => {
        if (err)
          return console.error(err);

        data = data.toString();
        console.log(data);
      }));

    });
  });
});
