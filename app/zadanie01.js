const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', (err, data) => {
    if (err !== null) {
        console.log('Error reading the file');
    } else {
        const parsedData = JSON.parse(data);
        const dataSum = parsedData.reduce((prev, curr) => prev + curr);
        console.log('Success loading file');
        fs.writeFile('./data/zadanie01/input.txt', dataSum, err => {
            if (err !== null) {
                console.log('Error writing to file');
            } else {
                console.log('File write successful');
            }
        })
    }
});