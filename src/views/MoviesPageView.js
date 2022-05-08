import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import { searchMovie } from 'services/API';
import MoviesList from 'components/MoviesList';

export default function MoviesPageView() {
  const [searchQuery, setSearchQuery] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const param = searchParams.get('searchQuery');

  useEffect(() => {
    if (param) {
      searchMovie(param).then(res => setMovies(res));
      setSearchQuery(param);
    }
  }, [param]);

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ searchQuery });
    searchMovie(searchQuery).then(res => setMovies(res));
    setSearchQuery('');
  };

  const handleSetQuery = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        handleSetQuery={handleSetQuery}
        value={searchQuery}
      />

      {movies && <MoviesList movies={movies} />}
    </div>
  );
}
