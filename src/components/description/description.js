import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';

const DescContainer = styled.div`
    font-size: 1.5rem;
    border-radius: 5px;
    border: 1px solid white;
    background-color: #999;
    height:100%;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TextContainer = styled.div`
    flex-basis: 100%;
`;

const Img = styled.img`
    flex-basis: 40%;
    border-radius: 5px;
    margin-right: 1rem;
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
`;

const Container = styled.div`
    flex-basis: 60%;
`;

const Description = (props) => {
    const emptyContent = 'Послушайте плеер. Выберите птицу из списка'
    const { selected } = props;
    return (
        <DescContainer>
            {selected ? (
                <InfoContainer>
                    <Img src={selected.image} alt="" />
                    <Container>
                        <div>{selected.name}</div>
                        <AudioPlayer
                            src={selected.audio}
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
                    </Container>
                    <TextContainer>Description: {selected.description}</TextContainer>
                </InfoContainer>
            ) : emptyContent}
        </DescContainer>
    );
};

export default Description;