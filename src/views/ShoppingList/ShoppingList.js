import React from 'react';
import style from './ShoppingList.module.scss';
import ItemList from "../../components/ItemList/ItemList";
import BackButton from "../../components/Button/BackButton";
import { Link } from "react-router-dom";
import Item from "../../components/ItemList/Item";
import { v4 as uuidv4 } from 'uuid';
const ShoppingList = ({shoppingList}) => {
    return (
                <>
                    <h1 className={style.title}>Your shopping List:</h1>
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

                    <div className={style.BackButton}>
                        <Link to={"/"}>
                            <BackButton />
                        </Link>
                    </div>

                </>

    );
};

export default ShoppingList;