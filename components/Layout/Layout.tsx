import SoundInputs from "@components/SoundInputs/SoundInputs";
import React from "react";

import styles from './styles.module.scss'

interface ILayout {
    children: any,
    page: string
}

const Layout = ({ children, page }: ILayout) => {
    return (
        <div className={`${styles['layout_container']}`}>
            <div className={`${styles['layout__inner']}`}>
                <div className={`${styles['content-wrapper']} ${styles[`${page}-content`]}`}>
                    {children}
                </div>
                <SoundInputs />
            </div>
        </div>
    )
}

export default Layout;