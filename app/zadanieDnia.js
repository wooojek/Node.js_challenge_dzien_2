const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf-8', (err, data) => {
   if (err !== null) {
       console.log('There was an error reading the file.');
   } else {
       console.log('File read success');
       let modifiedText = data.split('').map((sign, index) => index % 2 === 0 ? sign.toUpperCase() : sign.toLowerCase()).join('');
       fs.writeFile(fileName, modifiedText, err => {
           if (err !== null) {
               console.log(`There was problem writing a file: ${fileName}`);
           } else {
               console.log('File modified');
           }
       });
   }
});