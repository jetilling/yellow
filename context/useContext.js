import React, { createContext, useState } from "react";

export const AppData = {
  loggedIn: false,
  token: "",
  user: {}
};

export const AppContext = createContext(AppData);

export const AppContextProvider = ({ children }) => {
  const [appContext, setAppContext] = useState(AppData);
  return (
    <AppContext.Provider value={{ state: appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};