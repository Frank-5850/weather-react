const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const API = process.env.API_KEY;
const url = "https://api.openweathermap.org/data/2.5/onecall";
const urlTwo = "https://api.openweathermap.org/data/2.5/weather";

router.get("/api", async (req, res) => {
  try {
    res.json(await getForecast(req.query.lat, req.query.lon));
  } catch (err) {
    res.json(err);
  }
});

const getForecast = (lat, lon) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `${url}?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${API}`
      );
      resolve(request.data);
    } catch (err) {
      reject(err);
    }
  });
};

router.get("/api/current", async (req, res) => {
  try {
    res.json(await getCurrentWeather(req.query.lat, req.query.lon));
  } catch (err) {
    res.json(err);
  }
});

const getCurrentWeather = (lat, lon) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `${urlTwo}?lat=${lat}&lon=${lon}&units=imperial&appid=${API}`
      );
      resolve(request.data);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = router;
