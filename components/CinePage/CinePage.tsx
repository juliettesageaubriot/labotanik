import React from "react";
import { useRouter } from 'next/router'

import styles from './styles.module.scss';

const CinePage = () => {
    const router = useRouter()

    return (
        <div className={styles["cine_container"]}>
            <video autoPlay onEnded={() => router.push('/game')}>
                <source src="/assets/videos/cinematik.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default CinePage