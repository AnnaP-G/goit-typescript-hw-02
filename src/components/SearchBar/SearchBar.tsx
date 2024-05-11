import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from "react";
import { SearchBarProps } from "../App/App.types";

const notify = () => toast.error("Please enter text to search for images");

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const searchValue = (evt.currentTarget.elements.namedItem(
      "searchForm"
    ) as HTMLInputElement).value.trim();
    if (!searchValue) {
      notify();
      return;
    }
    onSubmit(searchValue);
    evt.currentTarget.reset();
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
        <Toaster position="top-left" />
      </form>
    </header>
  );
};

export default SearchBar;
