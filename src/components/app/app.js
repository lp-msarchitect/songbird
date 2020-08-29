import React, { useState } from 'react';
import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import Description from '../description/description';
import birdsData from '../../data/birdsData';


function App() {

  const [currentLvl, setCurrentLvl] = useState(0);

  return (
    <>
      <Header levelNumber={currentLvl} />
      <Question />
      <Answers />
      <Description />
      <button>Next Level</button>
    </>
  );
}

export default App;
