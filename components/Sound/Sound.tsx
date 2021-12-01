import React from "react";
import ReactHowler from 'react-howler'

interface ISound {
    soundUrl: string,
    isPlaying: boolean,
    isLooping: boolean,
    mute: boolean,
    volume: number
}

const Sound = ({ soundUrl, isPlaying, isLooping, mute, volume }: ISound) => {

    return (
        <>
            <ReactHowler
                src={soundUrl}
                playing={isPlaying}
                loop={isLooping}
                mute={mute}
                volume={1.0}
                // src='/assets/sounds/cat.wav'
                // playing={true}
            />
        </>
    )
}

export default Sound;