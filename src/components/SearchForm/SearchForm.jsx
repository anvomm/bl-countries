import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    if (!searchQuery) {
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const onHandleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={onHandleChange}
        defaultValue={'DEFAULT'}
      >
        <option value="DEFAULT" disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
