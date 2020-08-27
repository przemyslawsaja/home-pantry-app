import React, {useState} from 'react';
import styles from './AddForm.module.scss'
import Button from "../Button/Button";
import BackButton from "../Button/BackButton";

const units = {
    kg: "kg",
    g: "g",
    ml: "ml",
    l: "l",
    pc: "pc"
};

const AddForm = ({toggleModal,addItem}) => {
    const [product, setProduct] = useState({
        name: '',
        quantity: 1,
        unit: units.g,
        limit: 3,
    })

    const handleInputChange = (e) => {
        e.preventDefault();
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const handleSelectChange = e => {
        setProduct({
            ...product,
            unit: e.target.value
        });
    };

        return (
                    <div className={styles.wrapper}>
                        <form autoComplete="off" className ={styles.addForm} >
                            <label htmlFor={product.name}>Product name:</label>
                            <input
                                name = "name"
                                value = {product.name}
                                onChange = {(e) => handleInputChange(e)}
                                placeholder="e.g. Bread"
                                className={styles.addFormInput}

                            />

                            <label>Quantity:</label>
                            <input
                            placeholder = " 2, 3... "
                            name = "quantity"
                            value = {product.quantity}
                            onChange = {(e) => handleInputChange(e)}
                            className={styles.addFormInput}
                            />
                            <label>Limit:</label>
                            <input
                                placeholder=" 5, 6..."
                                name = "limit"
                                value = {product.limit}
                                onChange = {e => handleInputChange(e)}
                                className={styles.addFormInput}
                            />

                            <label>Unit:</label>
                            <select value={product.unit} className={styles.select} onChange={handleSelectChange}>
                                <option value={units.g}>grams</option>
                                <option value={units.kg}>kilograms</option>
                                <option value={units.ml}>milliliters</option>
                                <option value={units.l}>liters</option>
                                <option value={units.pc}>apiece </option>
                            </select>
                            <Button type='button' onClick={(e) => addItem(e,product)}>
                                ADD PRODUCT
                            </Button>
                        </form>
                        <BackButton onClick={toggleModal}/>
                    </div>
        );
};

export default AddForm;