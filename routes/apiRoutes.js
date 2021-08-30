const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const API = process.env.API_KEY;
const url = "https://api.openweathermap.org/data/2.5/onecall";

// const { getWeather } = require("../controllers/apiController");

// router.get("/get", getWeather);

router.get("/api", async (req, res) => {
  console.log(req.query);
  try {
    res.json(await getWeather(req.query.lat, req.query.lon));
  } catch (err) {
    res.json(err);
  }
});

const getWeather = (lat, lon) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("hello");
      const request = await axios.get(
        // `${url}?lat=37.8137843&lon=122.24015589999999&appid=${API}`
        `${url}?lat=${lat}&lon=${lon}&appid=${API}`
      );
      resolve(request.data);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = router;
