import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";

import styles from './styles.module.scss';

interface ISeeds { }

const Seeds = ({ }: ISeeds) => {
    const { choices, state } = useContext(NavigationContext);


    return (
        <div className={`${styles["seeds_container"]} ${"RESULT" !== state ? styles.disabled : ''}`}>
            je suis le container des Seeds

            {choices.map((i:any, idx:number) => <div key={idx}>je suis la seed combinée de l'étape {idx}, avec le choix {i.title}</div>)}

        </div>
    )
}

export default Seeds