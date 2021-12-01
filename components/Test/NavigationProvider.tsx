import React, { createContext, useState } from "react";

export const NavigationContext = createContext({
  step: 0, // étape du jeu
  onChangeStep: (number: number) => { }, // changement d'étape du jeu

  userName: "", // nom du joueur
  setUserName: (name: string) => { } // changement de nom du joueur

});

const NavigationProvider = (props: any) => {
  const [isStepState, setIsStepState] = useState<number>(0);
  const [isUserName, setIsUserName] = useState<string>("");

  return (
    <NavigationContext.Provider value={{
      step: isStepState,
      onChangeStep: (number: number) => setIsStepState(number),

      userName: isUserName,
      setUserName: (name: string) => setIsUserName(name)

    }}>
      {props.children}
    </NavigationContext.Provider>
  )
}


export default NavigationProvider;