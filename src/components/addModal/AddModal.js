import React from 'react';
import styles from './AddModal.module.scss'

const AddModal = ({children}) => {
    return (
        <>
            <div className={styles.background} />
            <div className={styles.wrapper}>
                {children}
            </div>
        </>
    );
};

export default AddModal;