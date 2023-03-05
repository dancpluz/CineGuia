import React from 'react';

const translateMovie = {
    'en':'movie', 'br':'filme'
}

const translateSeries = {
    'en': 'series','br': 'série'
}

const MovieCard = ({ movie , lang}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type == 'movie' ? translateMovie[lang] : translateSeries[lang]}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard
