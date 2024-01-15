import axios from 'axios';

export async function getMovies() {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day?';
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios.defaults.params = {
    language: 'en-US',
  };
  const { data } = await axios.get();

  return data;
}

export async function getMoviesById(id) {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios.defaults.params = {
    language: 'en-US',
  };
  const { data } = await axios.get();

  return data;
}

export async function getMoviesByQuery(query) {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios.defaults.params = {
    language: 'en-US',
  };
  const { data } = await axios.get();

  return data;
}

export async function getCastsById(id) {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios.defaults.params = {
    language: 'en-US',
  };
  const { data } = await axios.get();

  return data;
}

export async function getReviewsById(id) {
  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMzNzVhNzc2Njk3ZGUzNzBhMGQ0ODQ0NjYzZTYxOCIsInN1YiI6IjY1OWFlMDcxMGQxMWYyMDE0OTdhYjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQBPpQLpWUXY49hBqlpbgaoZ06gqYH4dMzeaVJ2ByzU';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`;
  axios.defaults.headers.common['Authorization'] = API_KEY;
  axios.defaults.params = {
    language: 'en-US',
  };
  const { data } = await axios.get();

  return data;
}