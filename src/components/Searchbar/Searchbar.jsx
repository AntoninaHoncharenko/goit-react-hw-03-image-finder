import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (event.currentTarget.elements.querry.value === '') {
      toast.error('Type a value!');
      event.currentTarget.reset();
      return;
    }
    onSubmit(event.currentTarget.elements.querry.value.toLowerCase());
    event.currentTarget.reset();
  };
  return (
    <header>
      <form
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          name="querry"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
