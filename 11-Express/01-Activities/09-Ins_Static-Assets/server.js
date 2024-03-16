const express = require('express');

const app = express();
const PORT = 3001;

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3001/images/cat.jpg

app.use(express.static('public'));
//^this is the best method for loading up are files

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
