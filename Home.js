// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Movie Collection</h1>
      </header>
      
      <div className="movies-grid">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
