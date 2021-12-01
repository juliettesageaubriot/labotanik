import React, { useContext } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import HeadTag from "@components/HeadTag/HeadTag";
import Link from 'next/link';
import Sound from "@components/Sound/Sound";

const Home = () => {
  const { step, onChangeStep } = useContext(NavigationContext);

  console.log("------ step ------", step)

  return (
    <>
      <HeadTag title="LaBotaNik'" />
      <h1>Hello world</h1>
      <Link href="/game">
        <a>commencer le jeu</a>
      </Link>
    </>
  )
}

export default Home