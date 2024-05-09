'use client'

import React from "react";
import styled from "styled-components";

const MainNav: React.FC = () => {
  return <StMainNAv>
    <h1>Logo</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
  </StMainNAv>;
}

const StMainNAv = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
`;

export default MainNav;

