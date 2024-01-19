import React from 'react';
import Movie from 'components/Movie/Movie';
import { Grid } from 'pages/MovieList/MovieList.styled';

const MovieList = ({ movies, configDetails, location }) => {
  if (configDetails === null) return;
  return (
    <Grid>
      {movies.map((movie, i) => (
        <Movie
          key={i}
          movie={movie}
          configDetails={configDetails}
          location={location}
        />
      ))}
    </Grid>
  );
};

export default MovieList;