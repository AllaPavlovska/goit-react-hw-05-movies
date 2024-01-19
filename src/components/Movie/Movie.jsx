import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from 'components/Text/Text.styled';
import { Image } from 'components/Movie/Movie.styled';

const Movie = ({ movie, location }) => {
  const baseUrl = 'http://image.tmdb.org/t/p';
  const fileSize = '/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    
      <NavLink
        to={`/movies/${movie.id}`}
        state={{ from: location }}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          height: '100%',
        }}
      >
        <Image
          src={
            !!movie.backdrop_path
              ? `${baseUrl}${fileSize}${movie.backdrop_path}`
              : defaultImg
          }
          alt={movie.title}
        />
        <Text>{movie.original_title}</Text>
      </NavLink>
  
  );
};

export default Movie;