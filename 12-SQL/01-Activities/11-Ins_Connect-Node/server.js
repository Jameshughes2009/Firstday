const express = require('express');
// Import and require mysql2
//Type myswl2 npm to find written resources online
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
// Heroku does not always use port 3001
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password -- needs to be added when '' are blank
    password: 'UofTcoding12!@',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database - runs query automatically
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
