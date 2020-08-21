import React from 'react';
import styles from './ItemList.module.scss';
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';
const ItemList = ({items}) => {
    return (
        <>
            {items.length
                ? ( <ul className={styles.wrapper}>
                    {items.map(item => (
                        <Item
                            key={uuidv4()}
                            itemName={item.name}
                            itemQuantity={item.quantity}
                            itemUnit={item.unit}
                        />
                    ))}
                </ul> )
                : ( <div className={styles.noItems}>
                         <h1>Your products list is empty :( pleas add some items! </h1>
                    </div>)
            }
        </>
    )
};
export default ItemList;