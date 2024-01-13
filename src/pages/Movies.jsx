// // src/pages/Movies.jsx
// import React, { useState } from 'react';
// import MoviesList from '../pages/MoviesList';

// const Movies = ({ setSearchParams }) => {
//   const [searchQuery, setSearchQuery] = useState('');
 

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchParams({ query: searchQuery });
//   };

//   return (
//     <div>
//       <h2>Search Movies</h2>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <MoviesList movies />
//     </div>
//   );
// };

// export default Movies;
