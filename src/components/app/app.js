import React from 'react';
import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import Description from '../description/description';

function App() {
  return (
    <div>
      <Header />
      <Question />
      <Answers />
      <Description />
    </div>
  );
}

export default App;
