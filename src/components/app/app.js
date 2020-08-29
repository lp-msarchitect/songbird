import React, { useState } from 'react';
import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import Description from '../description/description';
import birdsData from '../../data/birdsData';
import { rndNumber, shuffleArr } from '../../utils';


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
        disabled
        onClick={() => {
          setLevelState((state) => {
            return { ...state, currentLvl: state.currentLvl + 1 }
          })
        }}
      >Next Level</button>
    </>
  );
}

export default App;
