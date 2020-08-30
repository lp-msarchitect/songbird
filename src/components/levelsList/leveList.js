import React from 'react';
import './levelList.css'

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
        const className = levelNumber === i ? 'current' : '';
        return <li key={i} className={className}>{item}</li>
    });

    return (
        <ul>
            {content}
        </ul>
    );
};

export default LevelList;