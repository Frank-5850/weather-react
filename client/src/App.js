import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getForecastByLocation,
  getCurrentWeatherBySearch,
  getForecastBySearch,
  chooseVideo,
} from "./utils/utils";
import LandingPage from "./pages/LandingPage";
import Video from "./globalComponents/Video";
import Nav from "./globalComponents/Nav";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getForecastByLocation(setData, setCurrentWeather);
  }, []);

  const submitSearch = async (e) => {
    e.preventDefault();
    await getCurrentWeatherBySearch(search, setCurrentWeather);
    await getForecastBySearch(currentWeather, setData);
    const updatedHistory = [...history, currentWeather];
    if (updatedHistory.length > 2) {
      updatedHistory.shift();
    }
    setHistory(updatedHistory);
  };

  const historySearch = async (e, name) => {
    e.preventDefault();
    await getCurrentWeatherBySearch(name, setCurrentWeather);
    await getForecastBySearch(currentWeather, setData);
    const updatedHistory = [...history, currentWeather];
    if (updatedHistory.length > 2) {
      updatedHistory.shift();
    }
    setHistory(updatedHistory);
  };

  return (
    <Router>
      <Video src={chooseVideo(currentWeather?.weather[0]?.main)} />
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home">
          <Home
            submitSearch={submitSearch}
            setData={setData}
            setCurrentWeather={setCurrentWeather}
            currentWeather={currentWeather}
            setSearch={setSearch}
            data={data}
            history={history}
            historySearch={historySearch}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
