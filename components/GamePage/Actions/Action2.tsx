import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";

import styles from './styles.module.scss';

interface IAction2 {
    handleChoice: any;
}

const Action2 = ({ handleChoice }: IAction2) => {
    const { step, setTimer } = useContext(NavigationContext);
    const [count, setCount] = useState<number>(10) // countDown, par défaut à 5
    const [randomResult, setRandomResult] = useState<number>(0) // Choisit dès le début de manière random le serum si le joueur repond pas
    const [serumArray, setSerumArray] = useState([
        choicesData[step].firstChoice,
        choicesData[step].secondChoice
    ]) //Array pour le random


    // Choisir un nombre entre 0 et 2 (exclu) = donc ça donne soit 0 ou 1
    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Avoir dès le début le serum par défaut, soit celui à l'index 0 ou 1 du tableau
    useEffect(() => {
        setRandomResult(getRandomInt(0, 2))
    }, [])


    useEffect(() => {
        let timer: any = null;

        if (count > 0) {
            timer = setTimeout(() => {
                setCount(count - 1)
                setTimer(count - 1)
            }, 1000)
        } else if (count >= 0) {
            //Si il n'a pas répondu, serum random
            handleChoice(choicesData[step].firstChoice)
        }

        return () => {
            clearTimeout(timer)
        };
    }, [count])

    return (
        <div className={styles.action2}>
            <button onClick={() => handleChoice(choicesData[step].firstChoice)}>
                <img src={choicesData[step].firstChoice.img} />
            </button>
            <button onClick={() => handleChoice(choicesData[step].secondChoice)}>
                <img src={choicesData[step].secondChoice.img} />
            </button>
        </div>
    )
}

export default Action2