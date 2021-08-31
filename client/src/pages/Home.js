import styled from "styled-components";
import React from "react";

const HomeContainer = styled.div`
  margin: 0;
  height: 95vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const HomeMain = styled.div`
  margin: 0;
  min-height: 550px;
  height: 80vh;
  min-width: 650px;
  width: 60vw;
  box-sizing: border-box;
  padding: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

const Home = ({ children }) => {
  return (
    <HomeContainer>
      <HomeMain>{children}</HomeMain>
    </HomeContainer>
  );
};

export default Home;
