import React from 'react';
import styled from 'styled-components';
import LevelList from '../levelsList/leveList'

const HeaderContainer = styled.header`
        display: flex;
        flex-wrap: wrap;
    `;

const Logo = styled.div`
        flex-basis: 50%;
    `;

const Score = styled.div`
        flex-basis: 50%;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 2.5rem;
    `;

const Header = (props) => {
    const { levelNumber, score } = props;

    return (
        <HeaderContainer>
            <Logo>
                <img src={process.env.PUBLIC_URL + '/Logo.png'} />
            </Logo>
            <Score>
                <span>Score: {score}</span>
            </Score>
            <LevelList levelNumber={levelNumber} />
        </HeaderContainer>
    );
}

export default Header;