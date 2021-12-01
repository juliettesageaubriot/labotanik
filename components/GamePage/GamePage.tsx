import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import Seeds from "@components/GamePage/Seeds/Seeds";
import Actions from "@components/GamePage/Actions/Actions";
import Results from "@components/GamePage/Results/Results";

import styles from './styles.module.scss';

const GamePage = () => {
    const { step, setStep } = useContext(NavigationContext);

    console.log("------ step ------", step)

    return (
        <div className={styles["game_container"]}>
            <div className={styles.left}>
                <Seeds />
                <Actions />
            </div>
            <div className={styles.right}>
                <Results />
            </div>
        </div>
    )
}

export default GamePage