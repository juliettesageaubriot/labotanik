import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import HeadTag from "@components/HeadTag/HeadTag";
import GamePage from "@components/GamePage/GamePage";
import Layout from "@components/Layout/Layout";

const Game = () => {
    const { step, setStep } = useContext(NavigationContext);

    console.log("------ step ------", step)

    return (
        <Layout page="game">
            <HeadTag title="LaBotaNik' - Jeu" />
            <GamePage />
        </Layout>
    )
}

export default Game