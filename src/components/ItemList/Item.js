import React from 'react';
import styles from './Item.module.scss';
import PropTypes from "prop-types";

const Item = ({itemName, itemQuantity, itemUnit, isShoppingList}) => {
    return (
                <li className={styles.wrapper}>
                    <div className={styles.item}>
                        <h1 className={styles.itemName}>{itemName}</h1>

                        { isShoppingList
                            ? <span className={styles.itemQuantity}>to Buy: {itemQuantity} {itemUnit}</span>
                            : <span className={styles.itemQuantity}>Quantity: {itemQuantity} {itemUnit}</span>
                        }
                    </div>
                </li>
    );
};

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number,
  itemUnit: PropTypes.string
};
Item.defaultProps = {
    itemUnit: null
};
export default Item;