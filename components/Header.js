import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default function Header() {
  return <View>
    <Text style={styles.title}>Yellow</Text>
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
});