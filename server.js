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
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database`)
);

app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err) => {
        if (err) {
            console.error(error);
        } else {
            res.json();
        }
    })
});

app.post('/api/add-movie');

app.post('/api/update-review');

app.delete('/api/movie/:id');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});