import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import Seeds from "@components/GamePage/Seeds/Seeds";
import Actions from "@components/GamePage/Actions/Actions";
import Results from "@components/GamePage/Results/Results";
import Poppin from "@components/Poppin/Poppin";

import styles from './styles.module.scss';

const GamePage = () => {
    const { userName, endGame } = useContext(NavigationContext);

    return (
        <div className={styles["game_container"]}>
            <div className={styles.left}>
                <Seeds />
                <Actions />
            </div>
            <div className={styles.right}>
                <Results />
            </div>
            {!!endGame &&
                <Poppin
                    content={`${userName}, il semblerait que vous ayez <span>éradicqué l’humanité</span>.</br>
                            Belle prouesse technique, mais ce n’est pas ce qu’on attend de vous... </br>
                            Par conséquent, nous sommes contraint de mettre <span>fin à votre période d’essai</span>.`}
                    icon={true}
                    textAlign="left"
                    number={679}
                    size="small"
                    end={true}
                />
            }
        </div>
    )
}

export default GamePage