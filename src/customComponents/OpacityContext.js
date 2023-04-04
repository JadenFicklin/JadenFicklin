import { createContext, useContext, useState } from "react";

const OpacityContext = createContext();

export const useOpacity = () => {
  return useContext(OpacityContext);
};

export const OpacityProvider = ({ children }) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <OpacityContext.Provider value={{ opacity, setOpacity }}>
      {children}
    </OpacityContext.Provider>
  );
};
