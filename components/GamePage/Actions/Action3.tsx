import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import { choicesData } from "@data/choicesData";
import ReactSlider from 'react-slider';
import styles from './styles.module.scss';

interface IAction3 {
    handleChoice: any;
}

const Action3 = ({ handleChoice }: IAction3) => {
    const { step } = useContext(NavigationContext);
    // const [sliderValue, setSliderValue] = useState<number>(5)
    // const [firstChoicePercent, setFirstChoicePercent] = useState<number>(50)
    // const [secondChoicePercent, setSecondChoicePercent] = useState<number>(50)
    // const [resultSlider, setResultSlider] = useState<number>() // Pour choisir le bon serum
    // const [serumArray, setSerumArray] = useState([
    //     choicesData[step].firstChoice,
    //     choicesData[step].secondChoice,
    //     choicesData[step].thirdChoice,
    //     choicesData[step].fourChoice
    // ]) //Array pour les choix

    // const isOnChangeSlider = (e: any) => {
    //     let sliderValuePercent: number = parseFloat(e.target.value) * 10;
    //     setSliderValue(parseFloat(e.target.value))
    //     setFirstChoicePercent(sliderValuePercent)
    //     setSecondChoicePercent(100 - sliderValuePercent)
    // }

    // useEffect(() => {
    //     // pas de switch case car on ne peut pas mettre des > || < :(
    //     if (firstChoicePercent === 100) {
    //         //console.log('100')
    //         setResultSlider(0)
    //     } else if (firstChoicePercent >= 50) {
    //         //console.log('superieur ou égal à 50')
    //         setResultSlider(1)
    //     } else if (firstChoicePercent < 50 && firstChoicePercent !== 0) {
    //         //console.log('inférieur à 50')
    //         setResultSlider(2)
    //     } else if (firstChoicePercent === 0) {
    //         //console.log("égal à 0")
    //         setResultSlider(3)
    //     }
    // }, [firstChoicePercent])


    const [scaleLeft, setScaleLeft] = useState(1);
    const [scaleRight, setScaleRight] = useState(1);

    const handleGauge = (value:number) => {
        switch (value) {
            case 0:
                setScaleLeft(.8)
                setScaleRight(1.2)
                break;
            case 1:
                setScaleLeft(.9)
                setScaleRight(1.1)
                break;
            case 2:
                setScaleLeft(1)
                setScaleRight(1)
                break;
            case 3:
                setScaleLeft(1.1)
                setScaleRight(.9)
                break;
            case 4:
                setScaleLeft(1.2)
                setScaleRight(.8)
                break;
            default:
                setScaleLeft(1)
                setScaleRight(1)
        }
    }

    return (
        <>
            {/* <div className={styles.action3}>
            <div className={`${styles['slider-container']}`}>
                <ReactSlider
                    className={styles.slider}
                    min={1}
                    max={5}
                    marks
                    markClassName={styles.marks}
                    defaultValue={3}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                />

                <button onClick={() => handleChoice(choicesData[step].firstChoice)}>Je valide cette solution</button>

                <input onChange={(e: any) => isOnChangeSlider(e)} type="range" min="0" max="10" step="1" value={sliderValue} className={`${styles['slider-input']}`} id="sliderInput" />
            </div>
            <button onClick={() => handleChoice(serumArray[resultSlider])}>{serumArray[resultSlider]?.title}</button> */}

            <div className={styles.action3}>
                <img src={choicesData[step].firstChoice.img} style={{transform: `scale(${scaleLeft})`}} />
                <div className={styles.gauge}>
                    <ReactSlider
                        className={styles.slider}
                        min={0}
                        max={4}
                        marks
                        markClassName={styles.marks}
                        defaultValue={2}
                        thumbClassName={styles.thumb}
                        trackClassName={styles.track}
                        onChange={(e) => handleGauge(e)}
                    />
                    <button onClick={() => handleChoice(choicesData[step].firstChoice)}>Je valide cette solution</button>
                </div>
                <img src={choicesData[step].secondChoice.img} style={{transform: `scale(${scaleRight})`}} />
            </div>
            {/* </div> */}
        </>
    )
}

export default Action3