import React, { useContext, useEffect } from "react";
import lottie from "lottie-web";

import { NavigationContext } from "@components/Context/NavigationProvider";
import { animations } from "@data/animations";

import styles from './styles.module.scss';

interface IResults { }

const Results = ({ }: IResults) => {

    const { state, animationsRef, setAnimationsRef } = useContext(NavigationContext);

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

            <div className={styles.title}>real-time simulator</div>

            <img className={styles.base} src="/assets/img/test-illu.svg" alt="test" />
            {animations.map((anim, idx) => <div key={idx} id={anim.id} className={styles['lottie-anim']} />)}

        </div>
    )
}

export default Results