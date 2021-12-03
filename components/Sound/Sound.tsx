import React, { useContext, useRef, useState, useEffect } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";

import ReactHowler from 'react-howler'

interface ISound {
    soundUrl: any,
    isPlaying: boolean,
    isLooping: boolean,
    mute: boolean,
    volume?: number
    delay?: boolean
}



const Sound = ({ soundUrl, isPlaying, isLooping, mute, volume, delay }: ISound) => {
    const { mutedGlobalVolume, soundGlobalVolume } = useContext(NavigationContext);
    const soundRef = useRef()

    const [playSound, setPlaySound] = useState<boolean>(false)

    // useEffect(() => {
    //     if (delay === true) {
    //         setTimeout(function(){
    //             setPlaySound(isPlaying)
    //        }, 1000);
    //     } else {
    //         setPlaySound(isPlaying)
    //     }
    // }, [delay])

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