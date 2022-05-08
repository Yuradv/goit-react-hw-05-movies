import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/API';
import s from './Reviews.module.css';

export default function Cast() {
  const [reviews, setReviews] = useState(null);
  const params = useParams();

  useEffect(() => {
    getReviews(params.id).then(movie => setReviews(movie.results));
  }, [params.id]);

  return (
    <div>
      {reviews && reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={s.item}>
              <h3>
                <strong>Author</strong>: {review.author}
              </h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>We don't have any reviews for this movie.</h2>
      )}
    </div>
  );
}
