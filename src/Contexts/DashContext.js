import React, { useState, createContext } from 'react';

const DashContext = createContext();


function DashProvider({ children }) {

  const [ open, setOpen ] = useState(true);

  const handleNaveBarClose = () => {
    setOpen(false);
  };

  const handleNaveBarOpen = () => {
    setOpen(true);
  };

  return (
    <DashContext.Provider value={{ 
      handleNaveBarClose, 
      handleNaveBarOpen, 
      open,
    }}>
      {children}
    </DashContext.Provider>
  );
}

export { DashContext, DashProvider };