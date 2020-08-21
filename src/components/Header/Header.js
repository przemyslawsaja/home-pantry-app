import React from 'react';
import styles from './Header.module.scss'
const Header = () => {
    return (
        <div className={styles.logo}>
            <h1
                className={styles.logoHome}>
                    Home
                <span className={styles.logoPantry}>
                    Pantry.
                </span>
            </h1>
        </div>
    );
};

export default Header;