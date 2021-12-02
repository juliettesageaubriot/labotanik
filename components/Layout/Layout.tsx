import React from "react";
import HeadTag from "@components/HeadTag/HeadTag";
import SoundInputs from "@components/SoundInputs/SoundInputs";
import Poppin from "@components/Poppin/Poppin";

import styles from './styles.module.scss'

interface ILayout {
    children: any,
    page: string,
    titleSEO: string
}

const Layout = ({ children, page, titleSEO }: ILayout) => {
    return (
        <div className={`${styles['layout_container']}`}>
            <div className={`${styles['layout__inner']}`}>
                <HeadTag title={titleSEO} />
                <div className={`${styles['content-wrapper']} ${styles[`${page}-content`]}`}>
                    {children}
                </div>
                <SoundInputs />
            </div>

            <div className={styles['poppin-onlydesktop']}>
                <Poppin 
                content='Cette expérience est disponible sur ordinateur. '
                icon={true} 
                textAlign="center"
                />
            </div>

        </div>
    )
}

export default Layout;