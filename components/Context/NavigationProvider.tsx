import React, { createContext, useState } from "react";

export const NavigationContext = createContext({
  step: 0, // étape du jeu
  onChangeStep: (number: number) => { }, // changement d'étape du jeu

  userName: "", // nom du joueur
  setUserName: (name: string) => { }, // changement de nom du joueur

  soundGlobalVolume: 0.5, // volume global du jeu
  onChangeSoundGlobalVolume: (volume: number) => { }, // changement global volume jeu

  mutedGlobalVolume: false, // mute le sons global du jeu
  setMutedGlobalVolume: (mute: boolean) => { } // set le mute

});

const NavigationProvider = (props: any) => {
  const [isStepState, setIsStepState] = useState<number>(0);
  const [isUserName, setIsUserName] = useState<string>("");
  const [isSoundGlobalVolumeState, setIsSoundGlobalVolumeState] = useState<number>(0.5);
  const [isMutedGlobalVolume, setIsMutedGlobalVolume] = useState<boolean>(false);

  return (
    <NavigationContext.Provider value={{
      step: isStepState,
      onChangeStep: (number: number) => setIsStepState(number),

      userName: isUserName,
      setUserName: (name: string) => setIsUserName(name),

      soundGlobalVolume: isSoundGlobalVolumeState,
      onChangeSoundGlobalVolume: (volume: number) => setIsSoundGlobalVolumeState(volume),

      mutedGlobalVolume: isMutedGlobalVolume,
      setMutedGlobalVolume: (mute: boolean) => setIsMutedGlobalVolume(mute),

    }}>
      {props.children}
    </NavigationContext.Provider>
  )
}


export default NavigationProvider;