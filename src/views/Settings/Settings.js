import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #84DCFE;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
`
const SettingsItem = styled.h1`
  &:hover {
    color: #6A6C7A;
    cursor: pointer;
  }
  
  &:active {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    }
`
const Settings = () => {
    return (
        <Wrapper>
            <SettingsItem> About app </SettingsItem>
            <SettingsItem> Contact Us </SettingsItem>
            <SettingsItem> Coming soon... </SettingsItem>
            <Link to={'/'}> <Button secondary /> </Link>
        </Wrapper>
    );
};

export default Settings;