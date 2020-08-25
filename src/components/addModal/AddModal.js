import React from 'react';
import styles from './AddModal.module.scss'
import AddForm from "../Form/AddForm";

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