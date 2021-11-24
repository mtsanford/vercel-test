import React, { useState } from "react";

export type Orientation = "portrait" | "landscape";

export interface UIContextInterface {
  orientation: Orientation;
  setOrientation: (newOrientation: Orientation) => void;
}

export const UIContext = React.createContext<UIContextInterface | null>(null);

export const UIContextProvider = (props) => {
  const [orientation, setOrientation] = useState<Orientation>('portrait');

  const setOrientationHandler = (newOrientation: Orientation) => {
    setOrientation(newOrientation);
  }

  const contextValue = {
    orientation,
    setOrientation: setOrientationHandler,
  };

  return (
    <UIContext.Provider value={contextValue}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
