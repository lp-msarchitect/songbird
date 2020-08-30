import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Description = (props) => {
    const emptyContent = <div>Послушайте плеер. Выберите птицу из списка</div>
    const { selected } = props;
    return (
        <div>
            {selected ? (
                <>
                    <div>Name: {selected.name}</div>
                    <div>Description: {selected.description}</div>
                    <img src={selected.image} alt="" />
                    <AudioPlayer
                        src={selected.audio}
                        showJumpControls={false}
                        layout="horizontal-reverse"
                        customAdditionalControls={[]}
                        autoPlayAfterSrcChange={false}
                    />
                </>
            ) : emptyContent}
        </div>
    );
};

export default Description;