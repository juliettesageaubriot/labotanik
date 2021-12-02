import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";

import styles from './styles.module.scss';

interface IAction1 {
    handleChoice: any;
}

const Action1 = ({ handleChoice }: IAction1) => {
    const { step } = useContext(NavigationContext);

    return (
        <div className={styles.action1}>
            <button onClick={() => handleChoice(choicesData[step].firstChoice)}>
                <img src={choicesData[step].firstChoice.img} />
            </button>
            <button onClick={() => handleChoice(choicesData[step].secondChoice)}>
                <img src={choicesData[step].secondChoice.img} />
            </button>
        </div>
    )
}

export default Action1