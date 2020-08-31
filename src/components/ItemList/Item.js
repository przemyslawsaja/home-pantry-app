import React from 'react';
import styles from './Item.module.scss';
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Item = ({itemName, itemQuantity, itemUnit, isShoppingList, removeItem}) => {
    return (
                <li className={styles.wrapper}>
                    <div className={styles.item}>
                        <h1 className={styles.itemName}>{itemName}</h1>

                        <div>
                            { isShoppingList
                                ? <span className={styles.itemQuantity}>to Buy: {itemQuantity} {itemUnit}</span>
                                : <span className={styles.itemQuantity}>You own: {itemQuantity} {itemUnit}
                                    <Button className={styles.itemRemove} onClick={() => removeItem(itemName)}>
                                        <i className="fas fa-minus-circle"></i>
                                    </Button>
                                  </span>

                            }
                        </div>
                    </div>

                </li>
    );
};

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number,
  itemUnit: PropTypes.string,
  isShoppingList: PropTypes.bool,
  removeItem: PropTypes.func,

};
Item.defaultProps = {
    itemUnit: null
};
export default Item;