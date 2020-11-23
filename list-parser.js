const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
  input: fs.createReadStream(process.argv[2])
});

readInterface.on('line', function (line) {
  line && console.log(`\`${line}\`,`);
});

// const parse = (src) => {
//   fs.readFile(src, 'utf8', (err, data) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });
// };
