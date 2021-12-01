import React from "react";
import Link from 'next/link';

import styles from './styles.module.scss';

const EndPage = () => {
    return (
        <div className={styles["end_container"]}>
            <h1>End Page</h1>
            <Link href="/">
                <a>recommencer le jeu</a>
            </Link>
        </div>
    )
}

export default EndPage