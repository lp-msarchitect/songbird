import React from 'react';

const Question = (props) => {
    const { answer, isRight } = props
    return (
        <div>
            Name: {isRight ? answer.name : ''}
            <img src={isRight ? answer.image : ''} alt="" />
            Question: {answer.audio}
        </div>
    );
};

export default Question;