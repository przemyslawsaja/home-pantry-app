import React from 'react';
import styles from './Root.module.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from "../../context";
import MyPantry from "../myPantry/myPantry";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import ShoppingList from "../ShoppingList/ShoppingList";
import Settings from "../Settings/Settings";


class Root extends React.Component {
    state = {
        itemList: [],
        shoppingList: [],
        isModalEnabled: false
    };

    addItem = (e, newItem) => {
        e.preventDefault();
        newItem.quantity >= newItem.limit
            ? (this.setState({
                itemList: [...this.state.itemList, newItem],
             }))
            : (
                this.setState({
                    itemList: [...this.state.itemList, newItem],
                    shoppingList: [...this.state.shoppingList, newItem],
                })
            )

    };
    closeModal = () => {
        this.setState({
            isModalEnabled: false,
        })
    };
    openModal = () => {
        this.setState({
            isModalEnabled: true,
        })
    };

 render() {
        const contextElements = {
          ...this.state,
            addItem: this.addItem,
            closeModal: this.closeModal,
            openModal: this.openModal,
        };
        return (
            <>
                <Header/>
                <BrowserRouter>
                    <AppContext.Provider value={contextElements}>
                                <Switch>
                                    <Route exact path= "/" component={Navigation}/>
                                    <Route path= "/myPantry" component={MyPantry}/>
                                    <Route path= "/ShoppingList" component={ShoppingList}/>
                                    <Route path= "/Settings" component={Settings}/>
                                </Switch>
                    </AppContext.Provider>
                </BrowserRouter>
            </>
        );
    }
}

export default Root;
