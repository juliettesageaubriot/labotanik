import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";

import styles from './styles.module.scss';

interface IAction2 {
    handleChoice:any;
}

const Action2 = ({ handleChoice }: IAction2) => {
    const { step } = useContext(NavigationContext);

    return (
        <div className={styles.action2}>
            Action2
            <button onClick={() => handleChoice(choicesData[step].firstChoice)}>{choicesData[step].firstChoice.title}</button>
            <button onClick={() => handleChoice(choicesData[step].secondChoice)}>{choicesData[step].secondChoice.title}</button>
        </div>
    )
}

export default Action2