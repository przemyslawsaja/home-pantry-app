import React, {useState} from 'react';
import styles from './Root.module.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from "../../context";
import MyPantry from "../myPantry/myPantry";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import ShoppingList from "../ShoppingList/ShoppingList";
import Settings from "../Settings/Settings";


const Root = () => {
    const [itemList, setItemList] = useState([]);
    const [shoppingList, setShoppingList] = useState([]);
    const [isModalEnabled, setModalValue] = useState(false)

    const toggleModal = () => {
        setModalValue(!isModalEnabled);
    }

    const UpdateItemList = (newItem) => {
        setItemList([
            ...itemList,
            newItem
        ])
    }
    const UpdateShoppingList = (newItem) => {
        UpdateItemList(newItem)
        setShoppingList([
            ...itemList,
            {...newItem, quantity: newItem.limit - newItem.quantity}
        ])
    }
    const addItem = ( event, newItem ) => {
        event.preventDefault();
        (newItem.quantity > newItem.limit) ? UpdateItemList(newItem) : UpdateShoppingList(newItem)
        toggleModal();
    }


    return (
        <>
            <Header/>
            <BrowserRouter>
                <AppContext.Provider>
                    <Switch>
                        <Route exact path="/" component={Navigation}/>
                        <Route path="/myPantry">
                            <MyPantry
                                toggleModal={toggleModal}
                                addItem={addItem}
                                itemList={itemList}
                                isModalEnabled = {isModalEnabled}
                            />
                        </Route>
                        <Route path="/ShoppingList">
                            <ShoppingList shoppingList={shoppingList}/>
                        </Route>
                        <Route path="/Settings" component={Settings}/>
                    </Switch>
                </AppContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default Root;
