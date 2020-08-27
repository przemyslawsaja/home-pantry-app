import React from 'react';
import styles from './ItemList.module.scss';

const ItemList = ({items, renderItems}) => {
    return (
        <>
            {items.length
                ? ( <ul className={styles.wrapper}>
                    { renderItems }
                </ul> )
                : ( <div className={styles.noItems}>
                         <h1>Your products list is empty :( please add some items! </h1>
                    </div>)
            }
        </>
    )
};
export default ItemList;

