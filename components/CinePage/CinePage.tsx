import React, { useRef, useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import { NavigationContext } from "@components/Context/NavigationProvider";

import styles from './styles.module.scss';

const CinePage = () => {
    const { mutedGlobalVolume, soundGlobalVolume } = useContext(NavigationContext);
    const router = useRouter()

    useEffect(() => {
        const vid:any = document.getElementById("video")
        vid.volume = soundGlobalVolume
    }, [soundGlobalVolume])

    return (
        <div className={styles["cine_container"]}>
            <video id="video" muted={!!mutedGlobalVolume ? true : false} autoPlay onEnded={() => router.push('/game')}>
                <source src="/assets/videos/cinematik.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default CinePage