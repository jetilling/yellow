import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'
import useQuery from "../hooks/useQuery"
import {login} from "../queries/auth"

export default function LoginView() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

    const result = useQuery(login(email, password))

  }

  return <View style={styles.container}>
    <Text style={styles.title}>Login</Text>

    <Text>Email</Text>
    <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} autoCapitalize={"none"} autoCorrect={false} />
    
    <Text>Password</Text>
    <TextInput style={styles.input} type={password} value={password} onChangeText={text => setPassword(text)} autoCapitalize={"none"} autoCorrect={false} textContentType={"password"} />

    <Button onPress={handleLogin}><Text>Login</Text></Button>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40
  },
  title: {
    fontSize: 30
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: 200,
    height: 40,
    fontSize: 16,
    margin: 5,
    padding: 10
  }
});