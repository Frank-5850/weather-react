import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main = styled.div`
  min-height: 45px;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
`;

const NavUnlisted = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid white;
  border-radius: 5px;
  a {
    text-decoration: none;
  }
  li {
    color: grey;
    margin: 0.2rem 0.8rem;
    font-size: 1.3rem;
    list-style: none;
  }
`;

const Nav = () => {
  return (
    <Main>
      <NavUnlisted>
        <NavLink to="/" activeClassName="current" exact>
          <li>Home</li>
        </NavLink>
      </NavUnlisted>
      <NavUnlisted>
        <a
          href="https://github.com/Frank-5850/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          <li>Github</li>
        </a>
      </NavUnlisted>
    </Main>
  );
};

export default Nav;
