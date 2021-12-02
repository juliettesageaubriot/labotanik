import React from "react";

import styles from './styles.module.scss'

interface IPoppin {
    icon: boolean,
    textAlign: "center" | "left" | "right",
    content: string
}

const Poppin = ({ icon, textAlign, content }: IPoppin) => {
    return (
        <div className={styles['poppin_container']}>
            <div className={styles['poppin__inner']}>
                <div className={styles['poppin-wrapper']}>
                    <div className={styles.content}>
                        <div className={`${styles.over}`}>
                            <div className={styles.title}>
                                <h2>
                                    {/* <span className={styles.opacity}>/!\ error 679 /!\ </span> */}
                                    <span>/!\ error 679 /!\ </span>
                                    {/* <span className={styles.opacity}>/!\ error 679 /!\ </span> */}
                                </h2>
                            </div>
                            <div className={`${styles.content} ${styles[textAlign]}`}>
                                <p dangerouslySetInnerHTML={{__html:  content }}></p>
                                {!!icon && <div className={styles.icon}>¯\_(ツ)_/¯</div>}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poppin;