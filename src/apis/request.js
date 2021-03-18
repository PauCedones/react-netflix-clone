const API_KEY = "5214af6249bf105c4d2ab8ebc91d26f9";

const request = {
  fetchTrendingMovie: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  fetchTrendingTVShow: `/trending/tv/day?api_key=${API_KEY}&language=en-US`,
  fetchTrendingAll: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
};

export default request;
