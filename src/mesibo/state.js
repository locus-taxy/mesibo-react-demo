import React, { createContext, useState } from "react";

const MesiboContext = createContext();

const MesiboProvider = ({ children }) => {
  const [isMesiboOnline, setMesiboOnline] = useState(0);

  return (
    <MesiboContext.Provider
      value={{
        isMesiboOnline,
        setMesiboOnline,
      }}
    >
      {children}
    </MesiboContext.Provider>
  );
};

const useMesibo = () => {
  const context = React.useContext(MesiboContext);
  return context;
};

export { useMesibo, MesiboProvider };
