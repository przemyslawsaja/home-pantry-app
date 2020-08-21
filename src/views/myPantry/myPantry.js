import React from 'react';
import styles from './myPantry.module.scss'
import AppContext from "../../context";
import {Link} from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import AddModal from "../../components/addModal/AddModal";
import Button from "../../components/Button/Button";
import BackButton from "../../components/Button/BackButton";
class MyPantry extends React.Component {
    render() {
        return (
                <AppContext.Consumer>
                    {(context) => (
                    <div className = {styles.wrapper}>
                        <h1 className={styles.title}>You own:</h1>
                        {/* Item list */}
                        <ItemList items={context.itemList}/>
                        {/* Add window */}
                        {context.isModalEnabled && <AddModal/>}
                        {/* Buttons */}
                        <div className={styles.buttons}>
                            <div className={styles.buttonsBack}>
                                <Link to={'/'}><BackButton /></Link>
                            </div>
                            <div onClick={context.openModal} className={styles.buttonsAdd}>
                                <i className="fas fa-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                    )}
                </AppContext.Consumer>
        )
    }
};


export default MyPantry;