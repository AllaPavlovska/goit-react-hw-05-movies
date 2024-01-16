import { getReviewsById } from 'components/service';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsContainer, ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams(null);
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewsById(movieId)
      .then(response => setReviews(response.results))
      .catch(err => setError(err.message));
  }, [movieId]);

  return (
    <>
      <ReviewsContainer>
        {reviews?.length === 0 && (
          <p>We don`t have any reviews for this movie 😔</p>
        )}
        {reviews?.map((review, i) => {
          return (
            <ReviewsItem key={i}>
              <h3>{`Author: ${review.author}`}</h3>
              <p>{review.content}</p>
            </ReviewsItem>
          );
        })}
      </ReviewsContainer>

      {error && <p>Sorry. {error} 😭</p>}
    </>
  );
};

export default Reviews;