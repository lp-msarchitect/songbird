import React, { useState } from 'react';
import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import Description from '../description/description';
import data from '../../data/birdsData';
import { rndNumber } from '../../utils';
import Win from '../win/win';
import useSound from 'use-sound';
import rightSfx from '../../assets/right.mp3';
import wrongSfx from '../../assets/wrong.mp3';
import styled from 'styled-components';


const AppContainer = styled.div`
  height: 100vh;
  max-width: 1200px;
  color: var(--textcolor);
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-gap: 1rem;
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

function App() {
  const [levelState, setLevelState] = useState({
    currentLvl: 0,
    isRight: false,
    rightIndex: rndNumber(0, 5),
    isWin: false,
  });

  const [clickedAnswers, setClickedAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [playRight] = useSound(rightSfx);
  const [playWrong] = useSound(wrongSfx);

  const options = (data[levelState.currentLvl]);

  const answers = options.map(item => {
    return {
      id: item.id,
      name: item.name,
    }
  });

  const answer = options[levelState.rightIndex];
  console.log('Right answer is ' + answer.name);
  const rightAnswerId = answer.id;


  const chooseAnswer = (id) => {
    setSelectedOption(options.find(item => item.id === id));
    if (levelState.isRight) return;
    setClickedAnswers(clicked => {
      return clicked.includes(id) ? [...clicked] : [...clicked, id];
    })
    if (rightAnswerId === id) {
      playRight();
      const newScore = score + 5 - clickedAnswers.length;
      console.log(newScore);
      setScore(newScore);
      setLevelState(state => {
        return {
          ...state,
          isRight: true
        }
      })
    } else {
      playWrong();
    }
  }

  const moveToNext = () => {
    if (levelState.currentLvl === data.length - 1) {
      setLevelState(state => {
        return {
          ...state,
          isWin: true
        }
      })
    } else {
      setClickedAnswers([]);
      setLevelState(state => {
        return {
          ...state,
          currentLvl: state.currentLvl + 1,
          isRight: false,
          rightIndex: rndNumber(0, 5)
        }
      })
    }
  }

  const restart = () => {
    setLevelState({
      currentLvl: 0,
      isRight: false,
      rightIndex: rndNumber(0, 5),
      isWin: false,
    });
    setClickedAnswers([]);
    setSelectedOption(null);
    setScore(0);
  }



  return (
    <AppContainer>
      {levelState.isWin ? (<Win clickHandler={restart} score={score} />) :
        (
          <>
            <Header
              levelNumber={levelState.currentLvl}
              score={score}
            />
            <Question
              answer={answer}
              isRight={levelState.isRight}
            />
            <Container>
              <Answers
                answers={answers}
                clicked={clickedAnswers}
                onChoose={chooseAnswer}
                rightId={rightAnswerId}
              />
              <Description
                selected={selectedOption}
              />
            </Container>
            <Button
              disabled={!levelState.isRight}
              onClick={moveToNext}
            >Next Level</Button>
          </>
        )
      }
    </AppContainer>
  );
}

export default App;
