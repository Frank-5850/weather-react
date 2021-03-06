import React from "react";
import styled from "styled-components";
import { ImLocation2 } from "react-icons/im";
import { getForecastByLocation } from "./../utils/utils";

const SearchForm = styled.form`
  height: 5%;
  width: 95%;
  display: flex;
  justify-content: space-around;
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
  width: 80%;
  border: none;
  background: none;
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  cursor: pointer;
`;

const SearchWord = styled.p`
  font-size: 12px;
`;

const Search = ({ onChange, submitSearch, setData, setCurrentWeather }) => {
  return (
    <SearchForm onSubmit={submitSearch}>
      <ImLocation2
        style={{
          cursor: "pointer",
          color: "blue",
          width: "30px",
          height: "20px",
        }}
        onClick={() => getForecastByLocation(setData, setCurrentWeather)}
      />
      <SearchInput
        onChange={onChange}
        placeholder="Search by city name"
        type="text"
      />
      <SearchButton onClick={(e) => submitSearch(e)}>
        <SearchWord>Search</SearchWord>
      </SearchButton>
    </SearchForm>
  );
};

export default Search;
