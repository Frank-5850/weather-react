import axios from "axios";

export const getCoords = (setData) => {
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
};
