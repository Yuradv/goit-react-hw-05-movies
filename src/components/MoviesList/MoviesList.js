import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={s.link}
          >
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
