import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import Sound from "@components/Sound/Sound";
import SoundInputs from "@components/SoundInputs/SoundInputs";
import Link from 'next/link';

import styles from './styles.module.scss';

const HomePage = () => {
    const { userName, setUserName } = useContext(NavigationContext);

    useEffect(() => console.log(userName), [userName])

    return (
        <div className={styles["home_container"]}>
            <h1>LaBotaNik</h1>
            <input
                type="text"
                value={userName}
                placeholder="Inscris ton nom ici..."
                onChange={(e) => setUserName(e.target.value)}
            />

            <Link href="/game">
                <a>commencer le jeu</a>
            </Link>

            <Sound
                soundUrl="/assets/sounds/cat.wav"
                isPlaying={true}
                isLooping={false}
                mute={false}
                volume={0.5}
            />
        </div>
    )
}

export default HomePage