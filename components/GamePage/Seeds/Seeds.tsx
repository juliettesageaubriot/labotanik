import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";

import styles from './styles.module.scss';

interface ISeeds { }

const Seeds = ({ }: ISeeds) => {
    const { choices, state } = useContext(NavigationContext);


    return (
        <div className={`${styles["seeds_container"]} ${"RESULT" !== state ? styles.disabled : ''}`}>
            <div className={styles.title_container}>
                <span className={styles.title_text}>microscope</span>
                <span className={styles.title_zoom}>x600</span>
            </div>

            <div className={styles.video_container}>
                <video autoPlay loop>
                    <source src="/assets/microscope.mp4" type="video/mp4" />
                </video>
            </div>

            {/* {0 < choices.length && choices.map((i) => i.id + ', ')} */}
        </div>
    )
}

export default Seeds