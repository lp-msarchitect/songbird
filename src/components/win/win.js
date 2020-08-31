import React from 'react';
import styled from 'styled-components';

const WinContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #999;
    font-size: 2rem;
    border: solid 1px white;
    padding: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.25rem;
  color: var(--textcolor);
  width: 100%;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 1px solid white;
  background-color: #999;
  cursor:pointer;
`;

const Modal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(99, 99, 99, 0.75);
`;

const Win = ({ clickHandler, score }) => {
    return (
        <Modal>
        <WinContainer>
            <div>
                Игра окончена. Вы набрали {score} очков!
            </div>
            <Button onClick={clickHandler}>Начать заново</Button>
        </WinContainer>
        </Modal>
    );
};

export default Win;