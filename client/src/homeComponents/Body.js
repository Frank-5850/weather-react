import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100%;
`;

const Body = (props) => {
  return <BodyContainer>{props.children}</BodyContainer>;
};

export default Body;
