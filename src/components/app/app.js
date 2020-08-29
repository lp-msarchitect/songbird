import React, { useState } from 'react';
import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import Description from '../description/description';
import birdsData from '../../data/birdsData';
import { rndNumber, shuffleArr } from '../../utils';


function App() {

  const [currentLvl, setCurrentLvl] = useState(0);

  const options = (birdsData[currentLvl]);
  const rightAnswerId = options[rndNumber(0, options.length - 1)].id;


  const chooseAnswer = (id) => {
    if (rightAnswerId === id) console.log('Right!');
    console.log(id);
  }

  return (
    <>
      <Header levelNumber={currentLvl} />
      <Question />
      <Answers
        answers={options}
        onChoose={chooseAnswer}
        rightId={rightAnswerId}
      />
      <Description />
      <button
        disabled
        onClick={() => {
          setCurrentLvl(currentLvl + 1);
        }}
      >Next Level</button>
    </>
  );
}

export default App;
