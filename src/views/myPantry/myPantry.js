import React from 'react';
import styles from './myPantry.module.scss'
import {Link} from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import AddModal from "../../components/addModal/AddModal";
import BackButton from "../../components/Button/BackButton";
import AddForm from "../../components/Form/AddForm";
import Item from "../../components/ItemList/Item";
import { v4 as uuidv4 } from 'uuid';
const MyPantry = ({toggleModal, addItem, removeItem, itemList, isModalEnabled}) => {
    return (
        <>
            <h1 className={styles.title}>You own:</h1>

            <ItemList
                items={itemList}
                renderItems={
                    itemList.map(item => (
                        <Item
                            key={uuidv4()}
                            itemName={item.name}
                            itemQuantity={item.quantity}
                            itemUnit={item.unit}
                            removeItem={removeItem}
                        />
                    ))}
            />

            {isModalEnabled && <AddModal>
                <AddForm
                    isModalEnabled={isModalEnabled}
                    toggleModal={toggleModal}
                    addItem={addItem}
                />
            </AddModal>}

            <div className={styles.buttons}>
                <Link to={'/'}> <BackButton /> </Link>

                <div onClick={() => toggleModal()} className={styles.buttonsAdd}>
                    <i className="fas fa-plus-circle"></i>
                </div>
            </div>
        </>
    )
}



export default MyPantry;