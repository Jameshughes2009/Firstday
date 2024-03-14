const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// TODO: Invoke app.use() and serve static files from the '/public' folder

app.use(express.static("public"));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// TODO: Create a route that will serve up the `public/paths.html` page

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
  //when getting an error message you sometime must add html to the end of the weblink
);
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
