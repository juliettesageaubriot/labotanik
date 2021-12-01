import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import HeadTag from "@components/HeadTag/HeadTag";
// import Link from 'next/link';
import GamePage from "@components/GamePage/GamePage";

const Game = () => {
    const { step, onChangeStep } = useContext(NavigationContext);

    console.log("------ step ------", step)

    return (
        <>
            <HeadTag title="LaBotaNik' - Jeu" />
            {/* <h1>Hello world - Game Page</h1>
            <Link href="/end">
                <a>fin du jeu</a>
            </Link> */}

            <GamePage />
        </>
    )
}

export default Game