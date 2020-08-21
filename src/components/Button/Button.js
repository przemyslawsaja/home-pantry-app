import React from 'react';
import style from './Button.module.scss';

const Button = ({...props}) => {
    return (
        <button className={style.button} {...props}>
        </button>
    );
};

export default Button;