import React, { useState, useContext, useEffect } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";

import styles from './styles.module.scss'

const SoundInputs = () => {
    const { mutedGlobalVolume, soundGlobalVolume, onChangeSoundGlobalVolume, setMutedGlobalVolume } = useContext(NavigationContext);

    const isOnChangeSoundInputs = (e: any) => {
        onChangeSoundGlobalVolume(parseFloat(e.target.value))

        if (parseFloat(e.target.value) === 0) {
            setMutedGlobalVolume(true)
        } else {
            setMutedGlobalVolume(false)
        }
    }

    const isMutedButton = () => {
        if (!!mutedGlobalVolume) {
            setMutedGlobalVolume(false)
        } else {
            setMutedGlobalVolume(true)
        }
    }

    return (
        <div className={`${styles['sound-slider_container']}`}>
            <div className={`${styles['sound-slider__inner']}`}>
                <div className={`${styles['slider']}`}>
                    <input onChange={(e: any) => isOnChangeSoundInputs(e)} type="range" min="0" max="1" step="0.1" value={soundGlobalVolume} className={`${styles['slider-input']}`} id="sliderInput" />
                </div>
                <div className={styles['mute-button']}>
                    <button onClick={() => isMutedButton()} disabled={soundGlobalVolume === 0 ? true : false}>Mute</button>
                </div>
            </div>
        </div>
    )
}

export default SoundInputs