const fs = require('fs');

// const message = '\nHello, Backend ';

// fs.appendFile('hello.txt', message, (err) => {
//   if (err) {
//     console.log('Error writing message');
//   }
//   else{
//     console.log('File written successfully');

//   }
  
// });

//Read file
// fs.readFile('hello.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log('Error reading file');

//   }
//   else{
//     // console.log(data);
//     data.split('\n').forEach(line => {
//         console.log(line.split('.'));
//     })
//     // console.log('File read successfully');
//   }
// });


//File delete 
// fs.unlink('hello.txt', (err) => {
//     if (err) {
//         console.log('Error deleting file');
//     }
//     else{
//         console.log('File deleted successfully');
//     }
// })

//Folder create

fs.mkdir('Storage-folder', (err) => {
    if (err) {
        console.log('Error creating folder');
    }
    else{
        console.log('Folder created successfully');
    }
});