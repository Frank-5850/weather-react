import React from "react";
import styled from "styled-components";

const LandingPageContainer = styled.div`
  margin: 0;
  height: 95vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingWelcome = styled.div`
  margin: 0;
  min-height: 550px;
  height: 80vh;
  min-width: 650px;
  width: 60vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

const LandingPage = ({ children }) => {
  return (
    <LandingPageContainer>
      <LandingWelcome>{children}</LandingWelcome>
    </LandingPageContainer>
  );
};

export default LandingPage;
