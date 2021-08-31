import React from "react";
import styled from "styled-components";

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
`;

const SideBar = (props) => {
  return <SideContainer>{props.children}</SideContainer>;
};

export default SideBar;
