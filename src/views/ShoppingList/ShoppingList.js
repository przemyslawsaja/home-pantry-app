import React from 'react';
import styled from "styled-components";
import ItemList from "../../components/ItemList";
import Button from "../../components/Button";
import Item from "../../components/Item";
import { Link } from "react-router-dom";
import { theme } from "../../theme/mainTheme"
import { device } from "../../devices/breakpoints";
import { v4 as uuidv4 } from 'uuid';

const ShoppingListTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${theme.secondary};
`
const StyledButton = styled(Button)`
  position: fixed;
  bottom: 10px;
  
  @media ${device.laptop}{
    margin-left: 40px;
    font-size: 4.5em;
    bottom: 40px;
  }
`
const ShoppingList = ({shoppingList}) => {
    return (
                <>
                    <ShoppingListTitle>Your shopping List:</ShoppingListTitle>
                    <ItemList
                        items={shoppingList}
                        renderItems={
                            shoppingList.map(item => (
                                <Item
                                    key={uuidv4()}
                                    itemName={item.name}
                                    itemQuantity={item.quantity}

                                    itemUnit={item.unit}
                                    isShoppingList={true}
                                />
                            ))}
                    />
                        <Link to={"/"}><StyledButton secondary /></Link>


                </>

    );
};

export default ShoppingList;