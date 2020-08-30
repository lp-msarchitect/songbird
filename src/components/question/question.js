import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';

const QuestionContainer = styled.div`
    display: flex;
    padding: 0 2rem;
    background-color: #999;
    border-radius: 5px;
    align-items: center;
`;

const Img = styled.img`
    border-radius: 5px;
    margin-right: 1rem;
    width: 300px;
    height: 300px;
    object-fit: contain;
`;

const Info = styled.div`
    flex-grow: 1;
    margin: 1rem;
`;

const Name = styled.div`
    font-size: 1.5rem;
    padding-bottom: 2rem;
`

const Question = (props) => {
    const { answer, isRight } = props
    return (
        <QuestionContainer>
            <Img src={isRight ? answer.image : process.env.PUBLIC_URL + '/default.jpg'} alt="" />
            <Info>
                <Name>{isRight ? answer.name : '*****'}</Name>
                <AudioPlayer
                    src={answer.audio}
                    autoPlayAfterSrcChange={false}
                    layout="horizontal-reverse"
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    customProgressBarSection={
                        [
                            RHAP_UI.CURRENT_TIME,
                            RHAP_UI.PROGRESS_BAR,
                            RHAP_UI.DURATION,
                            RHAP_UI.VOLUME
                        ]
                    }
                />
            </Info>
        </QuestionContainer>
    );
};

export default Question;