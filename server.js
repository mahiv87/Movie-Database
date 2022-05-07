const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'movie_db'
    },
    console.log(`Connected to the movie_db database`)
);

app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error(error);
        } else {
            res.json(results);
        }
    })
});

app.post('/api/add-movie');

app.post('/api/update-review');

app.delete('/api/movie/:id');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});