import React from 'react';

const Header = (props) => {
    const { levelNumber } = props;

    return (
        <header>
            <div>
                Logo
            </div>
            <div>
                Score: 0
            </div>
            <div>
                Current level: {levelNumber + 1}
            </div>
        </header>
    );
}

export default Header;