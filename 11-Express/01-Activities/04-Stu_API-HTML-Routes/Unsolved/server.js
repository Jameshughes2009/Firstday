// TODO: Import express
const express = require("express")

const whatJson = require("./terms.json")

// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable
const app = express;

//no need to sever up any static content when there is no HTML

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req, res) => res.json(whatJson));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
