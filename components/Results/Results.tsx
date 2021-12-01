import React from "react";

import styles from './styles.module.scss';

interface IResults {
    title?: string;
}

const Results = ({ title }: IResults) => (
    <div className={styles["results_container"]}>
        je suis le container des Results
    </div>
)

export default Results