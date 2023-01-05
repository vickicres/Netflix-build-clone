import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovie] = useState([]);

    const base_url = `https://image.tmdb.org/t/p/original/`;

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovie(request.data.results);
        }
    
        fetchData();
      }, [fetchUrl]);

    console.log(movies);

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row_posters">
        {movies.map(
          (movie) =>
            // prettier-ignore
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
              
            )
        )}
        </div>    
    </div>
  );
}

export default Row;