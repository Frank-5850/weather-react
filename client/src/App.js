import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCoords } from "./utils/utils";
import LandingPage from "./pages/LandingPage";
import Video from "./landingComponents/Video";
import landingVideo from "./assets/LandingPage.mp4";
import Nav from "./globalComponents/Nav";
import LandingMain from "./landingComponents/LandingMain";
import LandingWelcome from "./landingComponents/LandingWelcome";
import LandingText from "./landingComponents/LandingText";
import LandingButton from "./landingComponents/LandingButton";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState();
  const [currentWeather, setCurrentWeather] = useState();

  // useEffect(() => {
  //   getCoords(setData);
  // }, []);

  return (
    <Router>
      <Video src={landingVideo} />
      <Nav />
      <Switch>
        <Route exact path="/">
          <LandingPage>
            <LandingMain>
              <LandingWelcome>
                <LandingText>Welcome to my Weather App</LandingText>
                <Link to="/home">
                  <LandingButton>Get Started</LandingButton>
                </Link>
              </LandingWelcome>
            </LandingMain>
          </LandingPage>
        </Route>
        <Route path="/home">
          {/* <Video src={landingVideo} />
          <Nav /> */}
          <Home>
            <h1>Home</h1>
          </Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
