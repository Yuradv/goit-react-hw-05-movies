import s from './SearchForm.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ handleSetQuery, handleFormSubmit, value }) {
  return (
    <div className={s.box}>
      <form onSubmit={handleFormSubmit} className={s.SearchForm}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          placeholder="Search movies"
          onChange={handleSetQuery}
          value={value}
        />
      </form>
    </div>
  );
}

// const handleNameChange = event => {
//   setSearchQuery(event.currentTarget.value.toLowerCase());
// };

//  const handleSubmit = e => {
//    e.preventDefault();

//    if (searchQuery.trim() === '') {
//      return toast.error('Enter your request');
//    }

//    onSubmit(searchQuery);
//    setSearchQuery('');
//  };
