import React from 'react';

const Win = ({ clickHandler }) => {
    return (
        <>
            <div>
                You are winner!
        </div>
            <button onClick={clickHandler}>Restart</button>
        </>
    );
};

export default Win;