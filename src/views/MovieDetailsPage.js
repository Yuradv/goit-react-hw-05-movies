import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/API';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = location.state.from;

  useEffect(() => {
    getMovieDetails(params.id).then(movie => setMovie(movie));
  }, [params.id]);

  const onBack = () => {
    navigate(location.state.from);
  };

  return (
    <div>
      <button onClick={onBack} className={s.button}>
        Go back
      </button>
      {movie && (
        <div>
          <div className={s.wrapper}>
            <img
              src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
              alt={movie.title}
              width={300}
            />
            <div className={s.box}>
              <h2>{movie.title}</h2>
              <p>Rating: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p> {movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres.map(({ id, name }) => (
                <p key={id} className={s.genres}>
                  {name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <hr />
            <h3>Additional information</h3>
            <Link to="cast" state={{ from: prevPath }} className={s.link}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: prevPath }} className={s.link}>
              Review
            </Link>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}
