import React from "react";
import styled from "styled-components";
import moment from "moment";

const HourlyContainer = styled.div`
  height: 25%;
  width: 95%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  // box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  // backdrop-filter: blur(4px);
  // -webkit-backdrop-filter: blur(4px);
  // border-radius: 10px;
  // border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CardHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`;

const Header = styled.h3`
  margin: 0;
  margin-left: 10px;
`;

const CardBody = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  overflow: overlay;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  width: 100px;
  height: 95%;
  margin: 3px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CardTime = styled.div``;

const CardIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: "icon",
}))`
  height: 50px;
`;

const CardTemp = styled.div``;

const HourlyForecast = ({ weather }) => {
  const getTime = (timestamp) => {
    return moment.unix(timestamp).format("hA");
  };

  return (
    <HourlyContainer>
      <CardHeader>
        <Header>Hourly Forecast</Header>
      </CardHeader>
      <CardBody>
        {weather &&
          weather.map((weather, index) => (
            <Card key={index}>
              <CardTime>{getTime(weather.dt)}</CardTime>
              <CardIcon
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
              <CardTemp>{Math.trunc(weather.temp)}°</CardTemp>
            </Card>
          ))}
      </CardBody>
    </HourlyContainer>
  );
};

export default HourlyForecast;
