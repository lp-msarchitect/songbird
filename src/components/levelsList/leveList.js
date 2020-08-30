import React from 'react';
import './levelList.css'
import styled from 'styled-components';

const List = styled.ul`
        padding-left: 0;
        list-style: none;
        font-size: 1.5rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-content: stretch;
        background-color: darkblue;
        border-radius: 5px;
    `;

const ListItem = styled.li`
        padding: 0.5rem 0.5rem;
        background-color: ${(props) => (props.current ? "blue" : "transparent")};
    `;

const LevelList = ({ levelNumber }) => {
    const levels = [
        'Разминка',
        'Воробьиные',
        'Лесные птицы',
        'Певчие птицы',
        'Хищные птицы',
        'Морские птицы'
    ];



    const content = levels.map((item, i) => {
        const current = levelNumber === i;
        return <ListItem key={i} current={current}>{item}</ListItem>
    });

    return (
        <List>
            {content}
        </List>
    );
};

export default LevelList;