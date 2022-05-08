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
        password: 'BuceeHerrera2022!',
        database: 'movie_db'
    },
    console.log(`Connected to the movie_db database`)
);

app.get('/api/movies', (req, res) => {
    db.query(`SELECT * FROM movies`, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            res.json(results);
            console.log(results);
        }
    })
});

app.post('/api/add-movie', (req, res) => {
    let newMovie = req.params.movie_name;

    db.query(`INSERT INTO movies (movie_name) VALUES ("Turning Red")`, newMovie, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            res.json(results);
            console.log(results);
        }
    })
});

app.post('/api/update-review/:id', (req, res) => {
    let update = [req.body.review, req.params.id];

    db.query(`UPDATE reviews SET review = ? WHERE id = ?`, update, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: results.affectedRows
            });
        }
    });
});

app.delete('/api/movie/:id', (req, res) => {
    let deleted = req.params.id;

    db.query(`DELETE FROM movies WHERE id = ?`, deleted, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            res.json(results);
            console.log(results);
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});