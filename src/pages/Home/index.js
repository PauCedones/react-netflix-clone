import React from "react";
import "./style.scss";
import request from "../../apis/request";
import MoviesContent from "../../components/MoviesContent";
import Banner from "../../components/Banner";

function Home() {
  return (
    <div className="home">
      <Banner />
      <MoviesContent
        title="Peliculas Populares"
        fetchUrl={request.fetchTrendingMovie}
      />
      <MoviesContent
        title="Series Populares"
        fetchUrl={request.fetchTrendingTVShow}
      />
    </div>
  );
}

export default Home;
