SELECT movies.movie_name AS movie, reviews.reviews
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
