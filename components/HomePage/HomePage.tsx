import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@components/Test/NavigationProvider";
import Link from 'next/link';

import styles from './styles.module.scss';

const HomePage = () => {
    const { userName, setUserName } = useContext(NavigationContext);

    useEffect(() => console.log(userName), [userName])

    return (
        <div className={styles["home_container"]}>
            <h1>LaBotaNik</h1>
            <input
                type="text"
                value={userName}
                placeholder="Inscris ton nom ici..."
                onChange={(e) => setUserName(e.target.value)}
            />

            <Link href="/game">
                <a>commencer le jeu</a>
            </Link>
        </div>
    )
}

export default HomePage