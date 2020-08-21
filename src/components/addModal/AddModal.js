import React from 'react';
import styles from './AddModal.module.scss'
import AddForm from "../Form/AddForm";

//TODO: tranistions
const AddModal = () => {
    return (
        <>
            <div className={styles.background} />
            <div className={styles.wrapper}>
                <AddForm />
            </div>
        </>
    );
};

export default AddModal;