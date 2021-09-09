import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getForecastByLocation,
  getCurrentWeatherBySearch,
  getForecastBySearch,
} from "./utils/utils";
// import axios from "axios";
import LandingPage from "./pages/LandingPage";
import Video from "./globalComponents/Video";
import landingVideo from "./assets/LandingPage.mp4";
import Nav from "./globalComponents/Nav";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    getForecastByLocation(setData, setCurrentWeather);
  }, []);

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
        <Route exact path="/" component={LandingPage} />
        <Route path="/home">
          <Home
            submitSearch={submitSearch}
            setData={setData}
            search={search}
            setCurrentWeather={setCurrentWeather}
            currentWeather={currentWeather}
            setSearch={setSearch}
            data={data}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
