import React from 'react';
import styles from './Item.module.scss';
import PropTypes from "prop-types";
import AppContext from "../../context";

const Item = ({itemName, itemQuantity, itemUnit}) => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <li className={styles.wrapper}>
                    <div className={styles.item}>
                        <h1 className={styles.itemName}>{itemName}</h1>

                        <span className={styles.itemQuantity}>Quantity: {itemQuantity} {itemUnit}</span>
                    </div>
                </li>
            )}
        </AppContext.Consumer>
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