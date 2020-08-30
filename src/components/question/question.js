import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Question = (props) => {
    const { answer, isRight } = props
    return (
        <div>
            Name: {isRight ? answer.name : '*****'}
            <img src={isRight ? answer.image : ''} alt="" />
            <AudioPlayer
                src={answer.audio}
                showJumpControls={false}
                layout="horizontal-reverse"
                customAdditionalControls={[]}
            />
        </div>
    );
};

export default Question;