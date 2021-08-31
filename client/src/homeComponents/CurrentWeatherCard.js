import React from "react";
import styled from "styled-components";

const CurrentCardContainer = styled.div`
  height: 50%;
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

const CurrentWeatherCard = ({ currentWeather }) => {
  return <CurrentCardContainer>Current Weather</CurrentCardContainer>;
};

export default CurrentWeatherCard;
