// // server.mjs
// const { createServer }= require('http');

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// import the express module
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

// generate a random filename
function generateRandomFilename(language) {
  return `${Math.random().toString(36).substring(7)}.${language}`;
}

app.get('/', (req, res) => {
  const code = req.body.code;
  const language = req.body.language;

  fs.writeFile(`./Storage-folder/` + generateRandomFilename(language), code, (err) => {
    if (!err) {
      res.send('Success');
    } else {
      res.send('Error');
    }
  });
});

// starts a simple http server locally on port 3000
app.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001');
});