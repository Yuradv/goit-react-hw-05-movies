import { useEffect, useState } from 'react';
import { getTranding } from 'services/API';
import MoviesList from 'components/MoviesList';

export default function HomePageView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTranding().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}
