import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { AppContextProvider, AppContext } from "./context/useContext";
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import Header from "./components/Header"

export default function App() {
  const [view, setView] = useState(<LoginView />)
  const context = useContext(AppContext);

  useEffect(() => {
    // Add a call to authenticate the token,
    // check if the token exists, etc
    context.loggedIn && setView(<HomeView />)
  }, [])

  return (
    <AppContextProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        {view}
      </SafeAreaView>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFDFF',
  },
});
