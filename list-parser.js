const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
  input: fs.createReadStream(process.argv[2])
});

readInterface.on('line', function (line) {
  line && console.log(`\`${line}\`,`);
});
