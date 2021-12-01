import React, { useContext } from "react";
import { NavigationContext } from "@components/Test/NavigationProvider";
import Seeds from "@components/Seeds/Seeds";
import Actions from "@components/Actions/Actions";
import Results from "@components/Results/Results";

import styles from './styles.module.scss';

const GamePage = () => {
    const { step, onChangeStep } = useContext(NavigationContext);

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