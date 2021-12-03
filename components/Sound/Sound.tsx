import React, { useContext, useRef, useState, useEffect } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";

import ReactHowler from 'react-howler'

interface ISound {
    soundUrl: any,
    isPlaying: boolean,
    isLooping: boolean,
    mute: boolean,
    volume?: number
}

const Sound = ({ soundUrl, isPlaying, isLooping, mute, volume }: ISound) => {
    const { mutedGlobalVolume, soundGlobalVolume } = useContext(NavigationContext);
    const soundRef = useRef()

    return (
        <>
            <ReactHowler
                src={soundUrl}
                playing={isPlaying}
                loop={isLooping}
                mute={!!mutedGlobalVolume ? true : mute}
                volume={soundGlobalVolume}
                ref={soundRef}
            />

        </>
    )

}

export default Sound;