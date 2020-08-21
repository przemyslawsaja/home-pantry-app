import React from 'react';
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className={styles.wrapper}>

                <div className={styles.myPantry}>
                    <h2 className={styles.myPantryTitle}>My Pantry</h2>
                    <Link className={styles.myPantryLink} to={'/MyPantry'}>
                        <div className={styles.myPantryBox}>
                            <i className="fas fa-utensils"></i>
                        </div>
                    </Link>
                </div>

                <div className={styles.shoppingList}>
                    <h2 className={styles.shoppingListTitle}>Shopping List</h2>
                    <Link className={styles.shoppingListLink} to={'/ShoppingList'}>
                        <div className={styles.shoppingListBox}>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </Link>
                </div>

                <div className={styles.settings}>
                    <h2 className={styles.settingsTitle}>Settings</h2>
                    <Link className={styles.settingsLink} to={'/Settings'}>
                        <div className={styles.settingsBox}>
                            <i className="fas fa-cog"></i>
                        </div>
                    </Link>
                </div>

        </div>
    );
};

export default Navigation;