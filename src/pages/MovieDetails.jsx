// // src/pages/MovieDetails.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation, useHistory } from 'react-router-dom';
// import axios from 'axios';

// const defaultImg =
//   'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const location = useLocation();
  
//   const [movieDetails, setMovieDetails] = useState({});

//   useEffect(() => {
//     if (!movieId) return;

//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(`/movies/get-movie-details?id=${movieId}`);
//         setMovieDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   const handleGoBack = () => {
//     const backLink = location.state?.from ?? '/';
   
//   };

//   return (
//     <div>
//       <h2>{movieDetails.title}</h2>
//       <button onClick={handleGoBack}>Go Back</button>
//       <img
//         src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : defaultImg}
//         width={250}
//         alt="poster"
//       />
//       {/* Додайте інші деталі фільму */}
//     </div>
//   );
// };

// export default MovieDetails;
