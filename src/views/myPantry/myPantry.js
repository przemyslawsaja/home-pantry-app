import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { theme } from "../../theme/mainTheme";
import ItemList from "../../components/ItemList";
import AddModal from "../../components/AddModal";
import Button from "../../components/Button";
import AddForm from "../../components/AddForm";
import Item from "../../components/Item";
import { v4 as uuidv4 } from 'uuid';
import {device} from "../../devices/breakpoints";

const PantryTitle = styled.h1`
  text-align: center;
  font-size: ${theme.fontSize.m};
  color: ${theme.secondary};
`
const Buttons = styled.div`
  color: ${theme.secondary};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  bottom: 10px ;
  
  @media ${device.laptop}{
    font-size: 1.5em;
    bottom: 40px;
    width: 95vw;
  }
`
const AddButton = styled.div`
  font-size: 3em;
  background-color: transparent;
  margin: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  
  &:hover{
    color: ${theme.darkSecondary};
  }
`
const MyPantry = ({toggleModal, addItem, removeItem, itemList, isModalEnabled}) => {
    return (
        <>
            <PantryTitle>Your products:</PantryTitle>

            <ItemList
                items={itemList}
                renderItems={
                    itemList.map(item => (
                        <Item
                            key={uuidv4()}
                            itemName={item.name}
                            itemQuantity={item.quantity}
                            itemLimit={item.limit}
                            itemUnit={item.unit}
                            removeItem={removeItem}
                        />
                    ))}
            />

            {isModalEnabled && <AddModal>
                <AddForm
                    isModalEnabled={isModalEnabled}
                    toggleModal={toggleModal}
                    addItem={addItem}
                />
            </AddModal>}

            <Buttons>
                <Link to={'/'}>
                    <Button secondary />
                </Link>

                <AddButton onClick={() => toggleModal()}>
                    <i className="fas fa-plus-circle"></i>
                </AddButton>
            </Buttons>
        </>
    )
}



export default MyPantry;