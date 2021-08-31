import React from "react";
import styled from "styled-components";

const DateContainer = styled.div`
  height: 10%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Date = () => {
  return <DateContainer>Date</DateContainer>;
};

export default Date;
