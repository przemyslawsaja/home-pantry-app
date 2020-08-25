import React from 'react';
import styles from './myPantry.module.scss'

import {Link} from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import AddModal from "../../components/addModal/AddModal";
import BackButton from "../../components/Button/BackButton";
import AddForm from "../../components/Form/AddForm";

const MyPantry = ({toggleModal, itemList, isModalEnabled,addItem}) => {
    return (
        <>
            <h1 className={styles.title}>You own:</h1>

            <ItemList items={itemList}/>
            {isModalEnabled &&
            <AddModal>
                <AddForm
                    isModalEnabled={isModalEnabled}
                    toggleModal={toggleModal}
                    addItem={addItem}
                />
            </AddModal>}

            <div className={styles.buttons}>
                <Link to={'/'}>
                    <BackButton />
                </Link>
                <div onClick={() => toggleModal()} className={styles.buttonsAdd}>
                    <i className="fas fa-plus-circle"></i>
                </div>
            </div>
        </>
    )
}



export default MyPantry;