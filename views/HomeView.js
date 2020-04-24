import React from "react"
import {View, Text} from "react-native"
import CheckboxView from "./CheckboxView"
import useBillPayFormat from "../hooks/useBillPayFormat"


export default function HomeView() {
  
  return (
  <View>
    <Text>Home</Text>
    {/* <CheckboxView 
      data={useBillPayFormat()}
    /> */}
  </View>
  );
}