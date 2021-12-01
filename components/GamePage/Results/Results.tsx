import React, { useContext } from "react";
import { useRouter } from 'next/router';

import { NavigationContext } from "@components/Context/NavigationProvider";

import styles from './styles.module.scss';

interface IResults { }

const Results = ({ }: IResults) => {
    const router = useRouter()

    const { step, setStep, state, setState } = useContext(NavigationContext);

    const handleNextStep = () => {
        3 > step ? setStep(step + 1) : router.push('/end')
        setState("RULE")
    }

    return (
        <div className={`${styles["results_container"]} ${"RESULT" !== state ? styles.disabled : ''}`}>
            je suis le container des Results

            {"RESULT" === state &&
                <div>
                    <p>ici le resultat du choix du step {step}</p>
                    <button onClick={() => handleNextStep()}>{3 === step ? "finir le jeu" : "passez à l'étape suivante"}</button>
                </div>
            }

        </div>
    )
}

export default Results