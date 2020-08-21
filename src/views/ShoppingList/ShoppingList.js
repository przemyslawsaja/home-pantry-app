import React from 'react';
import style from './ShoppingList.module.scss';
import AppContext from "../../context";
import ItemList from "../../components/ItemList/ItemList";
import BackButton from "../../components/Button/BackButton";
import { Link } from "react-router-dom";
const ShoppingList = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <>
                <div className={style.wrapper}>
                    <h1 className={style.title}>Your shopping List:</h1>
                    <ItemList items={context.shoppingList} />
                </div>
                    <div className={style.BackButton}>
                        <Link to={"/"}><BackButton /></Link>
                    </div>

                </>
            )}
        </AppContext.Consumer>

    );
};

export default ShoppingList;