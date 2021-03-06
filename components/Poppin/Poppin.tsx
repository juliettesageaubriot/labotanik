import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { sounds } from "@data/sounds";

import Link from 'next/link';

import styles from './styles.module.scss'

interface IPoppin {
    icon: boolean,
    textAlign: "center" | "left" | "right",
    content: string,
    number: number,
    size: string,
    end: boolean
}

const Poppin = ({ icon, textAlign, content, number, size, end }: IPoppin) => {
    const { resetGame } = useContext(NavigationContext);


    const resetGameOnClick = () => {
        resetGame
        sounds.map((sound: any, i: number) => {
            sound.play = false
        })
    }

    return (
        <div className={styles['poppin_container']}>
            <div className={styles['poppin__inner']}>
                <div className={styles['poppin-wrapper']}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.over}`}>
                            <div className={`${styles.title}`}>
                                <h2>
                                    {/* <span className={styles.opacity}>/!\ error 679 /!\ </span> */}
                                    <span>/!\ error {number} /!\ </span>
                                    {/* <span className={styles.opacity}>/!\ error 679 /!\ </span> */}
                                </h2>
                            </div>
                            <div className={`${styles.content} ${styles[textAlign]} ${styles[size]}`}>
                                <p dangerouslySetInnerHTML={{ __html: content }}></p>
                                {!!icon && <div className={styles.icon}>¯\_(ツ)_/¯</div>}
                                {!!end && <div className={styles.end}>

                                    <Link href="/">
                                        <a onClick={resetGameOnClick}>Quitter la partie &gt;</a>
                                    </Link>

                                </div>}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poppin;