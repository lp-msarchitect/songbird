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
    rightIndex: rndNumber(0, 5),
    isWin: false,
  });

  const options = (birdsData[levelState.currentLvl]);

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
    if (levelState.isRight) return;
    if (rightAnswerId === id) {
      setLevelState(state => {
        return { ...state, isRight: true }
      })
    }
  }

  const moveToNext = () => {
    if (levelState.currentLvl === birdsData.length - 1) {
      setLevelState(state => {
        return {
          ...state,
          isWin: true
        }
      })
    } else {
      setLevelState(state => {
        return {
          currentLvl: state.currentLvl + 1,
          isRight: false,
          rightIndex: rndNumber(0, 5)
        }
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
        answers={answers}
        onChoose={chooseAnswer}
        rightId={rightAnswerId}
      />
      <Description />
      <button
        disabled={!levelState.isRight}
        onClick={moveToNext}
      >Next Level</button>
      {levelState.isWin ? (<div>You are win</div>) : null}
    </>
  );
}

export default App;
