import React from 'react';
import styled from "styled-components";
import {theme} from "../theme/mainTheme";
import { device } from "../devices/breakpoints";

const ListWrapper = styled.ul`
  list-style: none;
  margin: 40px 0 0 0;
  padding: 0;
`
const EmptyList = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  margin: 100px 0;
  text-align: center;
  font-size: .8em;
  color: ${theme.lightPrimary};
`
const EmptyListMessage = styled.p`
  font-size: ${theme.fontSize.m};
  
  @media ${device.tablet}{
   font-size: ${theme.fontSize.l};
  }
  @media ${device.laptop}{
   font-size: ${theme.fontSize.xl};
  }
`
const ItemList = ({items, renderItems}) => {
    return (
        <>
            {items.length
                ? <ListWrapper> { renderItems } </ListWrapper>
                : <EmptyList>
                    <EmptyListMessage>Your products list is empty <span role="img"  aria-label="sadFace">&#129402;</span> please add some items! </EmptyListMessage>
                  </EmptyList>
            }
        </>
    )
};
export default ItemList;

