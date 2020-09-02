import React from 'react';
import styled from "styled-components";
import { theme } from "../theme/mainTheme";
import { device } from "../devices/breakpoints";

const Logo = styled.div`
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  @media ${device.tablet}{
    font-size: ${theme.fontSize.m};
  }
  @media ${device.laptop}{
    font-size: ${theme.fontSize.xl};
  }
`
const Pantry = styled.div`
  font-size: 2em;
  font-weight: ${theme.bold};
  color: ${theme.secondary};
`
const Header = () => {
    return (
        <Logo>
            <h1> Home </h1>
            <Pantry>Pantry.</Pantry>
        </Logo>
    );
};

export default Header;