import React from "react";
import request from "../../apis/request";
import MoviesContent from "../../components/MoviesContent";

function TVShows() {
  return (
    <div>
      <MoviesContent
        title="Popular TV Shows"
        fetchUrl={request.fetchPopularTVShows}
      />
      <MoviesContent
        title="Top Rated TV Shows"
        fetchUrl={request.fetchTopRatedTVShows}
      />
      <MoviesContent
        title="Currently Airing TV Shows"
        fetchUrl={request.fetchCurrentlyTVShows}
      />
      <MoviesContent
        title="TV Shows Airing Today"
        fetchUrl={request.fetchTVShowsAiringToday}
      />
    </div>
  );
}

export default TVShows;
