import React from 'react';
import styled from 'styled-components';
import LevelList from '../levelsList/leveList'

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
                <img src={process.env.PUBLIC_URL + '/Logo.png'} />
            </HalfFlex>
            <HalfFlex>
                Score: {score}
            </HalfFlex>
            <LevelList levelNumber={levelNumber} />
        </HeaderContainer>
    );
}

export default Header;