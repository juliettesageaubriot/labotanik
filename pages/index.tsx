import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@components/Context/NavigationProvider";
import HeadTag from "@components/HeadTag/HeadTag";
import Link from 'next/link';

const Home = () => {
  const { userName, setUserName, step, onChangeStep } = useContext(NavigationContext);

  console.log("------ step ------", step)

  useEffect(() => console.log(userName), [userName])

  return (
    <>
      <HeadTag title="LaBotaNik'" />
      <h1>Hello world</h1>
      <input
        type="text"
        value={userName}
        placeholder="Inscris ton nom ici..."
        onChange={(e) => setUserName(e.target.value)}
      />

      <Link href="/game">
        <a>commencer le jeu</a>
      </Link>
    </>
  )
}

export default Home