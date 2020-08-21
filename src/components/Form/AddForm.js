import React from 'react';
import styles from './AddForm.module.scss'
import Button from "../Button/Button";
import BackButton from "../Button/BackButton";
import AppContext from "../../context";

const units = {
    kg: "kg",
    g: "g",
    ml: "ml",
    l: "l",
    pc: "pc"
};
class AddForm extends React.Component {
    state = {
        name: '',
        quantity: '1',
        unit: units.g,
        limit: 3,
        toBuy: 0
    };

    toBuy = () => {
        const left = this.state.limit - this.state.quantity;
        this.setState({
            toBuy: left
        })
    };
    handleInputChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       });

    };
    handleSelectChange = e => {
        console.log(e.target.value);
        this.setState({
            unit: e.target.value
        });
    };

    ResetForms = () => {
        this.setState({
            name: '',
            quantity: '',
            unit: '',
        })
    };

    render() {
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                        <form
                            autoComplete="off"
                            className ={styles.addForm}
                            >
                            <label htmlFor={this.state.name}>Product name:</label>
                            <input
                            name = "name"
                            value = {this.state.name}
                            onChange = {this.handleInputChange}
                            placeholder="e.g. Bread"
                            className={styles.addFormInput}
                            onSubmit = {(e) => {
                                context.addItem(e, this.state);
                             }}
                            />

                            <label>Quantity:</label>
                            <input
                            placeholder = " 2, 3... "
                            name = "quantity"
                            value = {this.state.quantity}
                            onChange = {this.handleInputChange}
                            className={styles.addFormInput}
                            />
                            <label>Limit:</label>
                            <input
                                placeholder=" 5, 6..."
                                name = "limit"
                                value = {this.state.limit}
                                onChange = {this.handleInputChange}
                                className={styles.addFormInput}
                            />

                            <label>Unit:</label>
                            <select value={this.state.unit} className={styles.select} onChange={this.handleSelectChange}>
                                <option value={units.g}>grams</option>
                                <option value={units.kg}>kilograms</option>
                                <option value={units.ml}>milliliters</option>
                                <option value={units.l}>liters</option>
                                <option value={units.pc}>apiece </option>
                            </select>
                            <Button onClick={(e) => {
                                context.addItem(e, this.state)
                            }}>
                                ADD PRODUCT
                            </Button>
                        </form>
                        <BackButton onClick={context.closeModal}/>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
};

export default AddForm;