import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";

import styles from './styles.module.scss';

interface IActions {}

const Actions = ({  }: IActions) => {
    const { step, setStep, choices, setChoices } = useContext(NavigationContext);

    const arr = [
        {
            val1: "serum 1-1",
            val2: "serum 1-2"
        },
        {
            val1: "serum 2-1",
            val2: "serum 2-2"
        },
        {
            val1: "serum 3-1",
            val2: "serum 3-2"
        },
        {
            val1: "serum 4-1",
            val2: "serum 4-2"
        },
    ]

    const handleClick = (val: string) => {
        let newArr = [...choices]
        newArr.push(val)
        console.log(newArr)
        setChoices(newArr)
    }

    return (
        <div className={styles["actions_container"]}>
            je suis le container des actions
            <br/><br/>
            current step : {step}
            <br/><br/>
            choices : {0 < choices.length && choices.map((i) => i + ', ')}
            <br/><br/>
            <button onClick={() => handleClick(arr[step].val1)}>{arr[step].val1}</button>
            <button onClick={() => handleClick(arr[step].val2)}>{arr[step].val2}</button>
            <br/><br/>
            <button onClick={() => setStep(step + 1)}>next step</button>
        </div>
    )
}

export default Actions