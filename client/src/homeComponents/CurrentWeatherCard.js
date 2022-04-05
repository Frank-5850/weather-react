import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

const CurrentCardContainer = styled.div`
  height: 50%;
  width: 95%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
`;

const Header = styled.h1`
  margin: 0;
`;

const CardBody = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 70%;
`;

const CardTemp = styled.h2`
  margin: 0;
`;

const CardIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: "icon",
}))``;

const CardDescription = styled.h4`
  margin: 1px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 95%;
`;

const CardButton = styled.div`
  cursor: pointer;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: space-evenly;
  height: 100%;
`;

const DetailBox = styled.div`
  width: 45%;
  height: 20%;
  padding: 1px;
  // border: 0.5px solid black;
`;

const DetailHeader = styled.span``;

const CurrentWeatherCard = ({ weather }) => {
  const [toggle, setToggle] = useState(false);

  const sunrise = moment.unix(weather?.sys?.sunrise).format("LT");
  const sunset = moment.unix(weather?.sys?.sunset).format("LT");

  const mainCard = (toggle) => {
    if (!toggle) {
      return (
        <>
          <CardHeader>
            <Header>{weather?.name}</Header>
          </CardHeader>
          <CardBody>
            <CardTemp>{Math.trunc(weather?.main.temp)}°F</CardTemp>
            <CardIcon
              src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
            />
            <CardDescription>{weather?.weather?.[0].main}</CardDescription>
          </CardBody>
          <CardFooter>
            <CardButton onClick={() => setToggle(!toggle)}>
              More Details
            </CardButton>
          </CardFooter>
        </>
      );
    }
  };

  const moreDetails = (toggle) => {
    if (toggle) {
      return (
        <>
          <CardHeader>
            <Header>{weather?.name}</Header>
          </CardHeader>
          <CardBody>
            <DetailContainer>
              <DetailBox>
                <DetailHeader>Feels Like</DetailHeader>
                <CardDescription>{weather?.main.feels_like}°F</CardDescription>
              </DetailBox>
              <DetailBox>
                <DetailHeader>Description</DetailHeader>
                <CardDescription>
                  {weather?.weather[0].description}
                </CardDescription>
              </DetailBox>
              <DetailBox>
                <DetailHeader>Pressure</DetailHeader>
                <CardDescription>{weather?.main.pressure}</CardDescription>
              </DetailBox>
              <DetailBox>
                <DetailHeader>Humidity</DetailHeader>
                <CardDescription>{weather?.main.humidity} %</CardDescription>
              </DetailBox>
              <DetailBox>
                <DetailHeader>Sunrise</DetailHeader>
                <CardDescription>{sunrise}</CardDescription>
              </DetailBox>
              <DetailBox>
                <DetailHeader>Sunset</DetailHeader>
                <CardDescription>{sunset} </CardDescription>
              </DetailBox>
            </DetailContainer>
          </CardBody>
          <CardFooter>
            <CardButton onClick={() => setToggle(!toggle)}>
              Less Details
            </CardButton>
          </CardFooter>
        </>
      );
    }
  };

  return (
    <CurrentCardContainer>
      {!weather && "loading"}
      {mainCard(toggle)}
      {moreDetails(toggle)}
    </CurrentCardContainer>
  );
};

export default CurrentWeatherCard;
