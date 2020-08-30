import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    const { levelNumber, score } = props;

    const HeaderContainer = styled.header`
        display: flex;
        flex-wrap: wrap;
    `;

    const HalfFlex = styled.div`
        flex-basis: 50%;
    `;



    return (
        <HeaderContainer>
            <HalfFlex>
                Logo
            </HalfFlex>
            <HalfFlex>
                Score: {score}
            </HalfFlex>
            <div>
                Current level: {levelNumber + 1}
            </div>
        </HeaderContainer>
    );
}

export default Header;