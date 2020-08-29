import React, { useState } from 'react';
import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import Description from '../description/description';
import birdsData from '../../data/birdsData';
import { rndNumber } from '../../utils';


function App() {

  const [levelState, setLevelState] = useState({
    currentLvl: 0,
    isRight: false,
    rightIndex: rndNumber(0, 5)
  });

  const options = (birdsData[levelState.currentLvl]);
  const answer = options[levelState.rightIndex];
  console.log('Right answer is ' + answer.name);
  const rightAnswerId = answer.id;


  const chooseAnswer = (id) => {
    if (rightAnswerId === id) {
      setLevelState(state => {
        return { ...state, isRight: true }
      })
    }
  }

  const moveToNext = () => {
    setLevelState(state => {
      return {
        currentLvl: state.currentLvl + 1,
        isRight: false,
        rightIndex: rndNumber(0, 5)
      }
    })
  }

  return (
    <>
      <Header levelNumber={levelState.currentLvl} />
      <Question
        answer={answer}
        isRight={levelState.isRight}
      />
      <Answers
        answers={options}
        onChoose={chooseAnswer}
        rightId={rightAnswerId}
      />
      <Description />
      <button
        disabled={!levelState.isRight}
        onClick={moveToNext}
      >Next Level</button>
    </>
  );
}

export default App;
