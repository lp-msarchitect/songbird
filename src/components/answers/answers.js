import React, { useState, useEffect } from 'react';
import AnswersItem from '../answers-item/answers-item';
import { waitForDomChange } from '@testing-library/react';

const Answers = (props) => {
    const { answers, clicked, onChoose, rightId } = props;


    const answersItems = answers.map(item => {

        let clickedClassName = 'clicked-item';

        if (clicked.includes(item.id)) {
            clickedClassName = item.id === rightId ? ' right' : ' wrong';
        }

        return (<li key={item.id} className={clickedClassName} >
            <AnswersItem name={item.name} handlerClick={() => {
                onChoose(item.id);
            }} />
        </li>)
    })

    return (
        <ul>
            {answersItems}
        </ul>
    );
};

export default Answers;