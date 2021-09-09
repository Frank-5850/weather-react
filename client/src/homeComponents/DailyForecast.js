import React from "react";
import styled from "styled-components";
import moment from "moment";

const DailyContainer = styled.div`
  height: 70%;
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
  height: 5%;
  display: flex;
  align-items: center;
`;

const Header = styled.h3`
  margin: 0;
  margin-left: 10px;
`;

const CardBody = styled.div`
  width: 100%;
  height: 93%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CardDay = styled.div`
  padding-left: 10px;
  width: 100px;
`;

const CardIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: "icon",
}))`
  height: 50px;
`;

const CardTemp = styled.div`
  padding-right: 10px;
  width: 100px;
  display: flex;
  justify-content: flex-end;
`;

const DailyForecast = ({ weather }) => {
  const getToday = (timestamp) => {
    return moment.unix(timestamp).format("dddd");
  };

  return (
    <DailyContainer>
      <CardHeader>
        <Header>Daily Forecast</Header>
      </CardHeader>
      <CardBody>
        {weather &&
          weather.map((weather, index) => (
            <Card key={index}>
              <CardDay>{getToday(weather.dt)}</CardDay>
              <CardIcon
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
              <CardTemp>
                {Math.trunc(weather.temp.day)}° /{" "}
                {Math.trunc(weather.temp.night)}°
              </CardTemp>
            </Card>
          ))}
      </CardBody>
    </DailyContainer>
  );
};

export default DailyForecast;
