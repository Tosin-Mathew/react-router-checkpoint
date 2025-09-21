// src/components/MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-detail">
        <div className="back-button">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
        <div className="movie-not-found">
          <h2>Movie not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <div className="back-button">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      
      <div className="movie-content">
        <div className="movie-poster">
          <img src={movie.image} alt={movie.title} />
        </div>
        
        <div className="movie-details">
          <h1 className="movie-title">{movie.title}</h1>
          
          <div className="movie-meta">
            <span className="movie-year">{movie.year}</span>
            <span className="movie-rating">{movie.rating}</span>
            <span className="movie-duration">{movie.duration}</span>
          </div>
          
          <div className="movie-description">
            <h3>Description</h3>
            <p>{movie.description}</p>
          </div>
          
          <div className="movie-trailer">
            <h3>Trailer</h3>
            <div className="trailer-container">
              <iframe
                width="100%"
                height="400"
                src={movie.trailerLink}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
