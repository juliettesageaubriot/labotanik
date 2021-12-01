import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";

import styles from './styles.module.scss';

interface IAction1 {
    handleChoice:any;
}

const Action1 = ({ handleChoice }: IAction1) => {
    const { step } = useContext(NavigationContext);

    return (
        <div className={styles.action1}>
            Action1
            <button onClick={() => handleChoice(choicesData[step].firstChoice)}>{choicesData[step].firstChoice.title}</button>
            <button onClick={() => handleChoice(choicesData[step].secondChoice)}>{choicesData[step].secondChoice.title}</button>
        </div>
    )
}

export default Action1