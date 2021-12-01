import React from "react";

import styles from './styles.module.scss';

interface ISeeds {
    title?: string;
}

const Seeds = ({ title }: ISeeds) => (
    <div className={styles["seeds_container"]}>
        je suis le container des Seeds
    </div>
)

export default Seeds