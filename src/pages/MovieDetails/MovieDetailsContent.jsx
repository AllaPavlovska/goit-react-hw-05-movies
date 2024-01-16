import Genres from '';
import { MovieInfo, MovieTextContainer, Poster } from './MovieDetails.styled';

const MovieDatailsContent = ({ movie, error }) => {
  const baseUrl = 'http://image.tmdb.org/t/p';
  const fileSize = '/w154';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  console.log();
  return (
    <MovieInfo>
      <Poster
        src={
          movie.poster_path
            ? `${baseUrl}${fileSize}${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
      />
      <MovieTextContainer>
        <h2> {movie.original_title}</h2>
        <p>User score: {Math.round(Number(movie.vote_average) * 10)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <Genres genresArr={movie.genres} />
      </MovieTextContainer>
      {error && <p className="textEmpty">Sorry. {error} 😭</p>}
    </MovieInfo>
  );
};

export default MovieDatailsContent;