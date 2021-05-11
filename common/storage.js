import { AsyncStorage } from "react-native";
import { handleError } from "./errorHandler";

const setItem = async (name, value) => {
  try {
    console.log(`setting ${name} with value ${value}`)
    await AsyncStorage.setItem(name, value);
  } catch (error) {
    // Error saving data
    handleError(error)
  }
}

const getItem = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      return value
    }
  } catch (error) {
    handleError(error)
  }
}

export { setItem, getItem }