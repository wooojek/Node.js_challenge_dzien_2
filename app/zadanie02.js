const fs = require('fs');

const path = './data/zadanie02';

fs.readdir(path, (err, files) => {
    if (err !== null) {
        console.log('There was problem listing files');
    } else {
        files.forEach(file => {
            fs.readFile(path + `/${file}`, (err, data) => {
               if (err !== null) {
                   console.log(`There was problem reading ${file} file`);
               } else {
                   console.log(`${file}: ${data}`);
               }
            });
        })
    }
});