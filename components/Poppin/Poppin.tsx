import React from "react";
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
                                        <a>Quitter la partie &gt;</a>
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