const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log("File Content:");
  console.log(data);
});