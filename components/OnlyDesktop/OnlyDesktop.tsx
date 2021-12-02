import React from "react";

import styles from './styles.module.scss'

const OnlyDesktop = () => {
    return (
        <div className={`${styles['onlydesktop_container']}`}>
            <div className={`${styles['onlydesktop__inner']}`}>
            </div>
        </div>
    )
}

export default OnlyDesktop;