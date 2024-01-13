// // src/components/MoviesList.jsx
// import React from 'react';

// const defaultImg =
//   'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

// const MoviesList = ({ movies }) => {
//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li key={movie.id}>
//           <img
//             src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
//             width={250}
//             alt="poster"
//           />
//           <p>{movie.title}</p>
//           {/* Додайте інші деталі фільму, які вам потрібні */}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MoviesList;
