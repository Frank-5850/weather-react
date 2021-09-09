import axios from "axios";

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
  axios
    .get(`/api/search/?search=${search}`)
    .then((res) => setCurrentWeather(res.data))
    .catch((err) => console.log(err));
};

export const getForecastBySearch = async (currentWeather, setData) => {
  axios
    .get(`/api?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
};
