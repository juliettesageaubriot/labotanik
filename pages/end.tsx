import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import HeadTag from "@components/HeadTag/HeadTag";
import Link from 'next/link';

const End = () => {
    const { step, onChangeStep } = useContext(NavigationContext);

    console.log("------ step ------", step)

    return (
        <>
            <HeadTag title="LaBotaNik' - Fin" />
            <h1>Hello world - End Page</h1>
            <Link href="/">
                <a>recommencer le jeu</a>
            </Link>
        </>
    )
}

export default End