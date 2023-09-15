//Movie Card Component 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const MovieCard: React.FC = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=903c5cda1d547795877add187ce12937`
        );

        if (!response.ok) {
          if (response.status === 403) {
            setError(`API request refused to load. Please try again later.`);
          } else {
            setError(`Error fetching genres: ${response.statusText}`);
          }
          return;
        }
        const data = await response.json();
        const genreObject = {};
        data.genres.forEach((genre) => {
          genreObject[genre.id] = genre.name;
        });
        setGenres(genreObject);
      };

    const fetchTopMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=903c5cda1d547795877add187ce12937`
      );
      const data = await response.json();
      setTopMovies(data.results.slice(0, 10));
    };

    fetchGenres();
    fetchTopMovies();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!topMovies) {
    return <div>Checking your internet connection...</div>;
  }

  const [like, setlike] = useState(false)
  const handleLikeClick = (movieId) => {
    setTopMovies(prevMovies => {
      return prevMovies.map(movie => {
        if (movie.id === movieId) {
          return { ...movie, liked: !movie.liked };
        }
        return movie;
      });
    });
  };


  return (
    <div>
      <div className='top_header'>
      <h1>Top 10 Movies</h1>
      <span>
        <label>See more</label>
        <img src="../../arroe.svg" />
      </span>
      </div>
      <div className="movie-grid">
        {topMovies.map((movie) => (
          <div className="movie-card" key={movie.id} data-testid="movie-card">
            
            <Link href={`/movies/${movie.id}`}>
         
                <img
                  className="movie-poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  data-testid='movie-poster'
                />
        
            
            <h2 onClick={() => handleLikeClick(movie.id)} key={movie.id} className='likebutton'> 
                {movie.liked ? '❤️' : '🤍' }
            </h2>
            <h2 className="movie-title"  data-testid='movie-title' >{movie.title}</h2>
            <p className="movie-release-date" data-testid='movie-release-date'>Release Date: {movie.release_date}</p>
            <p className="movie-genres">
              {movie.genre_ids.map((genreId) => genres[genreId]).join(', ')}
            </p>
            </Link>
          </div>
         
        ))}
      </div>
    </div>
  ); 
};

export default MovieCard;
