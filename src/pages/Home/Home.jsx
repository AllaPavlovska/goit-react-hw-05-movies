// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         const apiKey = '37c57ebc4cf07fc12dd49ad5286fa6a2';
//         const response = await fetch(
//           `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
//         );
//         const data = await response.json();
//         setTrendingMovies(data.results);
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };

//     fetchTrendingMovies();
//   }, []);

//   return (
//     <div>
//       <h2>Trending Movies</h2>
//       <ul>
//         {trendingMovies.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;

import React, { lazy, useEffect, useState } from 'react';
import { getMovies } from 'components/service';
import { Text } from 'components/Text/Text.styled';
import { HomeContainer } from './Home.styled';
import { LoaderContainer as Loader } from 'components/Loader/Loader.styled';
const MovieList = lazy(() => import('pages/MovieList/MoviesList'));

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movies === null) {
      setLoading(true);

      getMovies()
        .then(response => setMovies(response.results) ?? [])
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [movies]);

  return (
    <HomeContainer>
      <h2>Trending today</h2>
      {movies?.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <Text textAlign="center">Sorry. {error} 😭</Text>}
    </HomeContainer>
  );
};

export default Home;
