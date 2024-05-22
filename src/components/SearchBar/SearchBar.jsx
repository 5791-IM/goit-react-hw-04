/* src/components/SearchBar.jsx */
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (query === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <FiSearch size={20} />
        </button>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
      </form>
    </header>
  );
};

export default SearchBar;
