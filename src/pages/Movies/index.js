import React from "react";
import request from "../../apis/request";
import MoviesContent from "../../components/MoviesContent";

function Movies() {
  return (
    <div>
      <MoviesContent
        title="Peliculas Populares"
        fetchUrl={request.fetchPopularMovies}
      />
      <MoviesContent
        title="Top Rated Movies"
        fetchUrl={request.fetchTopRatedMovies}
      />
      <MoviesContent
        title="Uncoming Movies"
        fetchUrl={request.fetchTopRatedMovies}
      />
      <MoviesContent
        title="Now Playing Movies"
        fetchUrl={request.fetchNowPlayingMovies}
      />
    </div>
  );
}

export default Movies;
