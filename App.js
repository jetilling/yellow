import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AppContextProvider} from "./context/useContext";
import ErrorBoundary from './ErrorBoundry';
import Router from "./router";

export default function App() {

  return (
    <AppContextProvider>
      <ErrorBoundary>
        <SafeAreaView style={styles.container}>
          <Router />
        </SafeAreaView>
      </ErrorBoundary>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFDFF',
  },
});
