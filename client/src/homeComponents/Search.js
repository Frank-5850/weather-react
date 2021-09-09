import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  height: 5%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const SearchInput = styled.input`
  height: 50%;
  width: 90%;
  border: none;
  background: none;
`;

const Search = ({ onChange, submitSearch }) => {
  return (
    <SearchForm onSubmit={submitSearch}>
      <SearchInput
        onChange={onChange}
        placeholder="Search by city name"
        type="text"
      />
    </SearchForm>
  );
};

export default Search;
