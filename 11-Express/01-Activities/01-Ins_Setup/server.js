// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js written this way bc it is an extranal package
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));// used to connect front and back end

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
// in this context the / allow you to see the page - also will alway look for html file
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
//dont have to specify anything for base route bec "index.html"

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
