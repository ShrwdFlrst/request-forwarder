const express = require('express');
const app = express();
const port = 3001;

const xmlParser = require('express-xml-bodyparser');
app.use(xmlParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.all('/target', (req, res) => {
  const method = req.method;
  const requestData = {
    method,
    headers: req.headers,
    body: req.body,
  };

  console.log('there...');

  // Output the request information as the response
  res.json(requestData);
});

// app.all('/target', (req, res) => {
//   const method = req.method;
//   let body;
//
//   // Get the raw request body
//   req.setEncoding('utf8');
//   req.on('data', (chunk) => {
//     body = body ? body + chunk : chunk;
//   });
//   req.on('end', () => {
//     const requestData = {
//       method,
//       headers: req.headers,
//       body,
//     };
//
//     // Output the raw request data as the response
//     res.json(requestData);
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});