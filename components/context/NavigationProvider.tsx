import React, { createContext, useState } from "react";

export const NavigationContext = createContext({
  step: 0,
  onChangeStep: (number: number) => { }
});

const NavigationProvider = (props: any) => {
  const [stepState, setStepState] = useState(0);

  return (
    <NavigationContext.Provider value={{
      step: stepState,
      onChangeStep: (number: number) => setStepState(number),

    }}>
      {props.children}
    </NavigationContext.Provider>
  )
}


export default NavigationProvider;