import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function SideNav({setHomeView}) {

  return <View style={styles.container}>
    <Text>Side Nav</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
    backgroundColor: "#fff"
  },
});