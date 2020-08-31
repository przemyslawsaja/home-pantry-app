import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import styles from './AddForm.module.scss'
import Button from "../Button/Button";
import BackButton from "../Button/BackButton";

const units = [
    "pc",
    "kg",
    "g",
    "ml",
    "l"
]

const AddForm = ({toggleModal,addItem}) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        addItem(data);
    }
        return (
                    <div className={styles.wrapper}>
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className ={styles.addForm}>
                            <label className={styles.addFormLabel}>Product name</label>
                            {errors.name && (<p className={styles.addFormError}>invalid product name.</p>)}
                            <input
                                className={styles.addFormInput}
                                name="name"
                                placeholder="Eggs"
                                ref={register({
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />

                            <label className={styles.addFormLabel}>Quantity</label>
                            {errors.quantity && (<p className={styles.addFormError}>invalid quantity value.</p>)}

                            <input
                                name="quantity"
                                type="number"
                                placeholder="7"
                                ref={register({ required: true, min: 0 })}
                                className={styles.addFormInput}
                            />

                            <label className={styles.addFormLabel}>Limit</label>
                            {errors.limit && (<p className={styles.addFormError}>invalid limit value.</p>)}
                            <input
                                name="limit"
                                type="number"
                                placeholder="12"
                                ref={register({ required: true, min: 0 })}
                                className={styles.addFormInput}
                            />
                            <select className={styles.addFormSelect} name="unit" ref={register({ required: true })}>
                                {units.map( unit => {
                                    return(
                                        <option key={unit} value={unit}>{unit}</option>
                                    )
                                })}
                            </select>
                            <Button type="submit"> Add product</Button>
                        </form>
                        <BackButton onClick={toggleModal}/>
                    </div>
        );
};

export default AddForm;

/*
 <div className={styles.wrapper}>
                        <form onSubmit={handleSubmit} autoComplete="off" className ={styles.addForm} >
                            <label htmlFor={product.name}>Product name:</label>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input
                                ref={register({
                                    required: true
                                })}

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
                            <Button type='submit' onClick={(e) => addItem(e,product)}>
                                ADD PRODUCT
                            </Button>
                        </form>
                        <BackButton onClick={toggleModal}/>
                    </div>
 */