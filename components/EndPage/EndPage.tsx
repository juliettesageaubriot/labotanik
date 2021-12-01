import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import Link from 'next/link';

import styles from './styles.module.scss';

const EndPage = () => {
    const { userName } = useContext(NavigationContext);

    return (
        <div className={styles["end_container"]}>
            <h1>Ah bah bravo {userName}, tu as accélérer la fin du monde et détruit l'humanité !</h1>
            <Link href="/">
                <a>recommencer le jeu</a>
            </Link>
        </div>
    )
}

export default EndPage