import React from 'react';
import Movie from 'components/Movie/Movie';
import { Grid } from 'pages/MovieList/MovieList.styled';

const MovieList = ({ movies, location }) => {
  return (
    <Grid>
      {movies.map((movie, i) => (
        <Movie
          key={i}
          movie={movie}
          location={location}
        />
      ))}
    </Grid>
  );
};

export default MovieList;