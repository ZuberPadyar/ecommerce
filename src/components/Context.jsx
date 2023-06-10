import React, { createContext, useState } from 'react';

export const Cardcontext = createContext([]);

export const CardProvider = ({ children }) => {
  const [Card, setCard] = useState([]);

  return (
    <Cardcontext.Provider value={{ Card, setCard }}>
      {children}
    </Cardcontext.Provider>
  );
};
