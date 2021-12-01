import React from "react";

import styles from './styles.module.scss';

interface IActions {
    title?: string;
}

const Actions = ({ title }: IActions) => (
    <div className={styles["actions_container"]}>
        je suis le container des actions
    </div>
)

export default Actions