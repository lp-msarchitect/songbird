import React, { useState } from 'react';
import './ansers-item.css';

const AnswersItem = (props) => {
    const { name, handlerClick, } = props;

    return (
        <span onClick={(e) => {
            handlerClick();
        }}>
            {name}
        </span>
    );
};

export default AnswersItem;