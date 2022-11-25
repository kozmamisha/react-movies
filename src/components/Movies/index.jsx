import React from 'react';
import './Movies.scss';

const Movies = ({ id, year, title, poster, summary, genres }) => {
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie__column'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        <ul className='movie__genres'>
          {genres.map((genre, index) => {
            return (
              <li key={index} className='genres__genre'>
                {genre}
              </li>
            )
          })}
        </ul>
        <p className='movie__summary'>{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

export default Movies;