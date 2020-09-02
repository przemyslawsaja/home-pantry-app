import React from 'react';
import styled from 'styled-components'
import { theme } from "../theme/mainTheme";

const StyledButton = styled.button`
  color: ${theme.secondary};
  border-radius: 10px;
  box-shadow: 0 20px 40px -10px rgba(black, .5);
  padding: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  border: ${({secondary}) => secondary ? "0" : `2px solid ${theme.secondary}`};
  font-size: ${({secondary}) => secondary ? theme.fontSize.xxl : theme.fontSize.m};
  background-color: transparent ;
  outline: none;
  
  &:hover {
      background-color: ${({secondary}) => secondary ? 'none' : theme.secondary};
      color: ${({secondary}) => secondary ? theme.darkSecondary : theme.primary};
  }
`
const Button = ({children, secondary, ...props }) => {
    return <StyledButton secondary={secondary} {...props}>
        {secondary &&  <i className="fas fa-chevron-circle-left"/>}
        {children}
    </StyledButton>
};

export default Button;