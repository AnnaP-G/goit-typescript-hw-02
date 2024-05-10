import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => toast.error("Please enter text to search for images");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchValue = evt.currentTarget.elements.searchForm.value.trim();
    if (!searchValue) {
      notify();
      return;
    }
    onSubmit(searchValue);
    evt.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchForm"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.formBtn} type="submit">
          Search
        </button>
        <Toaster position="right" />
      </form>
    </header>
  );
};

export default SearchBar;
