import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Searchbar,
  SearchForm,
  SearchBtn,
  BtnLabel,
  Input,
} from './Searchbar.styled';

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
    <Searchbar>
      <SearchForm
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <SearchBtn type="submit">
          <BtnLabel>Search</BtnLabel>
        </SearchBtn>

        <Input
          name="querry"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbar>
  );
};
