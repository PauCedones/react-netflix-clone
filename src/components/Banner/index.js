import React, { useEffect, useState } from "react";
import axios from "../../apis/axios";
import request from "../../apis/request";
import "./style.scss";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchTrendingAll);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="banner-sinopsis">{truncate(movie?.overview, 150)}</p>
        <div className="banner-info">
          <p>{movie.vote_average}</p>
          <p>{movie.popularity}</p>
          <p>{movie.release_date}</p>
        </div>
        <button className="banner-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M3 22v-20l18 10-18 10z"></path>
          </svg>
          Watch Trailer
        </button>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
