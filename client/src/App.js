import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [dailyForecast, setDailyForecast] = useState();

  const getCoords = () => {
    const success = (position) => {
      axios
        .get(
          `/api?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };

    const error = () => {
      alert("Sorry, no position available.");
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    setCurrentWeather(data ? data.current : null);
  };

  useEffect(() => {
    getCoords();
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
