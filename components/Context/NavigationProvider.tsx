import React, { createContext, useState } from "react";

export const NavigationContext = createContext({
  step: 0, // étape du jeu
  setStep: (number: number) => { }, // changement d'étape du jeu

  choices: [],
  setChoices: (choice: string[]) => { },

  userName: "", // nom du joueur
  setUserName: (name: string) => { } // changement de nom du joueur

});

const NavigationProvider = (props: any) => {
  const [isStepState, setIsStepState] = useState<number>(0);
  const [isChoices, setIsChoices] = useState<string[]>([]);
  const [isUserName, setIsUserName] = useState<string>("");

  return (
    <NavigationContext.Provider value={{
      step: isStepState,
      setStep: (number: number) => setIsStepState(number),

      choices: isChoices,
      setChoices: (choice: string[]) => setIsChoices(choice),

      userName: isUserName,
      setUserName: (name: string) => setIsUserName(name),

    }}>
        {props.children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider;