import React, { useEffect, useState } from 'react';
import { CastItem, CastContainer } from 'pages/Cast/Cast.styled';
import { getCastsById } from 'components/service';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams(null);
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const baseUrl = 'http://image.tmdb.org/t/p';
  const fileSize = '/w92';

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      getCastsById(movieId)
        .then(response => setCasts(response.cast))
        .catch(err => setError(err.message))
        .finally(setLoading(false));
    }
  }, [movieId]);

  return (
    <>
      {casts && (
        <CastContainer>
          {casts.length === 0 && (
            <p>We don`t have any casts for this movie 😔</p>
          )}
          {casts.map((cast, i) => {
            return (
              <CastItem key={i}>
                <img
                  src={
                    cast.profile_path
                      ? `${baseUrl}${fileSize}${cast.profile_path}`
                      : `${defaultImg}`
                  }
                  alt=""
                  height={180}
                />
                <p>{cast.original_name}</p>
              </CastItem>
            );
          })}
        </CastContainer>
      )}
      {loading && <Loader />}
      {error && <p className="textEmpty">Sorry. {error} 😭</p>}
    </>
  );
};

export default Cast;