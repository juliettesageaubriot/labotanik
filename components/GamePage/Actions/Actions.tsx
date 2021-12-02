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
    const { step, choices, setChoices, state, setState, animationsRef } = useContext(NavigationContext);

    const handleChoice = (val: any) => {
        let newArr = [...choices]
        newArr.push(val)
        setChoices(newArr)

        val.triggerAnims.map((a:string) => {
            switch (a) {
                case "plants-1":
                    let animToPlay1 = animationsRef.find((i) => i.fileName === "plants")
                    console.log("play plants 1")
                    animToPlay1.playSegments([25, 75], false);
                    break;
                case "plants-2":
                    let animToPlay2 = animationsRef.find((i) => i.fileName === "plants")
                    console.log("play plants 2")
                    animToPlay2.playSegments([76, 125], false);
                    break;
                case "plants-3":
                    let animToPlay3 = animationsRef.find((i) => i.fileName === "plants")
                    console.log("play plants 3")
                    animToPlay3.playSegments([126, 200], false);
                    break;
                case "plants-4":
                    let animToPlay4 = animationsRef.find((i) => i.fileName === "plants")
                    console.log("play plants 4")
                    animToPlay4.playSegments([201, 250], false);
                    break;
                default:
                    let animToPlay = animationsRef.find((i) => i.fileName === a)
                    animToPlay.play();
            }
        })

        val.triggerSounds.map((s:string) => {
            // TODO : play sound (look at anim above for example)
        })

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