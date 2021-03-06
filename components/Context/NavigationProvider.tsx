import React, { createContext, useState } from "react";

export const NavigationContext = createContext({
  step: 0, // étape du jeu
  setStep: (number: number) => { }, // changement d'étape du jeu

  choices: [],
  setChoices: (choice: any[]) => { },

  state: "",
  setState: (state: string) => { },

  userName: "", // nom du joueur
  setUserName: (name: string) => { }, // changement de nom du joueur

  soundGlobalVolume: 0.5, // volume global du jeu
  onChangeSoundGlobalVolume: (volume: number) => { }, // changement global volume jeu

  mutedGlobalVolume: false, // mute le sons global du jeu
  setMutedGlobalVolume: (mute: boolean) => { }, // set le mute

  animationsRef: [],
  setAnimationsRef: (animRef: any) => { },

  soundsRef: [],
  setSoundsRef: (soundsRef: any) => { },

  timer: 10,
  setTimer: (timer: number) => { },

  endGame: false,
  setEndGame: (bool: boolean) => { },

  resetGame: () => { }

});

const NavigationProvider = (props: any) => {
  const [isStepState, setIsStepState] = useState<number>(0);
  const [isChoices, setIsChoices] = useState<[]>([]);
  const [isState, setIsState] = useState<string>("RULE");
  const [isUserName, setIsUserName] = useState<string>("");
  const [isSoundGlobalVolumeState, setIsSoundGlobalVolumeState] = useState<number>(0.5);
  const [isMutedGlobalVolume, setIsMutedGlobalVolume] = useState<boolean>(false);
  const [isAnimationsRef, setIsAnimationsRef] = useState<[]>([]);
  const [isSoundsRef, setIsSoundsRef] = useState<[]>([]);
  const [isTimer, setIsTimer] = useState<number>(10)
  const [isEndGame, setIsEndGame] = useState<boolean>(false)
  // const [ResetGame, setIsResetGame] = useState<any>('')

  return (
    <NavigationContext.Provider value={{

      step: isStepState,
      setStep: (number: number) => setIsStepState(number),

      choices: isChoices,
      setChoices: (choice: []) => setIsChoices(choice),

      state: isState,
      setState: (state: string) => setIsState(state),

      userName: isUserName,
      setUserName: (name: string) => setIsUserName(name),

      soundGlobalVolume: isSoundGlobalVolumeState,
      onChangeSoundGlobalVolume: (volume: number) => setIsSoundGlobalVolumeState(volume),

      mutedGlobalVolume: isMutedGlobalVolume,
      setMutedGlobalVolume: (mute: boolean) => setIsMutedGlobalVolume(mute),

      animationsRef: isAnimationsRef,
      setAnimationsRef: (animRef: []) => setIsAnimationsRef(animRef),

      soundsRef: isSoundsRef,
      setSoundsRef: (soundRef: []) => setIsSoundsRef(soundRef),

      timer: isTimer,
      setTimer: (timer: number) => setIsTimer(timer),

      endGame: isEndGame,
      setEndGame: (bool: boolean) => setIsEndGame(bool),

      resetGame: () => { 
        setIsAnimationsRef([])
        setIsSoundsRef([])
        setIsStepState(0)
        setIsChoices([])
        setIsState("RULE")
        setIsUserName("")
        setIsSoundGlobalVolumeState(0.5)
        setIsMutedGlobalVolume(false)
        setIsTimer(10)
        setIsEndGame(false)
      },

    }}>
      {props.children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider;