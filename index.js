const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movie-db'
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');
});

// Define a route to get all movies
app.get('/movies', (req, res) => {
    const query = 'SELECT * FROM all_movies';

    // Execute the query
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send(err);
            return;
        }

        // Send the movies as a response
        res.json(results);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});