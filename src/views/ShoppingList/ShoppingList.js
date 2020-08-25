import React from 'react';
import style from './ShoppingList.module.scss';
import ItemList from "../../components/ItemList/ItemList";
import BackButton from "../../components/Button/BackButton";
import { Link } from "react-router-dom";
const ShoppingList = ({shoppingList}) => {
    return (
                <>
                    <h1 className={style.title}>Your shopping List:</h1>
                    <ItemList items={shoppingList} isShoppingList={true}/>

                    <div className={style.BackButton}>
                        <Link to={"/"}>
                            <BackButton />
                        </Link>
                    </div>

                </>

    );
};

export default ShoppingList;