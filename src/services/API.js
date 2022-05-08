import axios from 'axios';

const API_KEY = 'ba05e54d26cce7ef6afa7bb1f3502c89';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const searchMovie = async query => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=1&`
  );
  return results;
};

export const getCast = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
