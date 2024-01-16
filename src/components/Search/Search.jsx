import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  SearchForm,
  SearchFormInput,
  Searchbar,
} from './Search.styled';

const Search = ({ handleSubmit }) => {
  const inputRef = useRef();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = event => {
    event.preventDefault();

    const value = event.target.elements.query.value;

    handleSubmit(value);
  };
  return (
    <Searchbar>
      <SearchForm className="SearchForm" onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          ref={inputRef}
          name="query"
          defaultValue={query}
          placeholder="Search movies"
        />
      
      </SearchForm>
    </Searchbar>
  );
};

export default Search;
