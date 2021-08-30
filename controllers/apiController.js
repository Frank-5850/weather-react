const axios = require("axios");
require("dotenv").config();
const API = process.env.apiKey;
const url = "https://api.openweathermap.org/data/2.5/onecall";

// module.exports = {
//   getWeather: async (req, res) => {
//     console.log("hi");
//     try {
//       const request = await axios.get(
//         `${url}?lat=37.8137843&lon=122.24015589999999&appid=${API}`
//       );
//       // console.log(request.data);
//       return res.json(request.data);
//     } catch (error) {
//       console.log(error);
//     }
//   },
// };

// const getWeather = () => {
//   return new Promise(async (resolve, reject) => {
//     console.log("hello");
//     try {
//       const request = await axios.get(
//         `${url}?lat=37.8137843&lon=122.24015589999999&appid=${API}`
//       );
//       console.log(request.data);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };
