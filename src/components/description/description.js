import React from 'react';

const Description = (props) => {
    const emptyContent = <div>Послушайте плеер. Выберите птицу из списка</div>
    const { selected } = props;
    return (
        <div>
            {selected ? (
                <>
                    <div>Name: {selected.name}</div>
                    <div>Description: {selected.description}</div>
                    <img src={selected.image} alt="" />
                </>
            ) : emptyContent}
        </div>
    );
};

export default Description;