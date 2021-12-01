import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";

import styles from './styles.module.scss';

interface ISeeds { }

const Seeds = ({ }: ISeeds) => {
    const { choices } = useContext(NavigationContext);


    return (
        <div className={styles["seeds_container"]}>
            je suis le container des Seeds

            {choices.map((i:number, idx:number) => <div key={idx}>je suis la seed combinée de l'étape {idx + 1}, avec le choix {i}</div>)}

        </div>
    )
}

export default Seeds