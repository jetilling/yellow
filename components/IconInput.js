import React from 'react'
import { StyleSheet, View, TextInput} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function IconInput({icon, inputValue, onChangeText, secureTextEntry = false}) {

  return <View style={styles.inputContianer}>
    <FontAwesomeIcon icon={icon} style={styles.inputLabel} />
    <TextInput 
      style={styles.input} 
      value={inputValue} 
      onChangeText={onChangeText} 
      autoCapitalize={"none"} 
      autoCorrect={false} 
      secureTextEntry={secureTextEntry} 
    />
  </View>
}

const styles = StyleSheet.create({
  inputContianer: {
    borderWidth: 2,
    borderColor: "#bfbfbf",
    borderRadius: 2,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    margin: 10
  },
  inputLabel: {
    fontSize: 14,
    marginLeft: 5,
    color: "#bfbfbf"
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: 200,
    height: 40,
    fontSize: 16,
    padding: 10
  }
});