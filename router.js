import React, {useContext, useState, useEffect} from 'react';
import { AppContext } from './context/useContext';
import LoginView from './views/LoginView';
import HomeView from "./views/HomeView";
import { getItem } from "./common/storage";

export default function Router() {
  const [view, setView] = useState(<LoginView />)
  const context = useContext(AppContext);

  useEffect(() => {
    (async () => {
      // Add a call to authenticate the token,
      // check if the token exists, etc
      let token = await getItem("token")
      token && context.dispatch({type: "SET_CURRENT_VIEW", payload: "home"})
    })()
  }, [])

  useEffect(() => {
    switch(context.state.view) {
      case "login":
        setView(<LoginView />)
        break;
      case "home":
        setView(<HomeView />)
        break;
    }
  }, [context.state.view])

  return view
}