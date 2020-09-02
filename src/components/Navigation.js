import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { theme } from "../theme/mainTheme";
import { device } from "../devices/breakpoints";

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Open Sans', sans-serif;
  
  @media ${device.laptop}{
     gap: 100px;
     flex-direction: row;
  }
  @media ${device.laptop}{
     gap: 200px;
  }
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.color};
  align-items: center;
`
const IconTitle = styled.h1`
  font-size: ${theme.fontSize.s};
  
  @media ${device.tablet}{
     font-size: ${theme.fontSize.m};
  }
   @media ${device.laptop}{
     font-size: ${theme.fontSize.l};
  }
`
const IconLink = styled(Link)`
  text-decoration: none;
`
const IconBox = styled.div`
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: solid 2px ${props => props.color};
  border-radius: 20px;
  box-shadow: 0 20px 40px -10px rgba(black, .4);
  width: 110px;
  height: 110px;
  
  @media ${device.tablet}{
    width: 120px;
    height: 120px;
  }
  @media ${device.laptop}{
    font-size: 6em;
    width: 200px;
    height: 200px;
  }
  @media ${device.laptopL}{
    font-size: 7em;
    width: 250px;
    height: 250px;
  }
  transition: all .8s ease;
  -o-transition: all .8s ease;
  -moz-transition: all .8s ease;
  -webkit-transition: all .8s ease;
  
  i{
    color: ${props => props.color};
  }
  
  &:hover {
    background-color: ${props => props.color};
    border: solid 2px ${props => props.color};
    width: 230px;
    height: 230px;
    cursor: pointer;
    
    @media ${device.laptopL}{
        width: 300px;
        height: 300px;
    }
    i {
    color: white;
    }
  }
`
const Menu = [
    {
        title: 'My Pantry',
        link: "/myPantry",
        color: theme.secondary,
        icon: 'fas fa-utensils',
        id: 1
    },
    {
        title: 'Shopping List',
        link: "/shoppingList",
        color: theme.shoppingList,
        icon: 'fas fa-shopping-cart',
        id: 2
    },
    {
        title: 'Settings',
        link: "/settings",
        color: theme.settings,
        icon: 'fas fa-cog',
        id: 3
    },
]
const Navigation = () => {
    return (
        <Wrapper>
            {Menu.map(box => {
                return (
                    <IconWrapper color={box.color} key={box.id}>
                        <IconTitle>{box.title}</IconTitle>
                        <IconLink to={box.link}>
                            <IconBox color={box.color}> <i className={box.icon}/> </IconBox>
                        </IconLink>
                    </IconWrapper>
                )
            })}
        </Wrapper>
    );
};

export default Navigation;