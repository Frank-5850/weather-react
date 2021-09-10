import axios from "axios";
import clear from "../assets/clearSkies.mp4";
import clouds from "../assets/clouds.mp4";
import showerRain from "../assets/showerRain.mp4";
import rain from "../assets/rain.mp4";
import thunderstorm from "../assets/thunderStorm.mp4";
import snow from "../assets/snow.mp4";
import mist from "../assets/mist.mp4";
import landingPage from "../assets/LandingPage.mp4";

export const getForecastByLocation = (setData, setCurrentWeather) => {
  navigator.geolocation.getCurrentPosition((data) => {
    const lat = data.coords.latitude;
    const lon = data.coords.longitude;
    axios
      .get(`/api?lat=${lat}&lon=${lon}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    axios
      .get(`/api/current?lat=${lat}&lon=${lon}`)
      .then((res) => setCurrentWeather(res.data))
      .catch((err) => console.log(err));
  });
};

export const getCurrentWeatherBySearch = async (search, setCurrentWeather) => {
  await axios
    .get(`/api/search/?search=${search}`)
    .then((res) => setCurrentWeather(res.data))
    .catch((err) => console.log(err));
};

export const getForecastBySearch = async (currentWeather, setData) => {
  await axios
    .get(`/api?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
};

export const onChange = (e, func) => {
  func(e.target.value);
};

// export const searchSubmit = (
//   e,
//   current,
//   forecast,
//   search,
//   setCurrentWeather,
//   currentWeather,
//   setData
// ) => {
//   e.preventDefault();
//   current(search, setCurrentWeather);
//   forecast(currentWeather, setData);
// };

// export const submitSearch = (e, func1, func2) => {
//   e.preventDefault();
//   func1();
//   func2();
// };

export const chooseVideo = (condition) => {
  switch (condition) {
    case "Clear":
      return clear;
    case "Clouds":
      return clouds;
    case "Drizzle":
      return showerRain;
    case "Rain":
      return rain;
    case "Thunderstorm":
      return thunderstorm;
    case "Snow":
      return snow;
    case "Mist":
      return mist;
    default:
      return landingPage;
  }
};
