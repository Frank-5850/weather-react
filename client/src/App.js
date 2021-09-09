import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCurrentWeatherBySearch,
  getForecastByLocation,
  getForecastBySearch,
} from "./utils/utils";
// import axios from "axios";
import LandingPage from "./pages/LandingPage";
import Video from "./globalComponents/Video";
import landingVideo from "./assets/LandingPage.mp4";
import Nav from "./globalComponents/Nav";
import LandingText from "./landingComponents/LandingText";
import LandingButton from "./landingComponents/LandingButton";
import Home from "./pages/Home";
import SideBar from "./homeComponents/Sidebar";
import Body from "./homeComponents/Body";
import Search from "./homeComponents/Search";
import CurrentWeatherCard from "./homeComponents/CurrentWeatherCard";
import History from "./homeComponents/History";
import Date from "./homeComponents/Date";
import DailyForecast from "./homeComponents/DailyForecast";
import HourlyForecast from "./homeComponents/HourlyForecast";

function App() {
  const [data, setData] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    getForecastByLocation(setData, setCurrentWeather);
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = (e) => {
    console.log("hello");
    e.preventDefault();
    getCurrentWeatherBySearch(search, setCurrentWeather);
    getForecastBySearch(currentWeather, setData);
  };

  return (
    <Router>
      <Video src={landingVideo} />
      <Nav />
      <Switch>
        <Route exact path="/">
          <LandingPage>
            <LandingText>Welcome to my Weather App</LandingText>
            <Link to="/home">
              <LandingButton>Get Started</LandingButton>
            </Link>
          </LandingPage>
        </Route>
        <Route path="/home">
          {/* <Video src={landingVideo} />
          <Nav /> */}
          <Home>
            <SideBar>
              <Search onChange={onChange} submitSearch={submitSearch} />
              <CurrentWeatherCard weather={currentWeather} />
              <History />
            </SideBar>
            <Body>
              <Date date={data?.current?.dt} />
              <HourlyForecast weather={data?.hourly} />
              <DailyForecast weather={data?.daily?.slice(1)} />
            </Body>
          </Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
