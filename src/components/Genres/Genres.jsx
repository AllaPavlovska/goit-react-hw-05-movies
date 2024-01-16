import { GenresList } from './Genres.styled';

const Genres = ({ genresArr }) => {
  return (
    <GenresList>
      {genresArr.map((genre, i) => {
        return (
          <li key={i}>
            <p>{genre.name}</p>
          </li>
        );
      })}
    </GenresList>
  );
};

export default Genres;