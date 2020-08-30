import React, { useState, useEffect } from 'react';
import AnswersItem from '../answers-item/answers-item';
import { waitForDomChange } from '@testing-library/react';

const Answers = (props) => {
    const { answers, onChoose, rightId } = props;

    const [clickedItems, setClickedItems] = useState([]);
    useEffect(() => {
        setClickedItems([]);
    }, [answers])

    const answersItems = answers.map(item => {

        let clickedClassName = 'clicked-item';

        if (clickedItems.includes(item)) {
            clickedClassName = item.id === rightId ? ' right' : ' wrong';
        }

        console.log(clickedItems);
        return (<li key={item.id} className={clickedClassName} >
            <AnswersItem name={item.name} handlerClick={() => {
                setClickedItems(list => {
                    if (!list.includes(item)) {
                        return [...list, item]
                    }
                    return [...list]
                })
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