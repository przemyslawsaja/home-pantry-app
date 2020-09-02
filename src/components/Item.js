import React from 'react';
import styled from 'styled-components'
import PropTypes from "prop-types";
import { device } from "../devices/breakpoints";
import { theme } from "../theme/mainTheme";

const ItemWrapper = styled.li`
  background-color: ${theme.darkPrimary};
  box-shadow: 0 5px 20px -10px rgba(black, .3);
  margin: 5px 0;
  font-size: 0.8em;

  transition: all .5s ease;
  -o-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -webkit-transition: all .5s ease;
  
  @media ${device.mobileL}{
    font-size: 1.1em;
  }
  @media ${device.tablet}{
    font-size: 1.5em;
    margin: 10px 0;
  }
  @media ${device.laptopL}{
    font-size: 2em;
    margin: 20px 0;
  }
  
  &:hover {
    color: ${theme.secondary};
  }
`
const ItemName = styled.p`
  font-size: 1.2em;
`
const ItemValue = styled.p`
  margin-left: 10px; 
`
const ItemRemoveBtn = styled.button`
  outline: none;
  background: none;
  color: ${theme.secondary};
  font-size: ${theme.fontSize.m};
  border: none;
  cursor: pointer;
    
  &:hover {
    color: ${theme.darkSecondary};
  }
`
const ItemDetails = styled.div`
 padding: 0 10px;
 display: flex;
 align-items: baseline;
 justify-content: space-between;
`
const Item = ({itemName, itemQuantity, itemUnit, itemLimit, isShoppingList, removeItem}) => {
    return (
        <ItemWrapper>
            <ItemDetails>
                <ItemName>{itemName}</ItemName>
                { isShoppingList
                    ? <ItemValue> to Buy: {itemQuantity} {itemUnit} </ItemValue>
                    : <>
                        <ItemValue> You own: {itemQuantity} {itemUnit}</ItemValue>
                        <ItemValue> Limit: {itemLimit} </ItemValue>
                        <ItemRemoveBtn onClick={() => removeItem(itemName)}>
                            <i className="fas fa-minus-circle"/>
                        </ItemRemoveBtn>
                    </>}
            </ItemDetails>
        </ItemWrapper>
    );
};

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number,
  itemUnit: PropTypes.string,
  isShoppingList: PropTypes.bool,
  removeItem: PropTypes.func,
};
Item.defaultProps = {
    itemUnit: null
};

export default Item;