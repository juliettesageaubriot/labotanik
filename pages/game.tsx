import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import HeadTag from "@components/HeadTag/HeadTag";
import GamePage from "@components/GamePage/GamePage";

const Game = () => {
    const { step, setStep } = useContext(NavigationContext);

    console.log("------ step ------", step)

    return (
        <>
            <HeadTag title="LaBotaNik' - Jeu" />
            <GamePage />
        </>
    )
}

export default Game