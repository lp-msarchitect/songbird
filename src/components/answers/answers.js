import React, { useState, useEffect } from 'react';
import AnswersItem from '../answers-item/answers-item';
import { waitForDomChange } from '@testing-library/react';
import styled from 'styled-components';

const List = styled.ul`
        margin: 0;
        padding-left: 0;
        list-style: none;
        font-size: 1.5rem;
        border-radius: 5px;
        border: 1px solid white;
        background-color: #999;
`;

const ListItem = styled.li`
    padding: 0.5rem 0.7rem;
    padding-left: 1rem;
    border-bottom: 1px solid white;
    cursor: pointer;
    :last-child{
        border-bottom:0;
    }
`;

const Answers = (props) => {
    const { answers, clicked, onChoose, rightId } = props;


    const answersItems = answers.map(item => {

        let clickedClassName = 'clicked-item';

        if (clicked.includes(item.id)) {
            clickedClassName = item.id === rightId ? ' right' : ' wrong';
        }

        return (<ListItem key={item.id} className={clickedClassName} >
            <AnswersItem name={item.name} handlerClick={() => {
                onChoose(item.id);
            }} />
        </ListItem>)
    })

    return (
        <List>
            {answersItems}
        </List>
    );
};

export default Answers;