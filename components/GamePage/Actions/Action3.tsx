import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";

import styles from './styles.module.scss';

interface IAction3 {
    handleChoice: any;
}

const Action3 = ({ handleChoice }: IAction3) => {
    const { step } = useContext(NavigationContext);
    const [sliderValue, setSliderValue] = useState<number>(5)
    const [firstChoicePercent, setFirstChoicePercent] = useState<number>(50)
    const [secondChoicePercent, setSecondChoicePercent] = useState<number>(50)
    const [resultSlider, setResultSlider] = useState<number>() // Pour choisir le bon serum
    const [serumArray, setSerumArray] = useState([
        choicesData[step].firstChoice,
        choicesData[step].secondChoice,
        choicesData[step].thirdChoice,
        choicesData[step].fourChoice
    ]) //Array pour les choix

    const isOnChangeSlider = (e: any) => {
        let sliderValuePercent:number = parseFloat(e.target.value) * 10;
        setSliderValue(parseFloat(e.target.value))
        setFirstChoicePercent(sliderValuePercent)
        setSecondChoicePercent(100 - sliderValuePercent)
    }

    useEffect(() => {
        // pas de switch case car on ne peut pas mettre des > || < :(
        if(firstChoicePercent === 100) {
            console.log('100')
            setResultSlider(0)
        } else if (firstChoicePercent >= 50) {
            console.log('superieur ou égal à 50')
            setResultSlider(1)
        } else if (firstChoicePercent < 50 && firstChoicePercent !== 0) {
            console.log('inférieur à 50')
            setResultSlider(2)
        } else if (firstChoicePercent === 0) {
            console.log("égal à 0")
            setResultSlider(3)
        }
    }, [firstChoicePercent])

    return (
        <div className={styles.action3}>
            Action3
            <div className={`${styles['slider']}`}>
                <input onChange={(e: any) => isOnChangeSlider(e)} type="range" min="0" max="10" step="1" value={sliderValue} className={`${styles['slider-input']}`} id="sliderInput" />
            </div>
            <button onClick={() => handleChoice(serumArray[resultSlider])}>{serumArray[resultSlider]?.title}</button>
            {/* <button onClick={() => handleChoice(choicesData[step].firstChoice)}>{choicesData[step].firstChoice.title}</button>
            <button onClick={() => handleChoice(choicesData[step].secondChoice)}>{choicesData[step].secondChoice.title}</button> */}
        </div>
    )
}

export default Action3