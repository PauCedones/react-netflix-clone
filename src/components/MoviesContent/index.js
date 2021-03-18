import React, { useState, useEffect } from "react";
import axios from "../../apis/axios";
import "./style.scss";

const baseURL = "https://image.tmdb.org/t/p/original/";

function MoviesContent({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movie-content">
      <h1>{title}</h1>
      <div className="movie-content-posters">
        {movies.map((movie) => (
          <>
            <img
              className="movie-content-poster"
              key={movie.id}
              src={`${baseURL}${movie.poster_path}`}
              alt={movie.name}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default MoviesContent;
