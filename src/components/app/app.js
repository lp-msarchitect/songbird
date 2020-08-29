import React, { useState } from 'react';
import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import Description from '../description/description';
import birdsData from '../../data/birdsData';
import { rndNumber } from '../../utils';


function App() {

  const [currentLvl, setCurrentLvl] = useState(0);

  const birds = birdsData[currentLvl];

  return (
    <>
      <Header levelNumber={currentLvl} />
      <Question />
      <Answers
        answers={birds}
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
