import React, { useState, useContext, useEffect } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";
import { sounds } from "@data/sounds";

import Sound from "@components/Sound/Sound"

import Action1 from "./Action1";
import Action2 from "./Action2";
import Action3 from "./Action3";
import Action4 from "./Action4";

import styles from './styles.module.scss';

interface IActions { }

const Actions = ({ }: IActions) => {
    const { step, setStep, choices, setChoices, state, setState, animationsRef, timer, soundsRef, setSoundsRef } = useContext(NavigationContext);

    const [nameStep, setNameStep] = useState<string>('')


    useEffect(() => {
        if (0 === soundsRef.length) {
            let soundsArr: any[] = []
            sounds.map((sound) => {
                soundsArr.push(sound)
            })
            setSoundsRef(soundsArr)
        }
    })


    const handleChoice = (val: any) => {
        let newArr = [...choices]
        newArr.push(val)
        setChoices(newArr)

        // console.log(val)

        val.triggerAnims.map((a: string) => {
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
                    animToPlay3.playSegments([126, 275], false);
                    break;
                case "plants-4":
                    let animToPlay4 = animationsRef.find((i) => i.fileName === "plants")
                    console.log("play plants 4")
                    animToPlay4.playSegments([276, 325], false);
                    break;
                default:
                    let animToPlay = animationsRef.find((i) => i.fileName === a)
                    animToPlay.play();
            }
        })


        val.triggerSounds.map((s: string) => {
            setNameStep(s)
            // console.log(soundsRef)
            // TODO : play sound (look at anim above for example)

            // sounds.map((sound:any, i:number) => {
            //     console.log(sound)
            //     if(sound.loop === false) {
            //         if(sound.play === true) {
            //             sound.play = false
            //         }
            //     }
            // })

            // console.log(s)

            // let soundToPlay = soundsRef.find((i) => i.id === s)
            // soundToPlay.play = true

            // console.log(s)
        })

        setState("RESULT")
    }

    const handleStartChoice = () => {
        setState("CHOICE")
    }

    const handleNextStep = () => {
        3 > step ? setStep(step + 1) : console.log('popin') //TODO JUJU
        setState("RULE")
    }

    // console.log(nameStep)

    return (
        <div className={`${styles["actions_container"]} ${"RULE" !== state && "CHOICE" !== state ? styles.disabled : ''}`}>

            {sounds?.map((sound: any, i: number) => {
                return (
                    sound.id === nameStep && sound.loop === false && state === "RESULT" &&
                    <Sound
                        key={`sound-play-${sound.id}`}
                        soundUrl={sound.path}
                        isPlaying={true}
                        isLooping={false}
                        mute={false}
                    />
                )
            })
            }

            {sounds?.map((sound: any, i: number) => {
                let playSound:boolean = false;
                if(sound.id === nameStep) sound.play = true
                return (
                    sound.loop === true &&
                    <Sound
                        key={`sound-play-loop-${sound.id}`}
                        soundUrl={sound.path}
                        isPlaying={sound.play}
                        isLooping={true}
                        mute={false}
                    />
                )
            })
            }

            <div className={styles.head_container}>
                <div className={styles.title}>protocole technique</div>
                <div className={styles.timer}>{1 === step ? (timer < 10 ? `0${timer}:00` : `${timer}:00`) : "00:00"}</div>
                <div className={styles.steps}>
                    étape {step + 1}/4
                    <div className={styles.pins}>
                        <span className={0 <= step ? styles.active : ''}></span>
                        <span className={1 <= step ? styles.active : ''}></span>
                        <span className={2 <= step ? styles.active : ''}></span>
                        <span className={3 <= step ? styles.active : ''}></span>
                    </div>
                </div>
            </div>

            {"RESULT" === state &&
                <div className={styles.next}>
                    <button onClick={() => handleNextStep()}>Étape suivante</button>
                </div>
            }

            {"RULE" === state &&
                <div className={styles.rule}>
                    <p dangerouslySetInnerHTML={{ __html: choicesData[step].order }}></p>
                    <button onClick={() => handleStartChoice()}>{choicesData[step].btnStart}</button>
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