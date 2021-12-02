import React, { useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import lottie from "lottie-web";

import { NavigationContext } from "@components/Context/NavigationProvider";
import { animations } from "@data/animations";

import styles from './styles.module.scss';

interface IResults { }

const Results = ({ }: IResults) => {
    const router = useRouter()

    const { step, setStep, state, setState, animationsRef, setAnimationsRef } = useContext(NavigationContext);

    const handleNextStep = () => {
        3 > step ? setStep(step + 1) : router.push('/end')
        setState("RULE")
    }

    // set up animations once
    useEffect(() => {
        if (0 === animationsRef.length) {
            let animArr: any[] = []
            animations.map((anim) => {
                let lottieanim = lottie.loadAnimation({
                    container: document.getElementById(anim.id),
                    renderer: "svg",
                    loop: anim.loop,
                    autoplay: anim.autoplay,
                    path: anim.path,
                    initialSegment: "plants" == anim.id && [0, 1],
                })
                animArr.push(lottieanim)
            })
            setAnimationsRef(animArr)
        }
    })

    return (
        <div className={`${styles["results_container"]} ${"RESULT" !== state ? styles.disabled : ''}`}>

            {"RESULT" === state &&
                <div>
                    <p>ici le resultat du choix du step {step}</p>
                    <button onClick={() => handleNextStep()}>{3 === step ? "finir le jeu" : "passez à l'étape suivante"}</button>
                </div>
            }

            <img className={styles.base} src="/assets/imgs/test-illu.svg" alt="test" />
            {animations.map((anim, idx) => <div key={idx} id={anim.id} className={styles['lottie-anim']} />)}

        </div>
    )
}

export default Results