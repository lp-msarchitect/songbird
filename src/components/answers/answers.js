import React from 'react';
import AnswersItem from '../answers-item/answers-item';

const Answers = (props) => {
    const { answers, onChoose } = props;

    const answersItems = answers.map(item => {
        return (<li key={item.id}>
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