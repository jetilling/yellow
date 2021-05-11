import React, {useState, useContext, useEffect} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {executeQuery} from "../hooks/useQuery"
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import login from "../queries/login"
import IconInput from "../components/IconInput"
import { AppContext } from "../context/useContext"
import { setItem } from "../common/storage"

export default function LoginView() {
  const context = useContext(AppContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const result = await executeQuery(login({email, password}))

    if (result.data && result.data.token) {
      context.dispatch({type: "LOG_USER_IN", payload: {token: result.data.token, user: result.data.user}})
      context.dispatch({type: "UPDATE_ERROR", payload: {error: false}})
      setItem("token", result.data.token)
    } else if (result.error) {
      console.log('updating error?')
      context.dispatch({type: "UPDATE_ERROR", payload: {message: result.error.message, error: true}})
    }

  }

  useEffect(() => {
    console.log('error? ', context)
  }, [context])

  return <View style={styles.container}>
      <View>
        <Text style={styles.pageTitle}>Yellow</Text>
      </View>
    
      <View style={styles.loginBox}>
        <IconInput
          icon={faEnvelope}
          inputValue={email}
          onChangeText={text => setEmail(text)} />

        <IconInput 
          icon={faLock}
          inputValue={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        
        {context.state.error && <Text>{context.state.errorMessage}</Text>}
        <Button title="Login" onPress={handleLogin} />
      </View>

    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5fffa"
  },
  pageTitle: {
    fontSize: 50
  },
  loginBox: {
    backgroundColor: "#ffdc6a",
    width: "90%",
    height: "90%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    paddingTop: 20
  },
  title: {
    fontSize: 30
  },
  inputContianer: {
    borderWidth: 2,
    borderColor: "#bfbfbf",
    borderRadius: 2,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 14
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: 200,
    height: 40,
    fontSize: 16,
    padding: 10
  }
});