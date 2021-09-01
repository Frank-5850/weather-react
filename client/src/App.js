import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getForecastByLocation } from "./utils/utils";
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

  useEffect(() => {
    getForecastByLocation(setData, setCurrentWeather);
  }, []);

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
              <Search />
              <CurrentWeatherCard weather={currentWeather} />
              <History />
            </SideBar>
            <Body>
              <Date />
              <DailyForecast />
              <HourlyForecast />
            </Body>
          </Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
