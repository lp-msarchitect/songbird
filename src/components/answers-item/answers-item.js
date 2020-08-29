import React from 'react';

const AnswersItem = (props) => {
    const { name, handlerClick } = props;

    return (
        <span onClick={handlerClick}>
            {name}
        </span>
    );
};

export default AnswersItem;