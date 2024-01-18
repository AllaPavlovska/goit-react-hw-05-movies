import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from 'components/service';
import { AddInfo } from 'components/AddInfo/AddInfo';
import { ButtonListMovie } from 'pages/MovieList/MovieList.styled';
import MovieDatailsContent from 'pages/MovieDetails/MovieDetailsContent';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieId !== null) {
      getMoviesById(movieId)
        .then(response => setMovie(response))
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [movieId]);

  return (
    <>
      <ButtonListMovie to={backLink.current}>Go back</ButtonListMovie>
      {movie && <MovieDatailsContent movie={movie} error={error} />}
      {loading && <Loader />}
      <AddInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
