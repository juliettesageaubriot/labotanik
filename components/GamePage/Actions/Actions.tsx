import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";

import Action1 from "./Action1";
import Action2 from "./Action2";
import Action3 from "./Action3";
import Action4 from "./Action4";

import styles from './styles.module.scss';

interface IActions { }

const Actions = ({ }: IActions) => {
    const { step, setStep, choices, setChoices, state, setState } = useContext(NavigationContext);

    const handleChoice = (val: any) => {
        let newArr = [...choices]
        newArr.push(val)
        setChoices(newArr)

        setState("RESULT")
    }

    const handleStartChoice = () => {
        setState("CHOICE")
    }

    return (
        <div className={`${styles["actions_container"]} ${"RULE" !== state && "CHOICE" !== state ? styles.disabled : ''}`}>
            je suis le container des actions
            <br /><br />
            current step : {step}
            <br /><br />
            choices : {0 < choices.length && choices.map((i) => i.title + ', ')}
            <br /><br />


            {"RULE" === state &&
                <div>
                    <b>{choicesData[step].order}</b>
                    <button onClick={() => handleStartChoice()}>faire mon choix</button>
                </div>
            }

            {("CHOICE" === state && 0 === step) &&
                <Action1 handleChoice={handleChoice} />
            }

            {("CHOICE" === state && 1 === step) &&
                <Action2 handleChoice={handleChoice} />
            }

            {("CHOICE" === state && 2 === step) &&
                <Action3 handleChoice={handleChoice} />
            }

            {("CHOICE" === state && 3 === step) &&
                <Action4 handleChoice={handleChoice} />
            }
        </div>
    )
}

export default Actions