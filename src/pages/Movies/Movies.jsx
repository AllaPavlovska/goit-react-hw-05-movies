import { lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'components/service';
import { Text } from 'components/Text/Text.styled';
import { Loader } from 'components/Loader/Loader';
import Search from 'components/Search/Search';

const MovieList = lazy(() => import('pages/MovieList/MoviesList'));

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    getMoviesByQuery(query)
      .then(response => setMovies(response.results))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmit = query => {
    if (!query) {
      setMovies(null);
      return;
    }

    const value = query;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <Search handleSubmit={handleSubmit} />
      {movies?.length === 0 && <p>We don't have any movies 😔</p>}
      {movies?.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <Text textAlign="center">Sorry. {error} 😭</Text>}
    </>
  );
};

export default Movies;
