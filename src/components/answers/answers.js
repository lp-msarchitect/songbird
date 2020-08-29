import React from 'react';

const Answers = (props) => {
    const { answers } = props;

    const answersItems = answers.map(item => {
        return <li key={item.id}>{item.name}</li>
    })

    return (
        <ul>
            {answersItems}
        </ul>
    );
};

export default Answers;