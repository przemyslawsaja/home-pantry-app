import React from 'react';
import styles from './Settings.module.scss'
import { Link } from "react-router-dom";
import BackButton from "../../components/Button/BackButton";
const Settings = () => {
    return (
        <div className={styles.wrapper}>
            <h1  className={styles.wrapperItem}>Report Bugs</h1>
            <h1  className={styles.wrapperItem}>Contact Us</h1>
            <h1  className={styles.wrapperItem}>Coming soon...</h1>
            <div className={styles.buttonsBack}>
                <Link to={'/'}><BackButton /></Link>
            </div>
        </div>
    );
};

export default Settings;