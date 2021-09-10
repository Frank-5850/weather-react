import styled from "styled-components";
import React from "react";
import SideBar from "../homeComponents/Sidebar";
import Body from "../homeComponents/Body";
import Search from "../homeComponents/Search";
import CurrentWeatherCard from "../homeComponents/CurrentWeatherCard";
import History from "../homeComponents/History";
import Date from "../homeComponents/Date";
import DailyForecast from "../homeComponents/DailyForecast";
import HourlyForecast from "../homeComponents/HourlyForecast";
import { onChange } from "../utils/utils";

const HomeContainer = styled.div`
  margin: 0;
  height: 95vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: black;
`;

const HomeMain = styled.div`
  margin: 0;
  min-height: 550px;
  height: 80vh;
  min-width: 650px;
  width: 60vw;
  box-sizing: border-box;
  padding: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

const Home = ({
  currentWeather,
  data,
  setSearch,
  submitSearch,
  history,
  historySearch,
  setData,
  setCurrentWeather,
}) => {
  return (
    <HomeContainer>
      <HomeMain>
        <SideBar>
          <Search
            onChange={(e) => onChange(e, setSearch)}
            submitSearch={submitSearch}
            setData={setData}
            setCurrentWeather={setCurrentWeather}
          />
          <CurrentWeatherCard weather={currentWeather} />
          <History historySearch={historySearch} history={history} />
        </SideBar>
        <Body>
          <Date date={data?.current?.dt} />
          <HourlyForecast weather={data?.hourly} />
          <DailyForecast weather={data?.daily?.slice(1)} />
        </Body>
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
