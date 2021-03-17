import React from "react";
import "./style.scss";
import MoviesContent from "../../components/MoviesContent";
import request from "../../apis/request";

function Home() {
  return (
    <>
      <MoviesContent
        title="Peliculas Populares"
        fetchUrl={request.fetchTrendingMovie}
      />
      <MoviesContent
        title="Series Populares"
        fetchUrl={request.fetchTrendingTVShow}
      />
    </>
  );
}

export default Home;
