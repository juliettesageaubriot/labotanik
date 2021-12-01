import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";

import styles from './styles.module.scss';

interface IAction3 {
    handleChoice:any;
}

const Action3 = ({ handleChoice }: IAction3) => {
    const { step } = useContext(NavigationContext);

    return (
        <div className={styles.action3}>
            Action3
            <button onClick={() => handleChoice(choicesData[step].firstChoice)}>{choicesData[step].firstChoice.title}</button>
            <button onClick={() => handleChoice(choicesData[step].secondChoice)}>{choicesData[step].secondChoice.title}</button>
        </div>
    )
}

export default Action3