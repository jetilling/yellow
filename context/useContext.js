import React, { createContext, useState, useReducer } from "react";

const initialState = {
  loggedIn: false,
  token: "",
  user: {},
  view: "login",
  error: false,
  errorMessage: "",
  collections: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {...state, loggedIn: true, token: action.payload.token, user: action.payload.user, view: "home"};
    case 'SET_CURRENT_VIEW':
      return {...state, view: action.payload}
    case "UPDATE_ERROR":
      return {...state, error: action.payload.error, errorMessage: action.payload.message ? action.payload.message : ""}
    case "UPDATE_COLLECTIONS":
      return {...state, collections: action.payload}
    default:
      throw new Error();
  }
}

export const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};