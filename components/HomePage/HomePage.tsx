import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import Link from 'next/link';
import { sounds } from "@data/sounds";

import styles from './styles.module.scss';

const HomePage = () => {
    const { userName, setUserName, resetGame } = useContext(NavigationContext);
    // const { step, setStep, choices, setChoices, state, setState, animationsRef, timer, soundsRef, setSoundsRef, setEndGame, resetGame } = useContext(NavigationContext);


    useEffect(() => console.log(userName), [userName])

    // console.log(step, choices, userName, state, animationsRef, timer, soundsRef)

    useEffect(() => {
        resetGame
        sounds.map((sound: any, i: number) => {
            sound.play = false
        })
    }, [])

    return (
        <div className={styles["home_container"]}>
            <div className={styles["home__inner"]}>

                <div className={styles["home-center"]}>
                    <div className={styles["img-wrapper"]}>
                        <img src="/assets/img/labotanik_logo.svg" alt="labotanik' logo" />
                    </div>
                    <div className={styles["center-wrapper"]}>
                        <div className={styles["center_inner"]}>
                            <div className={styles["input-wrapper"]}>
                                <span className={`${styles['esthetic-box']}`}></span>
                                <input
                                    type="text"
                                    value={userName}
                                    placeholder="Saisis ton prénom |"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className={`${styles['link-wrapper']} ${"" === userName ? styles.disabled : ''}`}>
                                <Link href="/cinematik">
                                    <a className={`${styles['link-content']}`} onClick={resetGame}>Démarrer l'expérience &gt; </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles['home__under']}`}>
                <img className={`${styles.symbol} ${styles['symbol-fiole-1']}`} src="/assets/img/fiole-1.svg" alt="fiole 1" />
                <img className={`${styles.symbol} ${styles['symbol-fiole-2']}`} src="/assets/img/fiole-2.svg" alt="fiole 2" />
                <img className={`${styles.symbol} ${styles['symbol-fiole-3']}`} src="/assets/img/fiole-3.svg" alt="fiole 3" />
                <img className={`${styles.symbol} ${styles['symbol-fiole-4']}`} src="/assets/img/fiole-4.svg" alt="fiole 4" />

                <img className={`${styles.symbol} ${styles['symbol-toxic']}`} src="/assets/img/toxic.svg" alt="toxic symbol" />
                <img className={`${styles.symbol} ${styles['symbol-nucleaire']}`} src="/assets/img/nucleaire.svg" alt="nucleaire symbol" />

            </div>
        </div>
    )
}

export default HomePage