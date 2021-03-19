const API_KEY = "5214af6249bf105c4d2ab8ebc91d26f9";

const request = {
  fetchTrendingMovie: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  fetchTrendingTVShow: `/trending/tv/day?api_key=${API_KEY}&language=en-US`,
  fetchTrendingAll: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUncomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchPopularTVShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTVShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchCurrentlyTVShows: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
  fetchTVShowsAiringToday: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
};

export default request;
