// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
//A helpful tip for Module 14 MVC Review - Activities 9, 15, 17, 21, Mini Project

// NOTES

// Useful for frontend coding

// we now need to add hmtl and css files in different folders

// in the hmtl file we can still reference our js and css files