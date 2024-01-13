import SearchForm from './SearchForm/SearchForm';
import css from './searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
};

export default Searchbar;
