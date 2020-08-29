import React from 'react';
import './ansers-item.css';

const AnswersItem = (props) => {
    const { name, handlerClick } = props;

    return (
        <span onClick={handlerClick} className="">
            {name}
        </span>
    );
};

export default AnswersItem;