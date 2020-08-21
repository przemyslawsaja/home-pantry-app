import React from 'react';
import style from "./BackButton.module.scss";

const BackButton = ({...props}) => {
    return (
        <button className={style.backButton} {...props}>
            <i className="fas fa-chevron-circle-left"></i>
        </button>
    );
};

export default BackButton;